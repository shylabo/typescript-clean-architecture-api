import express, { Router } from 'express'
import { getUserDataSource } from '../database/data-sources/postgresql/pg-user-data-source'
import UserController from '../../interfaces/controllers/user-controller'

class UserRouter {
  private router: Router

  constructor() {
    this.router = express.Router()
  }

  public async setUserRoutes(): Promise<void> {
    const userDataSource = await getUserDataSource()
    const userController = new UserController(userDataSource)

    this.router.get('/', userController.getAll)
    this.router.post('/', userController.createUser)
  }

  public getRouter(): Router {
    return this.router
  }
}

export default UserRouter
