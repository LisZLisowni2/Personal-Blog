import { useState } from "react";
import Content from "../../Content/Content";
import axios from "axios"
import { usePosts } from "../../../context/PostContext";
import { useParams, useNavigate } from "react-router-dom"

function EditPostForm() {
    const { posts, loading } = usePosts()
    const { id } = useParams()

    if (loading) {
        return (
            <div className="grid grid-cols-6 flex-1">
                <div></div>
                <div className="col-span-4">Loading post...</div>
                <div></div>
            </div>
        )
    }

    const post = posts.find(item => item._id === id)
    if (!post) {
        return (
            <div className="grid grid-cols-6 flex-1">
                Post not found
            </div>
        )
    }

    const [title, setTitle] = useState(post.title)
    const [description, setDescription] = useState(post.description)
    const navigate = useNavigate()

    const handleEditPost = async () => {
        obj = {
            title: title,
            description: description
        }
        await axios.put(`http://127.0.0.1:3000/posts/edit/${id}`, obj, {
            withCredentials: true
        }).then(() => {
            navigate(`/${id}`)
        }).catch(err => console.error(err))
    }

    return (
        <Content>
            <form method="POST" onSubmit={handleEditPost} className="flex flex-col border-black border rounded w-3/4 text-center justify-center p-4 m-auto *:mb-4">
                <span className="text-3xl">Edit post</span>
                <label className="block font-bold text-xl" for="username">
                    Title
                </label>
                <input id="username" type="text" placeholder="Title" value={title} className="text-center border-sky-400 border-2 p-2 w-1/2 m-auto" onChange={(e) => setTitle(e.target.value)}/>
                <label className="block font-bold text-xl" for="username">
                    Description
                </label>
                <textarea id="username" placeholder="Description" value={description} className="border-sky-400 border-2 p-2 w-3/4 m-auto" onChange={(e) => setDescription(e.target.value)}/>
                <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 p-4 w-1/4 m-auto rounded text-white">Edit</button>
            </form>
        </Content>
    )
}

export default EditPostForm