const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({

    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    duedate: {
        type: Date,
        required: true,
    },
});

//name the collection that uses above schema
const TaskList = mongoose.model('TaskList', TaskSchema);

module.exports = TaskList;