import { useState } from "react";
import Content from "../../Content/Content";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { usePosts } from "../../../context/PostContext";

function AddPostForm() {
    const { fetchPosts } = usePosts()
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [date, setDate] = useState(null)
    const navigate = useNavigate()

    const handleAddPost = async (event) => {
        event.preventDefault()
        if (!title || !date || !description) {
            alert("Title, date or description not present")
            return
        }
        const obj = {
            title: title,
            date: date,
            description: description
        }
        await axios.post(`http://backend/posts/add/`, obj, {
            withCredentials: true
        }).then(res => {
            fetchPosts()
            navigate(`/${res.data._id}`)
        }).catch(err => alert(err.response.statusText))
    }

    return (
        <Content>
            <form method="POST" onSubmit={handleAddPost} className="flex flex-col border-black border rounded w-3/4 text-center justify-center p-4 m-auto *:mb-4">
                <span className="text-3xl">Add post</span>
                <label className="block font-bold text-xl" for="title">
                    Title
                </label>
                <input id="title" type="text" placeholder="Title" className="text-center border-sky-400 border-2 p-2 w-1/2 m-auto" onChange={(e) => setTitle(e.target.value)}/>
                <label className="block font-bold text-xl" for="public">
                    Date of publication
                </label>
                <input id="public" type="datetime-local" value={new Date().toISOString().slice(0, 16)} placeholder="Date of publication" className="text-center border-sky-400 border-2 p-2 w-1/2 m-auto" onChange={(e) => setDate(e.target.value)}/>
                <label className="block font-bold text-xl" for="description">
                    Description
                </label>
                <textarea id="description" placeholder="Description" className="border-sky-400 border-2 p-2 w-3/4 m-auto" onChange={(e) => setDescription(e.target.value)}/>
                <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 p-4 w-1/4 m-auto rounded text-white">Add</button>
            </form>
        </Content>
    )
}

export default AddPostForm
