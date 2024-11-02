import React from "react";
import { usePosts } from "../../../context/PostContext";
import { useParams, useNavigate } from "react-router-dom"

export default function Post(request) {
    const { posts, loading } = usePosts()
    const { id } = useParams()
    if (loading) {
        return (
            <div className="grid grid-cols-6 flex-1">
                <div></div>
                <div className="col-span-4">Loading posts...</div>
                <div></div>
            </div>
        )
    }

    const post = posts.find(item => item._id === id)
    if (!post) {
        return (
            <div className="grid grid-cols-6 flex-1">
                Post details not found
            </div>
        )
    }
    return (
        <div className="grid grid-cols-6 flex-1">
            <div></div>
            <div className="col-span-4 p-4">
                <span className="text-4xl">{ post.title }</span><br />
                <span className="my-2">{ post.date }</span>
                <hr />
                <span>{ post.description }</span>
            </div>
            <div></div>
        </div>
    )
}