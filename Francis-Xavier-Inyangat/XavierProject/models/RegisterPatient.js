const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

// define reg schema
const RegisterSchema = new mongoose.Schema({
    surname:{
        type: String,
        trim:true
    },
    givenName:{
        type: String,
        trim:true
    },
    dob:{
        type: String,
        
    },
    residence:{
        type: String,
        trim:true
    },
    job:{
        type: String,
        trim:true
    },
    nationality:{
        type: String,
        trim:true
    },
    gender:{
        type: String,
        trim:true
    },
    category:{
        type: String,
        trim:true
    }
  
});


// Export Model
// RegisterSchema.plugin(passportLocalMongoose, { usernameField: "regEmail"}); //used for auth
module.exports = mongoose.model("RegPatient", RegisterSchema);

