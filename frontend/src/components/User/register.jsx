import { useState } from "react";
import Content from "../Content/Content";
import { Link } from "react-router-dom"

function RegisterForm() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVerify, setPasswordVerify] = useState("")

    return (
        <Content>
            <form method="POST" className="flex flex-col border-black border rounded w-1/2 text-center justify-center p-4 m-auto *:mb-4">
                <span className="text-3xl">Register form</span>
                <label className="block font-bold text-xl" for="username">
                    Username
                </label>
                <input id="username" type="text" placeholder="Username" className="text-center border-sky-400 border-2 p-2 w-1/2 m-auto" onChange={(e) => { setUsername(e.target.value )}}/>
                <label className="block font-bold text-xl" for="password">
                    Email
                </label>
                <input id="password" type="password" placeholder="Password" className="text-center border-sky-400 border-2 p-2 w-1/2 m-auto" onChange={(e) => { setEmail(e.target.value )}}/>
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