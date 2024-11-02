import { useContext } from "react";
import PostCard from "./Post/postCard";
import { usePosts } from "../../context/PostContext";

function Content(request) {
    const { posts, loading } = usePosts()
    if (loading) {
        return (
            <div className="grid grid-cols-6 flex-1">
                <div></div>
                <div className="col-span-4">Loading posts...</div>
                <div></div>
            </div>
        )
    }
    return (
        <div className="grid grid-cols-6 flex-1">
            <div></div>
                <div className="col-span-4 p-4">
                    { posts.map(post => <PostCard title={post.title} description={post.description} date={post.date} id={post._id} key={post._id}/>)}
                </div>
            <div></div>
        </div>
    )
}

export default Content