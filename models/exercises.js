const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    "Focus Area" : String,
    "Minimum Count / Duration":String,
    "Target Body Part":String,
    "Exercise Type":String,
    "Exercise Steps":String,
    "Exercise Name":String,
    "Benefit":String
}, { collection: 'exercise_list' });

module.exports = mongoose.model('exercises_list', exerciseSchema);