// Dependencies
const mongoose = require('mongoose');
// Initialize shortcute
const Schema = mongoose.Schema;
// Initialize Schema
const petSchema = new Schema({
    name: String,
    breed: String,
    age: Number,
    energy: String,
    vaccine: Boolean,
    about: String,
});
// Export Models
const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;