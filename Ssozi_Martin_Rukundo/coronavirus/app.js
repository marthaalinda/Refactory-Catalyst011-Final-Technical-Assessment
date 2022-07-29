
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require("dotenv").config();

// express-session
const expressSession = require('express-session')({
    secret : 'mrssozi',
    resave : false,
    saveUninitialized : false
});

// routing section
const regRoutes = require('./routes/registrationroute')

// model section
const config = require('./config/database');
const registration = require('./models/Registration')

// server instatiation 
const app = express()

//connecting mongoose db
mongoose.connect(config.database, {useNewUrlParser : true});
const db = mongoose.connection;

db.once('open', ()=>{
    console.log('Connected to MongoDB')
});

db.on('error', (err)=>{
    console.log('Error in connection', err)
})

// setting up the view engine
app.set('view engine', 'pug')
app.set('views', '/.views')

// static files path
app.use(express.static(path.join(__dirname, 'public')));

// middleware to handle our form data
app.use(express.urlencoded({extended: true}));
app.use(expressSession);

// settin up the routes
app.use('/register', regRoutes)

// Non existent routes hanlding
app.get('*', (req, res)=> {
    res.status(404).send('Server not found')
  })

// Listening port configuration
app.listen(4000, () => console.log("Listening on Port 4000"));
