import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import errorHandler from './middleware/error.js';
import { verifyToken } from './middleware/verify-user.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();
export const { MONGO_DB_URL, PORT, JWT_SECRET } = process.env;

mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(cookieParser());

/// /// ROUTES /////
app.use(authRoutes);
/// / ROUTES END ///

app.get('/', (req, res) => {
  res.send({ status: 'OK', message: 'API SERVICE RUNNING' });
});

app.get('/auth-check', verifyToken, (req, res) => {
  res.send(req.user);
});
app.get('*', (req, res, next) => {
  next(errorHandler(404, 'NOT FOUND'));
});

app.listen(PORT, () => console.log('Server ready '));

app.use((err, req, res) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
