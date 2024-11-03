import React from "react";
import Content from "../../Content/Content";
import { usePosts } from "../../../context/PostContext";
import { useUser } from "../../../context/UserContext";
import { useParams, useNavigate } from "react-router-dom"

export default function Post(request) {
    const { posts, loading } = usePosts()
    const { id } = useParams()
    const { user } = useUser()

    if (loading) {
        return (
            <div className="grid grid-cols-6 flex-1">
                <div></div>
                <div className="col-span-4">Loading post...</div>
                <div></div>
            </div>
        )
    }

    const post = posts.find(item => item._id === id)
    if (!post) {
        return (
            <div className="grid grid-cols-6 flex-1">
                Post details not found
            </div>
        )
    }

    return (
        <Content>
            <span className="text-4xl">{ post.title }</span><br />
            <span>{ post.date }</span>
            { (user && user.scope === "admin") && (
                <div className="flex flex-row">
                    <Link to={`/edit/${request.id}`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg></Link>
                    <Link to={`/delete/${request.id}`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 14.25a.75.75 0 0 0 0 1.5H15a.75.75 0 0 0 0-1.5H9.75Z" clipRule="evenodd" />
                        <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                    </svg></Link>
                </div>
            )}
            <hr className="border-black my-2"/>
            <span>{ post.description }</span>
        </Content>
    )
}