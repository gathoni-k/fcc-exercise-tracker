const User = require('../models/user.model')
const Exercise = require('../models/exercise.model')

const formatDate = () => {
  const event = new Date(Date.now())
  const options = { year: 'numeric', month: 'numeru=ic', day: 'numeric' }
  const date = event.toLocaleDateString(options)
  return date.split('/').join('-')
}

module.exports = {
  createUser: async (req, res) => {
    try {
      const { username } = req.body
      const userExists = await User.findOne({ username })
      if (userExists) throw Error('username is taken')
      const newUser = new User({
        username
      })
      await newUser.save()
      res.json({
        username: newUser.username,
        id: newUser._id
      })
    } catch (error) {
      res.json({ error: error.message })
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await User.find()
      res.json({
        users
      })
    } catch (error) {
      res.json({
        error: error.message
      })
    }
  },
  addUserExercise: async (req, res) => {
    try {
      const { userId, description, duration } = req.body
      const date = req.body.date ? req.body.date : formatDate()
      const currentUser = await User.findById(userId)
      const newExercise = new Exercise({
        description,
        duration,
        date
      })
      await newExercise.save()
      currentUser.exercises.unshift(newExercise._id)
      await currentUser.save()

      User.findOne({ _id: userId })
        .populate('exercises')
        .exec(function (err, user) {
          if (err) console.log(err)
          res.json(
            {
              user
            }
          )
        })
    } catch (error) {
      res.json({ error: error.message })
    }
  }
}
