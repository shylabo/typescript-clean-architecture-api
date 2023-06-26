import express, { Router } from 'express'
import UserController from '../../interfaces/controllers/user-controller'
import { TestDBClient } from '../database/postgresql/db-client'

class UserRouter {
  private router: Router

  constructor() {
    this.router = express.Router()
  }

  public async setUserRoutes(): Promise<void> {
    const dbClient = await TestDBClient.newFromConfig()
    const userController = new UserController(dbClient)

    this.router.get('/', userController.getUsers)
    this.router.post('/', userController.createUser)
  }

  public getRouter(): Router {
    return this.router
  }
}

export default UserRouter
