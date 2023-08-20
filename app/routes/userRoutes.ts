import express from 'express'
const userRoutes = express.Router()
import { UserController } from '../controllers/userController'

const userController = new UserController()

userRoutes.get('/list', userController.getUserList)
userRoutes.post('/create', userController.createUser)


export {userRoutes}