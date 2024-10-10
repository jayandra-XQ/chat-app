import express from "express"
import 'dotenv/config'

const app = express()

const PORT = process.env.port || 8000;

app.get('/' , (req,res) =>{
  res.send('Hello, express!')
})

app.listen(PORT, (req,res) => {
  console.log(`Server is running on port ${PORT}`)
})