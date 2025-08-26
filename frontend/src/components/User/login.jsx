import { useState } from "react";
import Content from "../Content/Content";
import axios from "axios"
import { useUser } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom"

function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const { handleUserLogin, handleUserLogout } = useUser()

    const loginHandler = async (event) => {
        event.preventDefault()
        if (!username || !password) { 
            alert("Username or password not present")
            return
        }
        const obj = {
            username: username,
            password: password
        }
        await axios.post("http://backend/users/login", obj, {
            withCredentials: true
        }).then(res => {
            handleUserLogin()
            navigate("/")
        })   
        .catch(err => alert(err.response.statusText))
    }

    return (
        <Content>
            <form method="POST" onSubmit={loginHandler} className="flex flex-col border-black border rounded w-1/2 text-center justify-center p-4 m-auto *:mb-4">
                <span className="text-3xl">Login form</span>
                <label className="block font-bold text-xl" for="username">
                    Username
                </label>
                <input id="username" type="text" placeholder="Username" className="text-center border-sky-400 border-2 p-2 w-1/2 m-auto" onChange={(e) => setUsername(e.target.value)}/>
                <label className="block font-bold text-xl" for="password">
                    Password
                </label>
                <input id="password" type="password" placeholder="Password" className="text-center border-sky-400 border-2 p-2 w-1/2 m-auto" onChange={(e) => setPassword(e.target.value)}/>
                <div className="flex items-center *:mr-16">
                    <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 p-4 w-1/4 m-auto rounded text-white">Login</button>
                    <Link to="/register" className="hover:text-gray-700 active:text-gray-400">Don't have account? Register</Link>
                </div>
            </form>
        </Content>
    )
}

export default LoginForm
