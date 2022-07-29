const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  surname: {
    type: String,
    required: true,
    maxlength: 16,
  },
  givenname: {
    type: String,
    required: true,
        maxlength: 16,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  placeOfResidence: {
    type: String,
    required: true,
    maxlength: 20,
  },
  occupation: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20,
  },

  nationality: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 20,
  },

  gender: {
    type: String,
    required: true,
  },

  security: {
    type: String,
    required: true,
  },
  fallback: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Registration", userSchema);
