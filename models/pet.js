// Dependencies
const mongoose = require('mongoose');
// Initialize shortcute
const Schema = mongoose.Schema;
// Initialize Schema
const petSchema = new Schema({
    name: String,
    img: String,
    breed: String,
    age: Number,
    size: Number,
    personality: String,
    energy: Number,
    vaccine: Boolean,
    explOne: String,
    socialized: Boolean,
    explTwo: String, 
    about: String,
    locations: String,
});
// Export Models
const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;