import React from "react";
import Content from "../Content/Content";
import { Link } from 'react-router-dom'
import { useUser } from "../../context/UserContext";

function UserDetails() {
    const { user, handleUserLogout } = useUser()

    return (
        <Content>
            <span>Username: user.username</span>
            <span>Email: user.email</span>
            <span>Role: user.scope</span>
            <button onClick={handleUserLogout}>Logout</button>
        </Content>
    )
}

export default UserDetails;