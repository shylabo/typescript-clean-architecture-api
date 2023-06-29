import express from 'express';
import { ApiServerConfig } from './config/ApiServerConfig';
import MainRouter from './routers/Router';
import Logger from './Logger';

export class ServerApplication {
  private readonly host: string = ApiServerConfig.API_HOST;
  private readonly port: number = ApiServerConfig.API_PORT;

  public async run(): Promise<void> {
    // Init Logger
    const logger = Logger.getInstance();
    logger.info('Logger initialized');

    const app = express();

    // Middleware
    app.use(express.json());

    // Set Routers
    const mainRouter = new MainRouter();
    await mainRouter.setRouters();
    app.use('/', mainRouter.getRouter());

    app.listen(this.port, this.host, () => {
      logger.info(`Server is running on ${this.host}:${this.port}`);
    });
  }

  public static new(): ServerApplication {
    return new ServerApplication();
  }
}
