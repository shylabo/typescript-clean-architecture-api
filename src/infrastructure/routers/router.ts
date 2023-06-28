import express, { Router } from 'express';
import UserRouter from './user-router';
import MessageRouter from './message-router';

class MainRouter {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public async setRouters(): Promise<void> {
    const userRouter = new UserRouter();
    await userRouter.setUserRoutes();

    const messageRouter = new MessageRouter();
    await messageRouter.setMessageRoutes();

    // Add router paths
    this.router.use('/users', userRouter.getRouter());
    this.router.use('/messages', messageRouter.getRouter());
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default MainRouter;
