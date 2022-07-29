const mongoose = require('mongoose')

const UserSchema =  new mongoose.Schema({
    surname:{type: String, trim : true, required: true},
    givenname:{type: String, trim : true, required: true},
    nin:{type: String, trim : true, required: true},
    dob:{type: Date, required: true},
    residence:{type: String, trim : true,required: true},
    gender:{type: String, trim : true, required: true},
    occupation:{type:String, trim:true},
    nationality:{type: Number, required: true},
    category:{type: String, trim : true, required: true},
});

module.exports = mongoose.model('User', UserSchema  );