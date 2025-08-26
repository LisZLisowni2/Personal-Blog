// Import packages and models
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const secretRead = require('./utils/secret')
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
const PORT = 3000
const ADDRESS = '0.0.0.0'
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
secretRead("password_database")
.then((res) => {
    mongoose.connect(`mongodb://root:${res}@database:27017/blog?authSource=admin`)
    .then(() => console.log("Connection established!"))
    .catch(err => console.error(err))
})
.catch(err => console.error(err))

app.listen(PORT, ADDRESS, () => {
    console.log(`Server running at http://${ADDRESS}:${PORT}`)
})
