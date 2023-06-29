import express, { Router } from 'express';
import Logger from '../logger';
import { TestDBClient } from '../database/postgresql/db-client';
import UserController from '../../interfaces/controllers/user-controller';

class UserRouter {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public async setUserRoutes(): Promise<void> {
    try {
      const dbClient = await TestDBClient.newFromConfig();
      const userController = new UserController(dbClient);

      this.router.get('/', userController.getUser);
      this.router.post('/', userController.createUser);
    } catch (err) {
      Logger.getInstance().error('Error occurred while initiating db:', err);
    }
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default UserRouter;
