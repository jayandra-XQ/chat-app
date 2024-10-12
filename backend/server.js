import express from "express"
import 'dotenv/config'

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express()
const PORT = process.env.port || 5000;


app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)


app.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Server is running on port ${PORT}`)
})