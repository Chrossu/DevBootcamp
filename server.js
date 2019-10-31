const express = require('express');
const dotenv = require('dotenv').config;
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load env vars
dotenv({ path: './config/config.env' });

// Connect to Database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mont routes
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode and on Port ${PORT}`));

// Handle unhandled promises rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close Server and Active Process
    server.close(() => process.exit(1));
})