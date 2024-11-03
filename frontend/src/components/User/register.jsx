import { useState } from "react";
import Content from "../Content/Content";
import axios from "axios"
import { Link } from "react-router-dom"

function RegisterForm() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVerify, setPasswordVerify] = useState("")

    const handleRegister = async (event) => {
        event.preventDefault()
        if (!username || !email || !password) { 
            alert("Username, email or password not present")
            return
        }
        if (password == passwordVerify) {
            const obj = {
                username: username,
                email: email,
                password: password
            }
            await axios.post("http://127.0.0.1:3000/users/register", obj, {
                withCredentials: true
            }).then(res => alert("Account created"))
            .catch(err => alert(err.response.statusText))
        } else {
            alert("Passwords are not the same")
        }
    }

    return (
        <Content>
            <form method="POST" onSubmit={handleRegister} className="flex flex-col border-black border rounded w-1/2 text-center justify-center p-4 m-auto *:mb-4">
                <span className="text-3xl">Register form</span>
                <label className="block font-bold text-xl" for="username">
                    Username
                </label>
                <input id="username" type="text" placeholder="Username" className="text-center border-sky-400 border-2 p-2 w-1/2 m-auto" onChange={(e) => { setUsername(e.target.value )}}/>
                <label className="block font-bold text-xl" for="Email">
                    Email
                </label>
                <input id="Email" type="text" placeholder="Email" className="text-center border-sky-400 border-2 p-2 w-1/2 m-auto" onChange={(e) => { setEmail(e.target.value )}}/>
                <label className="block font-bold text-xl" for="password">
                    Password
                </label>
                <input id="password" type="password" placeholder="Password" className="text-center border-sky-400 border-2 p-2 w-1/2 m-auto" onChange={(e) => { setPassword(e.target.value )}}/>
                <label className="block font-bold text-xl" for="password2">
                    Confirm password
                </label>
                <input id="password2" type="password" placeholder="Password" className="text-center border-sky-400 border-2 p-2 w-1/2 m-auto" onChange={(e) => { setPasswordVerify(e.target.value )}}/>
                <div className="flex items-center *:mr-24">
                    <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 p-4 w-1/4 m-auto rounded text-white">Register</button>
                    <Link to="/login" className="hover:text-gray-700 active:text-gray-400">Have account? Login</Link>
                </div>
            </form>
        </Content>
    )
}

export default RegisterForm