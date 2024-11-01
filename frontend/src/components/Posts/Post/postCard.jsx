import React from "react";
import { Link } from "react-router-dom"

const PostCard = request => {
    return (
        <Link to={`/${request.id}`}>
        <div className="border-2 border-black p-4 m-4 max-h-52 overflow-hidden">
            <span className="text-2xl">{ request.title }</span><br />
            <span className="text-opacity-70">{ request.date }</span>
            <hr className="border-black my-4"/>
            <span>{ request.description }</span>
        </div>
        </Link>
    )
}

export default PostCard