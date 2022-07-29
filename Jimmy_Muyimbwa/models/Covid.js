const mongoose = require("mongoose");

const CovidSchema = new mongoose.Schema({
  surname: {
    type: String,
  },
  givenname: {
    type: String,
  },
  residence: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    unique: true,
    
  },
  nationality: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
    
});

// Export Model
module.exports = mongoose.model("Covid", CovidSchema);


