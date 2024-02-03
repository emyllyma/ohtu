import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = ({ onRegister }) => {
    const [name, setName] = useState(''); //näille täytyy tehdä tietokantaan kentät
    const [lname, setLName] = useState(''); //näille täytyy tehdä tietokantaan kentät
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', { email, password });
            if (response.status === 201) {
                alert('Registration successful');
                // or redirect to login page or automatically log in?
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
                <label htmlFor="name">Etunimi:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

                <label htmlFor="lname">Sukunimi:</label>
                <input type="text" id="lname" value={lname} onChange={(e) => setLName(e.target.value)} required />

                <label htmlFor="email">Sähköposti:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="password">Salasana:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit">Rekisteröidy</button>
            </form>
            <Link to="/login">Onko sinulla jo tili? Kirjaudu sisään täällä</Link>
            <p><Link to="/login">Palaa etusivulle</Link></p>
        </div>
    );
};

export default Register;
