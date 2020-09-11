const express = require('express')
const { createUser, getUsers, addUserExercise, getExerciseLog } = require('../controllers/user.controller')

const UserRouter = express.Router()

UserRouter.post('/new-user', createUser)
UserRouter.get('/users', getUsers)
UserRouter.post('/add', addUserExercise)
UserRouter.post('/log', getExerciseLog)
module.exports = UserRouter
