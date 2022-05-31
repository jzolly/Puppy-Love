// Dependencies
const express = require('express');
const router = express.Router();
const Possible = require('../models/possible.js');

// Routes
// Seed Data
const possibleSeed = require('../models/possibleSeed.js');

router.get('/seed', (req, res) => {
    Possible.deleteMany({}, (error, allPossible) => { });

    Possible.create(possibleSeed, (error, data) => {
        res.redirect('/possible');
        console.log(error);
    });
});

// I
router.get('/', (req, res) => {
    Possible.find({}, (error, allPossible) => {
        res.render('possible/index.ejs', {
            possible: allPossible
        });
    });
});

// N. 
// U
// C
// E
// Show

// Export
module.exports = router;