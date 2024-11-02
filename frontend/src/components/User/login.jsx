import { useState } from "react";
import Content from "../Content/Content";

function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Content>
            <form method="POST" className="flex flex-col border-black border rounded w-1/2 text-center justify-center p-4">
                <label for="username">
                    Username
                </label>
                <input id="username" type="text" placeholder="Username" className=""/>
                <label for="password">
                    Password
                </label>
                <input id="password" type="password" placeholder="Password"/>
                <button>Login</button>
            </form>
        </Content>
    )
}

export default LoginForm