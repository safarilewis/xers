const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    id: {
        type: Number,
        unique: true,
    },
    title: String,
    url: String,
    description: String,
    owner: [{
        type: Schema.Types.ObjectId,
        ref: "users"
    }]
})

const Model = mongoose.model
const project = Model('projects', projectSchema)

module.exports = project;