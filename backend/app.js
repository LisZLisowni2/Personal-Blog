require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

mongoose.connect(process.env.DATABASE_URI)
.then(() => console.log("Connection established!"))
.catch(err => console.error(err))

