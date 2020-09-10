const User = require('../models/user.model')

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
  }
}
