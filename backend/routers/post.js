const express = require('express')
const Post = require('../models/post')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const router = express.Router()

module.exports = (config) => {
    // Authentication token
    function authenticateToken(req, res, next) {
        const token = req.cookie.token
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
        return async (req, res, next) => {
            const username = req.user.username
            const user = await User.findOne({username: username}).select('scope')
            if (user.scope !== required_role) return res.status(401).json({ 'message': 'Access denied' })
            return next()
        }
    }

    // List of posts
    router.get('/', async (req, res) => {
        try {
            const posts = await Post.find().populate('createdBy', 'username')
            res.status(200).json(posts)
        } catch (err) {
            displayError(res, err)
        }
    })
    // One post
    router.get('/:id', async (req, res) => {
        try {
            const post = await Post.findById(req.params.id).populate('createdBy', 'username')
            if (!post) return res.status(404).json({ 'message': 'Post with that id do not exist' })
            res.status(200).json(post)
        } catch (err) {
            displayError(res, err)
        }
    })
    // Add post
    router.post('/add', authenticateToken, authorizedAccess('admin'), async (req, res) => {
        try {
            const { title, description, published } = req.body
            const user = await User.findOne({username: req.user.username})
            if (!title || !description) return res.status(400).json({ 'message': 'Title or description not present' })
            const newPost = new Post({title: title, description: description, published: published, createdBy: user._id})
            await newPost.save()
            res.status(201).json(newPost)
        } catch (err) {
            displayError(res, err)
        }
    })
    // Edit post
    router.put('/edit/:id', authenticateToken, authorizedAccess('admin'), async (req, res) => {
        try {
            const id = req.params.id
            const post = await Post.findByIdAndUpdate(id, req.body, { new: true })
            if (!post) return res.status(404).json({ 'message': 'Post not found' })
            res.json(post)
        } catch (err) {
            displayError(res, err)
        }
    })
    // Delete post
    router.delete('/delete/:id', authenticateToken, authorizedAccess('admin'), async (req, res) => {
        try {
            const id = req.params.id
            const post = await Post.findByIdAndDelete(id)
            if (!post) return res.status(404).json({ 'message': 'Post not found' })
            res.status(200).json({ 'message': 'Deleted successfully'})
        } catch (err) {
            displayError(res, err)
        }
    })
    // Publish post
    router.patch('/publish/:id', authenticateToken, authorizedAccess('admin'), async (req, res) => {
        try {
            const id = req.params.id
            const post = await Post.findByIdAndUpdate(id, { published: true }, { new: true })
            if (!post) return res.status(404).json({ 'message': 'Post not found' })
            res.status(200).json({ 'message': 'Published'})
        } catch (err) {
            displayError(res, err)
        }
    })

    return router
}