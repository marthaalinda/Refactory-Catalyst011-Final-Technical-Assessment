const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const indexSchema = new mongoose.Schema({
  surname: {
    type: String,
  },
  name: {
    type: String,
  },
  DOB:{
    type: Date,
  },
  residence:{
    type:String,
  },
  occupation:{
    type: String,
  },
  nationality:{
    type:String,
  },
  gender:{
    type:String,
  },
  category:{
    type:String,
  },

});

// Export Model

module.exports = mongoose.model("index", indexSchema);
