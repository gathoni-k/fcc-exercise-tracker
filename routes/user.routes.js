const express = require('express')
const { createUser, getUsers } = require('../controllers/user.controller')

const UserRouter = express.Router()

UserRouter.post('/new-user', createUser)
UserRouter.get('/users', getUsers)

module.exports = UserRouter
