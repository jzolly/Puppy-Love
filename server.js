// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

// Middleware


// Route
app.get('/', (req, res) => {
    res.render('landing.ejs');
})

// Listeners
const PORT = process.env.PORT;
app.listen(PORT,  () => console.log(`Server is listening on ${PORT}`));