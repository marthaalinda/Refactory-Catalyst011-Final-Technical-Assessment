const mongoose = require("mongoose");
const covidSchema = new mongoose.Schema({
  surname: {
    type: String,
  },
  givenname:{
    type:String,  
  },
  date:{
    type:Date,
  },
  place:{
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
module.exports = mongoose.model("Covid", covidSchema);