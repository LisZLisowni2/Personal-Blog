require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('./models/user')
const Post = require('./models/post')
const app = express()
const PORT = process.env.PORT || 3000
const db_uri = process.env.DATABASE_URI

app.use(express.json())

mongoose.connect(db_uri)
.then(() => console.log("Connection established!"))
.catch(err => console.error(err))

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1]
    if (!token) return res.status(401).json({ 'message': 'Token missing, access denied' })
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ 'message': 'Invalid token' })
        req.user = user
        next()
    })
}

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
        res.status(500).json({ 'message': 'Server error' })
    }
})

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).json({ 'message': 'Username or password not present' })
        }
        const user = User.findOne({ username: username })
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
        res.status(500).json({ 'message': 'Server error' })
    }
})

app.get('/user', authenticateToken, async (req, res) => {
    try {
        const username = req.user
        const userData = await User.findOne({username: username})
        res.json(userData)
    } catch (err) {
        res.status(500).json({ 'message': 'Server error' })
    }
})

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`)
})