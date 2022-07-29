const mongoose = require('mongoose');
const registrationSchema = new mongoose.Schema({
    surName : {
        type : String,
        required : true
    },
    givenName : {
        type : String, 
        required : true
    },
    dateofBirth : {
        type : String, 
        required : true
    },
    placeOfResidence : {
        type : String, 
        required: true
    },
    occupation : {
        type : String, 
        required : true
    },
    nationality : {
        type : String, 
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    category : {
        type : String, 
        required: true
    }
})

module.exports = mongoose.model('Registration', registrationSchema)