const mongoose = require('mongoose');

const newUserSchema = new mongoose.Schema({
    name: String,
    email:String,
    ph_no: Number,
    pwd: String
}, { collection: 'userInputs' });

module.exports = mongoose.model('userInputs', newUserSchema);