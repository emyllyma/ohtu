import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Register = ({ onRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', { email, password });
            if (response.status === 201) {
                alert('Registration successful');
                // or redirect to login pace or automatically log in?
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            alert('Registration error: ' + error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
            <Link to="/login">Already have an account? Log in here</Link>
        </div>
    );
};

export default Register;