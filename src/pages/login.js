import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const proceedLogin = () => {
        navigate('/login');
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [title, setTitle] = useState('');
    const realusername = "admin";
    const realpassword = "admin123";
    useEffect(() => {
        setTitle(`Hello, ${username}`);
    }, [username]);



    const handleLogin = (e) => {
        e.preventDefault();
        if (username === realusername && password === realpassword) {
            alert('Login successful!');
            
        } else {
            alert('Invalid username or password');
        }
    }
    return (
        <div>
            <h1>Welcome to the login page!</h1>
            <h2>{title}</h2>
            <form onSubmit={handleLogin}>
            <div className="form-group">
                <label>Username</label>
                <input
                    type="text"
                    className="form-control"
                    value={username}
                    required
                    maxLength={30}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group mb-5" >
                <label>Password</label>
                <input
                    type= "password"
                    className="form-control"
                    value={password}
                    required
                    maxLength={30}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type = "submit" class="btn btn-warning">Login</button>
            </form>
        </div>
    );
}

export default Login;
