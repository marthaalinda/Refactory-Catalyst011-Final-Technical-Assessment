const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb://localhost:27017/work",() => {
    console.log("Connected to database!");
  });


app.listen(4000,()=>{
    console.log('server started on port 4000')
});