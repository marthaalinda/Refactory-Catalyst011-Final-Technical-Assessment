const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();


// Import db config
const config = require('./config/db');

// Import routes
const registrationRoutes = require('./routes/registrationRoutes');

// creating a connection between our Controller and Database
mongoose.connect(config.database)
const db = mongoose.connection
// Testing Connection to the data
db.once('open',()=>{
    console.log('MongoDB Atlas connected succesfully');
});

db.on('error', (err)=>{
console.error(err);
});

// set the view engine
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views')); 

// Setting directory for static files
app.use(express.static(path.join(__dirname, "public")));

// MIDDLEWARE 
app.use(express.urlencoded({extended:false}));
// telling body parser to use json format
app.use (express.json());

// using my imported routes
app.use('/', registrationRoutes);


// This message that appears in case someone searches for a route that doesnt exist on my server
app.get('*', (req, res) => {
    res.status(404).send("URL doesn't exist")
  })

// Setting connection port
app.listen(4000,()=>{
    console.log('server started on port 4000')
});
