const express = require('express'); 
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();

// express Session 
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});
 // initatiate Routes
const indexRoute = require('./routes/indexRoute');


//Database
let config = require('./config/database');

//models 


//initiatlising server
const server = express();
const Index = require('./models/index');
c
//database setup
//setting connection
mongoose.connect(config.database, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;

//checking connection
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Check for db errors
db.on("error", function (err) {
  console.error(err);
});


// Setting view Engine.
server.set("view engine", "pug");
server.set("views", "./views");

// //express middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "public")));
server.use(expressSession);

//configuring passport
server.use(passport.initialize());
server.use(passport.session());

 //Passport Local Strategy
//passport.use(Employee.createStrategy());
//passport.serializeUser(Employee.serializeUser());
//passport.deserializeUser(Employee.deserializeUser());
//LoginChecker
// const loginchecker = (req, res, next) => {
//   if (req.path != "/login" && req.path != "/register" && !req.session.user) {
//     res.redirect("/login");
//   }
//   next();
// };
//server.use(loginchecker);


// Setting up Routes
server.use('/', indexRoute);


// handling non existing routes
//server.get("*", (req, res) => {
    //res.status(404).render("notfound");
  //});

 
  
  // server
  server.listen(4000, () => console.log("Listening on Port 4000"));
  
