import { useState, createContext, useContext, useEffect } from "react";
import axios from 'axios'

const UserContext = createContext()

export function UserProvide({ children }) {
    const [user, setUser] = useState({})

    return (
        <UserContext.Provider value={user}>
            { children }
        </UserContext.Provider>
    )
}

export async function handleUserLogin() {
    const user = await axios.get("http://127.0.0.1:3000/users/user", {
        withCredentials: true
    }) 
    setUser(user.data)
}

export async function handleUserLogout() {
    setUser({})
}

export function useUser() {
    return useContext(UserContext)
}