const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    'username': {
        type: String,
        required: true
    },
    'email': {
        type: String,
        required: true
    },
    'password': {
        type: String,
        require: true
    },
    'scope': {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})

const User = mongoose.Model('User', userSchema)
module.exports = User