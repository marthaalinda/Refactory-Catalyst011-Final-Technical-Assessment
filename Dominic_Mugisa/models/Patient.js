const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: true
  },
  givenname: {
    type: String,
    required: true,
    unique: true
  },
  dob: {
    type: String,
    required: true
  },
  residence: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("Patient", PatientSchema);
