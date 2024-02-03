import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label>
          Sähköposti:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Salasana:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Kirjaudu sisään</button>
      </form>
      <Link to="/svaihto">Unohditko salasanasi?</Link>
      <Link to="/register" className="link-to-register">
        Eikö sinulla ole käyttäjää? Rekisteröidy täältä!
      </Link>
    </div>
  );
};

export default Login;
