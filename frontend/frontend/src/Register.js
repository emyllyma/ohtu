import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './register.css'; // Tuodaan CSS-tiedosto

const Register = ({ onRegister }) => {
    const [name, setName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', { email, password });
            if (response.status === 201) {
                alert('Rekisteröinti onnistui');
            } else {
                alert('Rekisteröinti epäonnistui');
            }
        } catch (error) {
            alert('Rekisteröintivirhe: ' + error.message);
        }
    };

    return (
        <div className="register-container">
            <div className="register-content">
                <h2>Rekisteröidy</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Etunimi:</label>
                    <input type="text" id="name" placeholder="Etunimi"value={name} onChange={(e) => setName(e.target.value)} required />

                    <label htmlFor="lname">Sukunimi:</label>
                    <input type="text" id="lname" placeholder="Sukunimi"value={lname} onChange={(e) => setLName(e.target.value)} required />

                    <label htmlFor="email">Sähköposti:</label>
                    <input type="email" id="email" placeholder="Sähköposti"value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="password">Salasana:</label>
                    <input type="password" id="password" placeholder="Salasana" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <button type="submit">Rekisteröidy</button>
                </form>
                <div className='links'>
                    <p>Onko sinulla jo tili? <Link to="/login">Kirjaudu sisään täällä</Link></p>
                    <p><Link to="/">Palaa etusivulle</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
