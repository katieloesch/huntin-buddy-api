import { Router } from 'express';
const router = Router();

import {
  validateIdParam,
  validateJobInput,
} from '../middleware/validationMiddleware.js';
import {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from '../controllers/jobController.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

router
  .route('/')
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route('/stats').get(showStats);

router
  .route('/:id')
  .get(validateIdParam, getJobById)
  .patch(checkForTestUser, validateJobInput, validateIdParam, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
