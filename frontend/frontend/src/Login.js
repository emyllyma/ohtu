import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(email, password);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            Sähköposti:<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                Salasana:<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Log in</button>
            </form>
            <Link to="/register">Don't have an account? Register here</Link>
        </div>
    );
};

export default Login;