import './App.css';
import React, { useState } from 'react';
import ReservationForm from './ReservationForm';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Svaihto from './Svaihto';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginHandler({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      if (response.status === 200) {
        onLogin();
        navigate('/reservationform');
        
        console.log("Login successful");
      } else {
        console.log("Login response status: ", response.status);
        alert('Login failed');
      }
    } catch (error) {
      console.log("Login error: ", error);
      alert('Login error: ' + error.message);
    }
  }

  return <Login onLogin={handleLogin} />;
}
function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  return (
    <div className="App">
      <Router key={isLoggedIn ? 'logged-in' : 'logged-out'}>
        <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate replace to="/reservationform" /> : <Navigate replace to="/login" />} />
          <Route path="/login" element={<LoginHandler onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reservationform" element={isLoggedIn ? <ReservationForm /> : <Navigate replace to="/login" />} />
          <Route path="/svaihto" element={<Svaihto />} />
          <Route path="/login" element={<Svaihto />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
