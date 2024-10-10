import express from "express"
import 'dotenv/config'

import authRoutes from './routes/auth.routes.js'

const app = express()

const PORT = process.env.port || 5000;

app.use("/api/auth", authRoutes)

app.listen(PORT, (req,res) => {
  console.log(`Server is running on port ${PORT}`)
})