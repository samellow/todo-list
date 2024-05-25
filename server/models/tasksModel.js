const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date,
        default: Date.now
    },
    priority: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    }

}, {timestamps: true})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task