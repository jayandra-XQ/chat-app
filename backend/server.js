import express from "express"
import 'dotenv/config'

import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express()

const PORT = process.env.port || 5000;

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Server is running on port ${PORT}`)
})