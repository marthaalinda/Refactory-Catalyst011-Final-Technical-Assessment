const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
require("dotenv").config();

// start x-session
const expressSession = require("express-session")({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  });

// routes
const landingPage = require('./routes/landingPageRoute')


// models
const config = require('./config/database');


// initializing the express server
const app = express();


//seting up mongoose

mongoose.connect(config.database,{useNewUrlParser: true});
 
const db = mongoose.connection;

db.once('open', function(){
  console.log('Connected to MongoDB');
});

db.on('error', function(err){
  console.error(err);
});


  // views settings or configurations
  app.set('view engine', 'pug');
  app.set('views', './views');
  
  
  app.use(express.urlencoded({extended: true}));
  
//to access static files the server checks the public folder
app.use(express.static(path.join(__dirname, 'public')))

app.use(expressSession);
//initiazing passport and they shd be like this 
// constantly they  are methods(line 43-44)
app.use(passport.initialize());
app.use(passport.session());





// serve routes
app.use('/',landingPage);





// handling non existing routes
app.get("*", (req, res) => {
  // res.status(404).send('Sorry, we have hit a dead end here. GO BACK');
  res.status(404).send('Page Not Found');
});

// server
app.listen(4000, ()=> console.log("Listening on Port 4000"));



