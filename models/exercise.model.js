const mongoose = require('mongoose')

const { Schema } = mongoose

const ExerciseSchema = new Schema({
  description: String,
  duration: String,
  date: Date
})

module.exports = mongoose.model('Exercise', ExerciseSchema)
