//@@ -2,10 + 2,14 @@
const express = require('express') //added @@s
const bodyParser = require('body-parser')
const { promisify } = require('util')
const initializeDatabase = require('./database')//added

const app = express()
app.use(bodyParser.json())

const startServer = async () => {
  await initializeDatabase(app) //added

  const port = process.env.SERVER_PORT || 3000
  await promisify(app.listen).bind(app)(port)
  console.log(`Listening on port ${port}`)
}

startServer()s
