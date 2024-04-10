import express from 'express';
const app = express();
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import { signin } from './controllers/auth.controller.js';
import dotenv from 'dotenv';

dotenv.config();

app.use(express.json());


mongoose.connect('mongodb+srv://sayambadoni2:sayam@blogquill.nfghkwu.mongodb.net/blogquill?retryWrites=true&w=majority&appName=blogquill')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });



app.post('/api/auth/signin', signin);

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});



