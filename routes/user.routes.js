const express = require('express')
const { createUser, getUsers, addUserExercise } = require('../controllers/user.controller')

const UserRouter = express.Router()

UserRouter.post('/new-user', createUser)
UserRouter.get('/users', getUsers)
UserRouter.post('/add', addUserExercise)
module.exports = UserRouter
