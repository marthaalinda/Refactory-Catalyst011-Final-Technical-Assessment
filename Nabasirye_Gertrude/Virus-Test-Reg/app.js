const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Requiring Database
const config = require("./config/db");

// Initialising Routes
const homeRoutes = require("./routes/homeroutes");

// Initialisng Server
const app = express();

// Database
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB");
});
db.on("error", (err) => {
  console.log(err);
});

// Setting up View Engine
app.set("view engine", "pug");
app.set("views", "./views");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", homeRoutes);
// Handle Non-existing Errors.
app.get("*", (req, res) => {
  res.status(404).send("This route does not exist");
});

// Running Server
app.listen(4000, () => console.log("Server running on port 4000."));
