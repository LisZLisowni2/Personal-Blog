import React from "react";

const PostCard = request => {
    return (
        <div className="border-2 border-black p-4 mb-4 last:mb-0 max-h-52 overflow-hidden">
            <span className="text-2xl">{ request.title }</span><br />
            <span className="text-opacity-70">{ request.date }</span>
            <hr className="border-black my-4"/>
            <span>{ request.description }</span>
        </div>
    )
}

export default PostCard