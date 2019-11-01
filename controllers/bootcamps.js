const Bootcamp = require('../models/Bootcamp');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show all bootcampsu" });
}

// @desc    Get a single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show bootcamps" });
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Create bootcamp" });
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Update a bootcamp" });
}

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Delete bootcamp" });
}