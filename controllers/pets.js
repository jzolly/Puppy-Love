// Dependencies
const express = require('express');
const router = express.Router();
const Pet = require('../models/pet.js');

// Routes
// I
router.get('/', (req, res) => {
    Pet.find({}, (err, foundPets) => {
        res.render('pets/index.ejs', {
            pets: foundPets
        });
    });
});

// N
router.get('/new', (req, res) => {
    res.render('pets/new.ejs');
});

// D
// U
// C
router.post('/', (req, res) => {
    Pet.create(req.body, (err, createdPet) => {
        res.redirect('/pets');
    });
});
// E
// S

// Export Routes
module.exports = router;
