import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import { errorHandler } from './middlewares/error.js';

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use(errorHandler);

app.listen(8080, () => {
  console.log('Server is running');
});
