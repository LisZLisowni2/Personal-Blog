import { useState, createContext, useContext, useEffect } from "react";
import axios from 'axios'

const UserContext = createContext()

export function UserProvide({ children }) {
    const [user, setUser] = useState({})

    const handleUserLogin = async () => {
        const user = await axios.get("http://127.0.0.1:3000/users/user", {
            withCredentials: true
        }) 
        setUser(user.data)
    }

    const handleUserLogout = async () => {
        await axios.get("http://127.0.0.1:3000/users/logout", {
            withCredentials: false
        })
        setUser({})
    }

    return (
        <UserContext.Provider value={{user, handleUserLogin, handleUserLogout}}>
            { children }
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext)
}