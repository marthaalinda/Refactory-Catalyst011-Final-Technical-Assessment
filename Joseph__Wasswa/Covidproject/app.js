const express = require('express');
const  path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const registerroutes = require("./routes/registerroutes")

// Express Session
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
});

// Database
const config = require('./config/database');
const app = express();

// Mongoose Set up

mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;
// Check connection
db.once('open', function () {
  console.log('Connected to MongoDB');
});
// Check for db errors
db.on('error', function (err) {
  console.error(err);
});

// Setting view Engine.
app.set('view engine', 'pug');
app.set('views', './views');

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession);


//setting up Routes
app.use('/', registerroutes);

// Non Existing Routes and Server Port
// handling non existing routes
app.get('*', (req, res) => {
  res.status(404).send('OOPS! WRONG ADDRESS');
});

// server
app.listen(4000, () => console.log('Listening on Port 4000'));


