import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file
import image from './pizza.jpg';
import './Login.css'; // Import the CSS file

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <form onSubmit={handleSubmit}>
          <h1>Pertin pizzeria</h1>
          <h2>Kirjaudu sisään ja varaa pöytä</h2>
          <label>
            Sähköposti:
            <input type="email" placeholder="Sähköposti" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Salasana:
            <input type="password" placeholder="Salasana" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <div className="login-buttons">
            <Link to="/svaihto" className="forgot-password-link">Unohditko salasanasi?</Link>
            <button type="submit">Kirjaudu sisään</button>
          </div>
        </form>
        <form className='login-links'>
          <Link to="/register" className="link-to-register">
            Eikö sinulla ole käyttäjää? Rekisteröidy täältä!
          </Link>
        </form>
      </div>
      <div className='login-image'>
      </div>
    </div>
  );
};

export default Login;
