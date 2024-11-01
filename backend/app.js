// Import environment variables
require('dotenv').config()

// Import packages and models
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('./models/user')
const Post = require('./models/post')
const userRouter = require('./routers/user')
// Create express app
const app = express()
// Settings
// SECURITY WARNING! Turn off on production
const DEBUG = true
const PORT = process.env.PORT || 3000
const db_uri = process.env.DATABASE_URI

// Middleware to parse json body
app.use(express.json())

// Handle a connection about MongoDB and error
mongoose.connect(db_uri)
.then(() => console.log("Connection established!"))
.catch(err => console.error(err))

app.use('/users', userRouter)

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`)
})