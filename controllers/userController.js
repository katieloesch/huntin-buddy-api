import { StatusCodes } from 'http-status-codes';
import cloudinary from 'cloudinary';
import { formatImage } from '../middleware/multerMiddleware.js';

import User from '../models/UserModel.js';
import Job from '../models/JobModel.js';

// export const getCurrentUser = async (req, res) => {
//   const user = await User.findOne({ _id: req.user.userId });
//   // user variable contains hashed pw, use instance method to make sure pw is removed and not sent to frontend
//   const userNoPw = user.toJSON();
//   res.status(StatusCodes.OK).json({ user: userNoPw });
// };

export const getCurrentUser = async (req, res) => {
  try {
    console.log('Fetching current user:', req.user?.userId);

    if (!req.user || !req.user.userId) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ error: 'Unauthorized: No user ID provided' });
    }

    // ✅ Fetch user safely and exclude password
    const user = await User.findById(req.user.userId).select('-password');

    if (!user) {
      console.error('User not found in database');
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: 'User not found' });
    }

    console.log('Current user found:', user);

    res.status(StatusCodes.OK).json({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message || 'Failed to get user' });
  }
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  console.log(users, jobs);
  res.status(StatusCodes.OK).json({ users, jobs });
};

export const updateUser = async (req, res) => {
  console.log('updating user....................');
  const newData = { ...req.body };
  if (req.file) {
    console.log('req.file ----------------------');
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);

    newData.avatar = response.secure_url;
    newData.avatarPublicId = response.public_id;

    console.log('RESPONSE');
    console.log(newData.avatar);
    console.log(newData.avatarPublicId);
  }
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newData);

  console.log('new Data ^^^^^^^^^^^^^^^^^^');
  console.log(newData);

  console.log('UPDATED USER ############## ');
  console.log(updatedUser);

  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }
  res.status(StatusCodes.OK).json({ msg: 'update user...' });
};

// export const updateUser = async (req, res) => {
//   const newData = { ...req.body };
//   if (req.file) {
//     const file = formatImage(req.file);

//     const response = await cloudinary.v2.uploader.upload(file);

//     // await fs.unlink(req.file.path);
//     newData.avatar = response.secure_url;
//     newData.avatarPublicId = response.public_id;
//     console.log('id_______', newData.avatarPublicId);
//   }
//   const updatedUser = await User.findByIdAndUpdate(req.user.userId, newData);
//   console.log('updated user: ', updatedUser);

//   if (req.file && updatedUser.avatarPublicId) {
//     await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
//   }
//   res.status(StatusCodes.OK).json({ msg: 'update user...' });
// };

// export const updateUser = async (req, res) => {
//   try {
//     console.log('>>>>>>>');
//     console.log('Incoming update request (Before Fix):', req.body);

//     // ✅ Convert `req.body` to a regular object
//     const newData = JSON.parse(JSON.stringify(req.body));

//     console.log('Parsed update data:', newData);

//     if (req.file) {
//       console.log('Uploading new avatar...');
//       const file = formatImage(req.file);
//       const response = await cloudinary.v2.uploader.upload(file);
//       newData.avatar = response.secure_url;
//       newData.avatarPublicId = response.public_id;
//       console.log('New avatar uploaded:', newData.avatar);
//     }

//     console.log('Updating user with data:', newData);
//     const updatedUser = await User.findByIdAndUpdate(req.user.userId, newData, {
//       new: true,
//       runValidators: true,
//     });

//     if (!updatedUser) {
//       console.error('User not found');
//       return res
//         .status(StatusCodes.NOT_FOUND)
//         .json({ error: 'User not found' });
//     }

//     if (req.file && updatedUser.avatarPublicId) {
//       await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
//     }

//     console.log('Updated user:', updatedUser);

//     res.status(StatusCodes.OK).json({ success: true, user: updatedUser });
//   } catch (error) {
//     console.error('Error updating user:', error);
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ error: error.message || 'Failed to update user' });
//   }
// };
