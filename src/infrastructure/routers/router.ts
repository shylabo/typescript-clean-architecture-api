import express, { Router } from 'express';
import UserRouter from './user-router';

class MainRouter {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public async setRouters(): Promise<void> {
    const userRouter = new UserRouter();
    await userRouter.setUserRoutes();

    // Add router paths
    this.router.use('/users', userRouter.getRouter());
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default MainRouter;
