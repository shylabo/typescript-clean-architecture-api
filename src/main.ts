import express from 'express'
import MainRouter from './infrastructure/routers/router'
import * as dotenv from 'dotenv'
dotenv.config({ path: './env/.env' })
;(async () => {
  const app = express()

  // Middleware
  app.use(express.json())

  // Set Routers
  const mainRouter = new MainRouter()
  await mainRouter.setRouters()
  app.use('/', mainRouter.getRouter())

  // Server
  const port = process.env.API_PORT
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
})()
