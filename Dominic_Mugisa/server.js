const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

//Express Session Section
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false,
});

// Routing Section
const patientRoute = require("./routes/patientRoute");

// Database
const config = require("./config/database");

//instatiating the express server
const server = express();

//Setup Mongoose
//connect mongoose with db
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

//Checking for the connection of MongoDb
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Checking for any db errors on connection
db.on("error", function (err) {
  console.error(err);
});

// views settings or configurations
server.set("view engine", "pug");
server.set("views", "./views");

//Below we configure the middle-ware - 'express.urlencoded({extended: true})' is responsible for parsing(/screening) form data into the node server.
server.use(express.static(path.join(__dirname, "public")));
server.use(express.urlencoded({ extended: true }));
server.use(expressSession);

server.use("/patient", patientRoute);

// handling non existing routes
server.get("*", (req, res) => {
  res.status(404).send("OOPS! WRONG ADDRESS");
});

// server
server.listen(4000, () => console.log("Listening on Port 4000"));
