const express = require('express');
const dotenv = require('dotenv').config;
const bootcamps = require('./routes/bootcamps');
const logger = require('./middleware/logger');
const morgan = require('morgan');

// Load env vars
dotenv({ path: './config/config.env' });

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mont routes
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode and on Port ${PORT}`));