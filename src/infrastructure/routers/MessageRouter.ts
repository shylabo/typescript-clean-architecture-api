import express, { Router } from 'express';
import Logger from '../Logger';
import { MongoDBClient } from '../database/mongodb/DbClient';
import MessageController from '../../interfaces/controllers/MessageController';

class MessageRouter {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public async setMessageRoutes(): Promise<void> {
    try {
      const dbClient = await MongoDBClient.newFromConfig('messages');
      const messageController = new MessageController(dbClient);

      this.router.get('/', messageController.getMessages);
    } catch (err) {
      Logger.getInstance().error('Error occurred while initiating db:', err);
    }
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default MessageRouter;
