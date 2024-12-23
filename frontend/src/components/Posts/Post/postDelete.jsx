import React from "react";
import Content from "../../Content/Content";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from "../../../context/PostContext";

export default function DeletePost() {
    const { id } = useParams()
    const { fetchPosts } = usePosts()
    const navigate = useNavigate()
    const handleDeletePost = async (event) => {
        event.preventDefault()
        await axios.delete(`http://127.0.0.1:3000/posts/delete/${id}`, {
            withCredentials: true
        }).then(() => {
            fetchPosts()
            navigate("/")
        }).catch(err => {
            alert(err.response.statusText)
        })
    }
    return (
        <Content>
            <form method="POST" onSubmit={handleDeletePost} className="flex flex-col border-black border rounded w-3/4 text-center justify-center p-4 m-auto *:mb-4">
                <span className="text-3xl">Do you really want to delete this post?</span>
                <span className="text-xl">ID: { id }</span>
                <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 p-4 w-1/4 m-auto rounded text-white">Delete</button>
            </form>
        </Content>
    )
}