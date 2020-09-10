const mongoose = require('mongoose')
const { Schema } = mongoose
const formatDate = () => {
  const event = new Date(Date.now())
  const options = { year: 'numeric', month: 'numeru=ic', day: 'numeric' }
  const date = event.toLocaleDateString(options)
  return date.split('/').join('-')
}
const UserSchema = new Schema({
  username: String,
  description: String,
  duration: String,
  date: {
    type: Date,
    default: formatDate()
  }
})
module.exports = mongoose.model('User', UserSchema)
