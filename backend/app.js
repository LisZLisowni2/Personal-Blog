require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000
const db_uri = process.env.DATABASE_URI

app.use(express.json())

mongoose.connect(db_uri)
.then(() => console.log("Connection established!"))
.catch(err => console.error(err))

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`)
})