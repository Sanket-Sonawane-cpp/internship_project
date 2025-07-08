const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  crede: {
    name : {
      type : String
    }
  },
  progress: {
    type: Map,
    of: new mongoose.Schema({
      count: { type: Number }
    })
  }
})

const User = mongoose.model("user",UserSchema,"users")

module.exports = User