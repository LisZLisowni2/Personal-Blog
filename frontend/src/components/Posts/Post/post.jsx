import React from "react";

export default function Post(request) {
    return (
        <div>
            <span>{ request.title }</span>
            <span>{ request.date }</span>
            <span>{ request.description }</span>
        </div>
    )
}