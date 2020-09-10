const express = require('express')
const { createUser } = require('../controllers/user.controller')

const UserRouter = express.Router()

UserRouter.post('/new-user', createUser)

module.exports = UserRouter
