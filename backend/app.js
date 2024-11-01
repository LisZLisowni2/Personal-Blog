// Import environment variables
require('dotenv').config()

// Import packages and models
const express = require('express')
const mongoose = require('mongoose')
// Create express app
const app = express()
// Settings
// SECURITY WARNING! Turn off on production
const DEBUG = true
const config = {
    debug: DEBUG
}
const userRouter = require('./routers/user')(config)
const PORT = process.env.PORT || 3000
const db_uri = process.env.DATABASE_URI

// Middleware to parse json body
app.use(express.json())
app.use('/users', userRouter)

// Handle a connection about MongoDB and error
mongoose.connect(db_uri)
.then(() => console.log("Connection established!"))
.catch(err => console.error(err))


app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`)
})