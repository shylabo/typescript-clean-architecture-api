import express from 'express'
import { ApiServerConfig } from './config/api-server-config'
import MainRouter from './routers/router'

export class ServerApplication {
  private readonly host: string = ApiServerConfig.API_HOST
  private readonly port: number = ApiServerConfig.API_PORT

  public async run(): Promise<void> {
    const app = express()
    // Middleware
    app.use(express.json())

    // Set Routers
    const mainRouter = new MainRouter()
    await mainRouter.setRouters()
    app.use('/', mainRouter.getRouter())

    app.listen(this.port, this.host, () => {
      console.log(`Server is running on ${this.host}:${this.port}`)
    })
  }

  // TODO: Logger

  public static new(): ServerApplication {
    return new ServerApplication()
  }
}
