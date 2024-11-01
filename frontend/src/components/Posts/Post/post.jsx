import React from "react";
import { useParams, useNavigate } from "react-router-dom"

export default function Post(request) {
    const { id } = useParams()
    const navigate = useNavigate()
    const post = request.posts.find(item => item._id === id)

    return (
        <div>
            <span>{ post.title }</span>
            <span>{ post.date }</span>
            <span>{ post.description }</span>
        </div>
    )
}