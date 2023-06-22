import express from 'express'
import UserController from '../interfaces/controllers/user-controller'

const router = express.Router()
const userController = new UserController()

router.get('/users', userController.getAllUsers)
router.post('/users', userController.createUser)

export default router
