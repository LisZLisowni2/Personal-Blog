import React from "react";

const Post = request => {
    return (
        <div>
            <h1>{ request.title }</h1>
            <span>{ request.description }</span>
        </div>
    )
}

export default Post