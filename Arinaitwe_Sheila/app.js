const express = require('express');
const  path = require('path');
const mongoose = require('mongoose');
// const passport = require('passport');
require('dotenv').config();


// Express Session
// const expressSession = require('express-session')({
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: false,
// });

const indexRoutes = require("./routes/indexRoutes")
// const salesRoutes = require("./routes/salesroutes")
// const purchasesRoutes = require("./routes/procurementroutes")
// const registerRoutes = require("./routes/registerRoutes")



// Database
const config = require('./config/database');

//initialising models for the login (to be used in passport)
// const Signup = require('./models/Signup');

//Initialising server, the variable server can be named anything and be used like that throughout the calling in the routes file 
const app = express();

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
app.set('view engine', 'pug');
app.set('views', './views');

// Express Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(expressSession);

// configuring passport
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(Signup.createStrategy());
// passport.serializeUser(Signup.serializeUser());
// passport.deserializeUser(Signup.deserializeUser());

//loginChecker
// const loginchecker = function(req,res,next){
//   if (req.path != '/login' && req.path != '/landing' && !req.session.user){
//     res.redirect('/landing')
//   }
//   next()
// }
// app.use(loginchecker)

//setting up Routes
app.use('/', indexRoutes);
// app.use('/', salesRoutes);
// app.use('/', purchasesRoutes);
// app.use('/',registerRoutes);



// Non Existing Routes and Server Port
// handling non existing routes
app.get('*', (req, res) => {
  res.status(404).send('OOPS! WRONG ADDRESS');
});

// server
app.listen(4000, () => console.log('Listening on Port 4000'));


