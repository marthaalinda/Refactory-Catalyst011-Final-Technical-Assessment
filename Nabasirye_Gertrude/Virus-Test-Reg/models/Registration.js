const mongoose = require('mongoose');

const regSchema = mongoose.Schema({
    surname: {
        type: String,
        minLength: 2,
        maxLength: 15,
        trim: true,
        require: [true, 'A surname is required.'],
    },
    givename: {
        type: String,
        trim: true,
        minLength: 2,
        maxLength: 15,
        require: [true, 'A given name is required.'],
    },
    dob: {
        type: Date,
        require: [true, 'A Date of Birth is required.'],
    },
    occup: {
        type: String,
        trim: true,
        minLength: 5,
        maxLength: 20,
        require: [true, 'An Occupation is required.'],
    },
    ntnlty: {
        type: String,
        trim: true,
        minLength: 5,
        maxLength: 20,
        require: [true, 'A Nationality is required.'],
    },
    gender: {
        type: String,
        require: [true, 'A Gender is required.'],
    },
    cat: {
        type: String,
        require: [true, 'A Category is required.'],
    },
});

module.exports = mongoose.model('Registration', regSchema)