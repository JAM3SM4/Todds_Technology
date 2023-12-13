const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Data = require('/models/Data');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://jamesjanelson:Tuesday@25@cluster0.zaui4d7.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
const exampleRouter = require('./routes/example');
app.use('/api/example', exampleRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
