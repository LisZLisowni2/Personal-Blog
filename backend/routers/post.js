const express = require('express')
const Post = require('../models/post')
const router = express.Router()

module.exports = (config) => {
    // 500 error handler
    function displayError(res, err) {
        if (!config.debug) res.status(500).json({ 'message': 'Server error' })
        else res.status(500).json({ 'message': 'Server error', 'error': err.message })
    }

    // List of posts
    router.get('/', async (req, res) => {
        try {
            const posts = Post.find()
            res.status(200).json(posts)
        } catch (err) {
            displayError(res, err)
        }
    })
    // One post

    // Add post

    // Edit post

    // Delete post

    return router
}