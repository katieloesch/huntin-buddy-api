import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
import cors from 'cors';

import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary';
import helmet from 'helmet';
import mongSanitize from 'express-mongo-sanitize';

// routers
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

// public folder (backend)
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://hunting-buddy.katieloesch.co.uk',
    ],
    credentials: true,
  })
);

// app.use((req, res, next) => {
//   // handle cors issues
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
//   next();
// });

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(path.resolve(__dirname, './client/dist')));

app.use(cookieParser());
app.use(express.json());

// middleware - security packages
app.use(helmet());
app.use(mongSanitize());

// ---------------------------------------------------------------

// routes
app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
// });
app.get('/api/v1/test-cookie', (req, res) => {
  res.cookie('testCookie', 'value', {
    httpOnly: true,
    secure: false,
    sameSite: 'None',
  });
  res.json({ msg: 'cookie sent' });
});

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use(errorHandlerMiddleware);

// ---------------------------------------------------------------

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);

  app.listen(process.env.PORT || 5100, () => {
    console.log(`server running on port ${process.env.PORT}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
