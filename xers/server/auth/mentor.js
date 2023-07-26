const Mongoose = require('mongoose');

const mentorSchema = new Mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        unique: false,
        required: true
    },
    lastName: {
        type: String,
        required: true,
        unique: false
    },
    password: {
        type: String,
        minLength: 6,
        required: true
    },
    cohort: {
        type: String,
        required: true,
        unique: false
    },
    role: {
        type: String,
        default: "Mentor",
    },
    description: {
        type: String
    },
    title: {
        type: String
    }
    
});

const mentor = Mongoose.model('mentor', mentorSchema);
module.exports = mentor;