import { useState } from "react";
import Content from "../../Content/Content";
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AddPostForm() {
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const navigate = useNavigate()

    const handleAddPost = async (event) => {
        event.preventDefault()
        if (!title || !description) {
            alert("Title or description not present")
            return
        }
        const obj = {
            title: title,
            description: description
        }
        await axios.post(`http://127.0.0.1:3000/posts/add/`, obj, {
            withCredentials: true
        }).then(res => {
            navigate(`/${res.data.id}`)
        }).catch(err => console.error(err))
    }

    return (
        <Content>
            <form method="POST" onSubmit={handleAddPost} className="flex flex-col border-black border rounded w-3/4 text-center justify-center p-4 m-auto *:mb-4">
                <span className="text-3xl">Add post</span>
                <label className="block font-bold text-xl" for="username">
                    Title
                </label>
                <input id="username" type="text" placeholder="Title" className="text-center border-sky-400 border-2 p-2 w-1/2 m-auto" onChange={(e) => setTitle(e.target.value)}/>
                <label className="block font-bold text-xl" for="username">
                    Description
                </label>
                <textarea id="username" placeholder="Description" className="border-sky-400 border-2 p-2 w-3/4 m-auto" onChange={(e) => setDescription(e.target.value)}/>
                <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 p-4 w-1/4 m-auto rounded text-white">Add</button>
            </form>
        </Content>
    )
}

export default AddPostForm