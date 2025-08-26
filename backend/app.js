// Import environment variables
require('dotenv').config()

// Import packages and models
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
// Create express app
const app = express()
// Settings
// SECURITY WARNING! Turn off on production
const DEBUG = true
const config = {
    debug: DEBUG
}
const userRouter = require('./routers/user')(config)
const postRouter = require('./routers/post')(config)
const PORT = process.env.PORT || 3000
const db_uri = process.env.DATABASE_URI
const allowedOrigins = ["http://localhost:5173", "https://localhost:5173", "http://127.0.0.1:5173", "https://127.0.0.1:5173", "http://127.0.0.1:3000"]

// Middleware to parse json body
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}))
app.use('/users', userRouter)
app.use('/posts', postRouter)

// Handle a connection about MongoDB and error
mongoose.connect(db_uri)
.then(() => console.log("Connection established!"))
.catch(err => console.error(err))


app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`)
})
