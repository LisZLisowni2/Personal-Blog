import React from "react";
import Content from "../Content/Content";
import { useNavigate } from 'react-router-dom'
import { useUser } from "../../context/UserContext";

function UserDetails() {
    const { user, loading, handleUserLogout } = useUser()
    const navigate = useNavigate()

    if (loading) {
        return (
            <Content>
                Loading user...
            </Content>
        )
    }

    if (!user) { 
        return (
            <Content>
                User not found
            </Content>
        )
    }

    const handleLogout = async () => {
        await handleUserLogout()
        navigate("/")
    }

    return (
        <Content>
            <div className="flex flex-col *:m-auto text-xl *:my-3">
                <span><span className="font-bold">Username:</span> { user.username }</span>
                <span><span className="font-bold">Email:</span> { user.email }</span>
                <span><span className="font-bold">Role:</span> { user.scope }</span>
                <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 p-4 w-1/4 m-auto rounded text-white">Logout</button>
            </div>
        </Content>
    )
}

export default UserDetails;