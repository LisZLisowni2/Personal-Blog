// Import environment variables
require('dotenv').config()

// Import packages and models
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('./models/user')
const Post = require('./models/post')
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

// Authentication token
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1]
    if (!token) return res.status(401).json({ 'message': 'Token missing, access denied' })
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ 'message': 'Invalid token' })
        req.user = user
        next()
    })
}

// 500 error handler
function displayError(res, err) {
    if (!DEBUG) res.status(500).json({ 'message': 'Server error' })
    else res.status(500).json({ 'message': 'Server error', 'error': err.message })
}

// Register route
app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(400).json({ 'message': 'Username, email or password not present' })
        }
        const hashedPass = await bcrypt.hash(password, 10)
        const newUser = new User({username: username, email: email, password: hashedPass, scope: 'user'})
        await newUser.save()
        res.status(201).json({ 'message': 'Success' })
    } catch (err) {
        displayError(res, err)
    }
})

// Login route
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).json({ 'message': 'Username or password not present' })
        }
        const user = await User.findOne({ username: username }).select('password')
        if (!user) {
            return res.status(404).json({ 'message': 'User not found' })
        }
        const passTest = await bcrypt.compare(password, user.password)
        if (!passTest) {
            return res.status(401).json({ 'message': 'Wrong password' })
        }

        const token = jwt.sign({ username: username }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.json({'message': 'Login successful', token})
    } catch (err) {
        displayError(res, err)
    }
})

// Account details
app.get('/user', authenticateToken, async (req, res) => {
    try {
        const username = req.user.username
        const userData = await User.findOne({username: username}).select('-_id -__v -password')
        res.json(userData)
    } catch (err) {
        displayError(res, err)
    }
})

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`)
})