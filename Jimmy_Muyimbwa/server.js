const express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  passport = require('passport');
require('dotenv').config();


// Express Session
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
});


// Routes
 const registerRoutes = require("./routes/registerroutes");
 

// Database
const config = require('./config/database');

//Model
const Covid = require("./models/Covid");

//Initialising server
const server = express();

// Mongoose Set up
//connect mongoose
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
server.set('view engine', 'pug');
server.set('views', './views');

// Express Middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));
server.use(expressSession);




// Routing
server.use('/', registerRoutes);


// Non Existing Routes and Server Port
// handling non existing routes
server.get('*', (req, res) => {
  res.status(404).send('OOPS! WRONG ADDRESS');
});

// server
server.listen(4000, () => console.log('Listening on Port 4000'));