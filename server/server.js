const express = require('express')
const connectToMongoDB = require('./db/connectToDB')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(` listening at http://localhost:${PORT}`)
  connectToMongoDB()
})