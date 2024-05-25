const express = require('express')
const cookieParser = require('cookie-parser')
const connectToMongoDB = require('./db/connectToDB')
require('dotenv').config()
const authRoutes = require('./routes/authRoutes')

const app = express()

const PORT = process.env.PORT || 5000

//middleware 
app.use(express.json())
app.use(cookieParser())

//routes
app.use('/api/todo', authRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(` listening at http://localhost:${PORT}`)
  connectToMongoDB()
})