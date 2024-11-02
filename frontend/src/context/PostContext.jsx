import { useState, createContext, useContext, useEffect } from "react";
import axios from 'axios'

const PostContext = createContext()

export function PostProvide({ children }) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => { 
            try {
                const res = await axios.get("http://127.0.0.1:3000/posts/", {
                    withCredentials: true
                })
                setPosts(res.data)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

    return (
        <PostContext.Provider value={{posts, loading}}>
            { children }
        </PostContext.Provider>
    )
}

export function usePosts() {
    return useContext(PostContext)
}