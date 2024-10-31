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

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(400).json({ 'message': 'Username, email or password not present' })
        }
        const hashedPass = await bcrypt.hash(password, 10)
        const newUser = new User({username: username, email: email, password: hashedPass})
        await newUser.save()
        res.status(201).json({ 'message': 'Success' })
    } catch (err) {
        res.status(500).json({ 'message': 'Server error' })
    }
})

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`)
})