import React from "react";
import PostCard from "./Post/postCard";

function Content(request) {
    const posts = request.posts
    return (
        <div className="grid grid-cols-6 flex-1">
            <div></div>
                <div className="col-span-4 p-4">
                    { posts.map(post => <PostCard title={post.title} description={post.description} date={post.date} id={post._id}/>)}
                </div>
            <div></div>
        </div>
    )
}

export default Content