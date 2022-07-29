//import mongoose
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
//create a schema for how information will be stored
const registrationSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
  },
  Gender: {
    type: String,
    trim: true,
  },
  dob: {
    type: Date,
  },
  lastname: {
    type: String,
    trim: true,
  },
  placeofresidence: {
    type: String,
    trim: true,
  },
  occupation: {
    type: String,
    trim: true,
  },
  nationality: {
    type: String,
    trim: true,
  },
});
//export our schema
module.exports = mongoose.model("Register", registrationSchema);
