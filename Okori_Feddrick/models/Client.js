const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const ClientSchema = new mongoose.Schema({

    surname_name: {
        type: String,
    },
    last_name: {
        type: String,
       
    },

    dob: {
        type: Date,
    },
    residence: {
        type: String,
    },
    occupation: {
        type: String,

    },

    nationality: {
        type: String,
    },
    sex: {
        type: String,
    },
    category: {
        type: String,
    }
});

// Export Model

module.exports = mongoose.model("Client", ClientSchema);

