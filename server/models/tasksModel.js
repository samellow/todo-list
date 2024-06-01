const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({


    description: {
        type: String,
        required: [true, 'Please add a title']
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
        default: Date.now,
    },
    priority: {
        type: String,
        required: [true, 'Please set priority']
    },
    category: {
        type: String,
        required: [true, 'Please set category' ]
    },
    notes: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

}, {timestamps: true})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task