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
    'date': {
        type: Date,
        required: true,
        default: Date.now
    },
    'published': {
        type: Boolean,
        required: true,
        default: false
    },
    'createdBy': {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true})

const Post = mongoose.model('Post', postSchema)
module.exports = Post