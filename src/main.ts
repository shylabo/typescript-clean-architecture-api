import express from 'express'
import MainRouter from './infrastructure/routers/router'
import { ApiServerConfig } from './infrastructure/config/api-server-config'
;(async () => {
  const app = express()

  // Middleware
  app.use(express.json())

  // Set Routers
  const mainRouter = new MainRouter()
  await mainRouter.setRouters()
  app.use('/', mainRouter.getRouter())

  // Server
  const host = ApiServerConfig.API_HOST
  const port = ApiServerConfig.API_PORT
  app.listen(port, host, () => {
    console.log(`Server is running on ${host}:${port}`)
  })
})()
