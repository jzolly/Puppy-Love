// Dependencies
const express = require('express');
const router = express.Router();
const Friend = require('../models/friend.js');

// Routes
// I
router.get('/', (req, res) => {
    res.render('friends/index.ejs');
});

// N logic from the new ejs pages will need to be written in to the add friend button.  Grab information by id of the added pet.
// Delete
// U
// C POST route, connected to the add new friend button. this may be some sort of append feature coming from the possible seed data. Logic help.
// E
// Show
router.get('/:id', (req, res) => {
    Friend.findById(req.params.id, (err, foundFriend) => {
        res.render('friends/show.ejs', {
            friend: foundFriend
        });
    });
});
// Export
module.exports = router;