const express = require('express')
const Post = require('../models/post')
const User = require('../models/user')
const router = express.Router()

module.exports = (config) => {
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
        if (!config.debug) res.status(500).json({ 'message': 'Server error' })
        else res.status(500).json({ 'message': 'Server error', 'error': err.message })
    }

    // Authorize a user scope
    const authorizedAccess = (required_role) => {
        return async (res, req, next) => {
            const username = req.user.username
            const user = await User.find({username: username}).select('scope')
            if (user.scope !== required_role) return res.status(401).json({ 'message': 'Access denied' })
            return next()
        }
    }

    // List of posts
    router.get('/', async (req, res) => {
        try {
            const posts = await Post.find()
            res.status(200).json(posts)
        } catch (err) {
            displayError(res, err)
        }
    })
    // One post
    router.get('/:id', async (req, res) => {
        try {
            const post = await Post.findById(req.params.id)
            if (!post) return res.status(404).json({ 'message': 'Post with that id do not exist' })
            res.status(200).json(post)
        } catch (err) {
            displayError(res, err)
        }
    })
    // Add post
    router.post('/add', authenticateToken, async (req, res) => {
        try {
            const username = req.user.username
            const userScope = await User.find({ username: username }).select('scope')
            if (userScope.scope !== "admin") 
            const { title, description, published } = req.body
            if (!title || !description) return res.status(400).json({ 'message': 'Title or description not present' })
            const newPost = new Post({title: title, description: description, published: published})
            await newPost.save()
        } catch (err) {
            displayError(res, err)
        }
    })
    // Edit post

    // Delete post

    return router
}