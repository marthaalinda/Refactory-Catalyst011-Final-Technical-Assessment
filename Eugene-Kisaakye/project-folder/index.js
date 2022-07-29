const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();

mongoose.connect("mongodb://localhost:27017/work", () => {
  console.log("Connected to database!");
});

router.get('/',(req,res) =>{
  res.sendFile()
})

// app.listen(4000, () => {
//   console.log("server started on port 4000");
// });
