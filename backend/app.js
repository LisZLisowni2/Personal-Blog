require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const user = require('models/user')
const post = require('models/post')
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
    } catch (err) {

    }
})

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`)
})