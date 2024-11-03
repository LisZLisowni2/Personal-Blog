import { useState, createContext, useContext, useEffect } from "react";
import axios from 'axios'

const UserContext = createContext()

export function UserProvide({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleUserLogin = async () => {
        const user = await axios.get("http://127.0.0.1:3000/users/user", {
            withCredentials: true
        }) 
        setUser(user.data)
    }

    const handleUserLogout = async () => {
        await axios.get("http://127.0.0.1:3000/users/logout", {
            withCredentials: true
        })
        setUser(null)
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                await handleUserLogin()
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchUser()
    }, [])

    return (
        <UserContext.Provider value={{user, handleUserLogin, handleUserLogout, loading}}>
            { children }
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext)
}