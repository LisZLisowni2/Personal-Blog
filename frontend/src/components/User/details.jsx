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
            <span>Username: { user.username }</span>
            <span>Email: { user.email }</span>
            <span>Role: { user.scope }</span>
            <button onClick={handleLogout}>Logout</button>
        </Content>
    )
}

export default UserDetails;