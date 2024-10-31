const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    'title': {
        type: String,
        required: true
    },
    'description': {
        type: String,
        required: true
    },
    'data': {
        type: Date,
        required: true,
        default: Date.now
    },
    'published': {
        type: Boolean,
        required: true,
        default: false
    }
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post