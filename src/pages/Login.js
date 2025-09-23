import React, { useState } from 'react';
import { useAuth, USERS } from '../AuthContext';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const user = USERS.find(u => u.fullName === username);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user) {
            setError('User not found. Must match full name exactly (case sensitive).');
            return;
        }
        if (password !== user.password) {
            setError('Incorrect password for this user.');
            return;
        }
        setError('');
        login(user);
        navigate('/');
    };


    return (
        <div className="login-page-wrapper">
            <div className="login-card shadow-lg">
                <h1 className="mb-4">Login</h1>
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    <div>
                        <label className="form-label fw-semibold">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter full name"
                            required
                            maxLength={40}
                        />
                    </div>
                    <div>
                        <label className="form-label fw-semibold">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={user ? 'Enter password' : 'Password'}
                            required
                            maxLength={30}
                        />
                    </div>
                    {error && <div className="alert alert-danger py-2 mb-0" role="alert" style={{fontSize: '.9rem'}}>{error}</div>}
                    <button type="submit" className="btn btn-primary btn-lg w-100 mt-4">Login</button>
                    <a href="/" className='btn btn-link'>Return to Home</a>
                </form>
            </div>
        </div>
    );
}

export default Login;
