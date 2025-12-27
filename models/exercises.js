const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    "Focus Area" : {
        type: String,
    },
    "Minimum Count / Duration": {
        type: String,
    },
    "Target Body Part": {
        type: String,
    },
    "Exercise Type": {
        type: String,
    },
    "Exercise Steps": {
        type: String,
    },
    "Exercise Name": {
        type: String,
    },
    "Benefit": {
        type: String,
    },
}, { collection: 'exercise_list' });

module.exports = mongoose.model('exercises_list', exerciseSchema);
