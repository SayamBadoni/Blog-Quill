const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose.connect(
    process.env.MONGO
)
.then(() => {
    console.log('MongoDB is connected');
})
.catch((err) => {
    console.log(err);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});

app.use('/api/user', userRoutes);

