const mongoose = require('mongoose')

const ExerciseSchema = mongoose.Schema(
  {
    "Focus Area":{
      type: String,
    },
    "Exercise Type":{
      type: String,
    },
    "Target Body Part":{
      type: String,
    },
    "Exercise Name":{
      type: String,
    },
    "Exercise Steps":{
      type: String,
    },
    "Minimum Count / Duration":{
      type: String,
    },
    "Benefit":{
      type: String,
    },
  },
);

const Exercise = mongoose.model("Exercise",ExerciseSchema,"Exercises")

module.exports = Exercise