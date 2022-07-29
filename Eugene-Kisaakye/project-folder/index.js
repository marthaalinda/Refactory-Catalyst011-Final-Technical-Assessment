const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();

app.use(express.static('public'))


mongoose.connect("mongodb://localhost:27017/work", () => {
  console.log("Connected to database!");
});

app.set

router.get('/',(req,res) =>{
  res.sendFile('/Eugene-Kisaakye/project-folder/public/index.html')
})

app.listen(4000, () => {
  console.log("server started on port 4000");
});
