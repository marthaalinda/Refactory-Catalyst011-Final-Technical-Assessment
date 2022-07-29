const mongoose = require("mongoose");

// const passportLocalMongoose = require("passport-local-mongoose");

const IndexSchema = new mongoose.Schema({
  surname: {
    type: String,
  },
  given:{
    type:String,
  
  },

  date:{
    type:Date,
  },

  placeofresidence:{
    type:String,
  
  },
  occupation:{
    type:String,

  },

  nationality:{
    type:String,
    trim:true,
  },

  gender:{
    type:String,
  
  },

  category:{
    type:String,
  },  

});

// Export Model

module.exports = mongoose.model("Index", IndexSchema);