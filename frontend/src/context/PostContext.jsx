import { useState, createContext, useContext, useEffect } from "react";
import axios from 'axios'

const PostContext = createContext()

export function PostProvide({ children }) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchPosts = async () => { 
        try {
            const res = await axios.get("http://backend/posts/", {
                withCredentials: true
            })
            setPosts(res.data)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <PostContext.Provider value={{posts, loading, fetchPosts}}>
            { children }
        </PostContext.Provider>
    )
}

export function usePosts() {
    return useContext(PostContext)
}
