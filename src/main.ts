import express from 'express'
import router from './infrastructure/router'

const app = express()

// Middleware
app.use(express.json())

// Routes
app.use(router)

// Server
const port = 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

export default app
