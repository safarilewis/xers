const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,

    },
    lastName: {
        type: String,

    },
    location: {
        type: String,
    },
    title: {
        type: String,

    },
    techStacks: {
        type: Array,

    },
    isMentor: { type: Boolean, default: false },
    image: {
        data: Buffer,
        type: String,
        sparse: true
    },
    projects: [{
        type: String,
        ref: "projects",
        sparse: true
    }]
})

//Model
const Model = mongoose.model
const user = Model('users', userSchema)




module.exports = user; 