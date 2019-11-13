const express = require('express');
const dotenv = require('dotenv').config;
const colors = require('colors');
const errorHandler = require('./middleware/error');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load env vars
dotenv({ path: './config/config.env' });

// Connect to Database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mont routes
app.use('/api/v1/bootcamps', bootcamps);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode and on Port ${PORT}`.yellow.bold));

// Handle unhandled promises rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close Server and Active Process
    server.close(() => process.exit(1));
})