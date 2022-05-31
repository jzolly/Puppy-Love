// Dependencies
const express = require('express');
const router = express.Router();
const Possible = require('../models/possible.js');

// Routes
// Seed Data

// I
router.get('/', (req, res) => {
    res.render('possible/index.ejs');
});

// N. 
// U
// C
// E
// Show

// Export
module.exports = router;