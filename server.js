// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const petsController = require('./controllers/pets.js');
const app = express();
const morgan = require('morgan');
require('dotenv').config();

// Database Configuration
mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
});

// Database Connection Error/Success
const db = mongoose.connection;
db.on('error', (err) => console.log(`${err.message} is mongod not running?`));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); 
app.use('/pets', petsController);

// Route
app.get('/', (req, res) => {
    res.render('landing.ejs');
});

// Listeners
const PORT = process.env.PORT;
app.listen(PORT,  () => console.log(`Server is listening on ${PORT}`));