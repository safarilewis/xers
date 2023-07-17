const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    location: String,
    title: String,
    techStacks: Array,
    isMentor: Boolean,
    image: {
        data: Buffer,
        type: String
    },
})

//Model
const Model = mongoose.model
const user = Model('users', userSchema)


module.exports = user