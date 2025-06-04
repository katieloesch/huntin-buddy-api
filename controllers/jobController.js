import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import day from 'dayjs';

import Job from '../models/JobModel.js';

export const getAllJobs = async (req, res) => {
  console.log(req.query);

  // extract Search Query e.g. ?search=developer
  const { search, jobStatus, jobType, sort } = req.query; // if search is not provided -> undefined

  // construct MongoDB Query Object
  const queryObj = {
    createdBy: req.user.userId, // filters jobs based on user ID so users only see jobs they created
  };

  // apply search filtering
  if (search) {
    queryObj.$or = [
      // $or -> ensures jobs are retrieved if either condition matches
      // find jobs where the position contains the search term, $options: 'i' makes the search case-insensitive
      { position: { $regex: search, $options: 'i' } },
      // find jobs where the company contains the search term, $options: 'i' makes the search case-insensitive
      { company: { $regex: search, $options: 'i' } },
    ];
  }

  if (jobStatus && jobStatus !== 'all') {
    queryObj.jobStatus = jobStatus;
  }

  if (jobType && jobType !== 'all') {
    queryObj.jobType = jobType;
  }

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    'a-z': 'position',
    'z-a': '-position',
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  // pagination
  const page = Number(req.query.page) || 1; // by default look for first page
  const limit = Number(req.query.limit) || 10; // 10 jobs per page
  const skip = (page - 1) * limit; // e.g. when seeing second page, skip jobs from first page

  const jobs = await Job.find(queryObj).sort(sortKey).skip(skip).limit(limit);
  const totalJobs = await Job.countDocuments(queryObj);
  const numOfPages = Math.ceil(totalJobs / limit); // always round up, page number needs to be integer

  res
    .status(StatusCodes.OK)
    .json({ totalJobs, numOfPages, currentPage: page, jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJobById = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ msg: 'job updated', job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const deletedJob = await Job.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: 'job deleted', job: deletedJob });
};

export const showStats = async (req, res) => {
  // MongoDB aggregation pipeline -> data cleaning, sorting, grouping i.e. a way to process data inside MongoDB
  // docs: https://www.mongodb.com/docs/manual/core/aggregation-pipeline/

  let stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$jobStatus', count: { $sum: 1 } } },
  ]);

  /*  -> output:
    [{ _id: 'interview', count: 37 },
     { _id: 'declined', count: 33 },
     { _id: 'pending', count: 30 }]

     -> need to turn this array into an object
  */

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  // console.log(stats);

  /*  -> output:
      { interview: 36, pending: 29, declined: 35 }    
  */

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } }, // most recent ones should come first
    { $limit: 6 }, // limit to 6 months
  ]);

  // console.log(monthlyApplications);

  /*  -> output:

    [{ _id: { year: 2025, month: 3 }, count: 6 },
    { _id: { year: 2025, month: 2 }, count: 22 },
    { _id: { year: 2025, month: 1 }, count: 21 },
    { _id: { year: 2024, month: 12 }, count: 14 },
    { _id: { year: 2024, month: 11 }, count: 23 },
    { _id: { year: 2024, month: 10 }, count: 14 }]

  */

  monthlyApplications = monthlyApplications
    .map((application) => {
      const {
        _id: { year, month },
        count,
      } = application;

      const date = day()
        .month(month - 1) // dayjs starts at 0 but for mongodb january=1
        .year(year)
        .format('MMM YY');
      return { date, count };
    })
    .reverse();
  // earlier sorting selected 6 most recent months (i.e. reverse-chronological order)
  // now: chronological order

  // console.log(monthlyApplications);
  /*  -> output:
      [
        { date: 'Oct 24', count: 14 },
        { date: 'Nov 24', count: 23 },
        { date: 'Dec 24', count: 14 },
        { date: 'Jan 25', count: 21 },
        { date: 'Feb 25', count: 22 },
        { date: 'Mar 25', count: 6 },
      ];
  */

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
