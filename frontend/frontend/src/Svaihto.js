import React, { useState} from 'react';
import {Link } from 'react-router-dom';
import './App.css';


function Svaihto() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleResetPassword = () => {
        // Tässä vaiheessa voit kutsua palvelinta nollatakseen salasanan
            // ja käsitellä nollauksen palvelimen puolella.

            // Simuloidaan palvelimen vastaus
        if (!email) {
            setMessage('Syötä sähköpostiosoitteesi');
        } else {
            setMessage(`Uusi salasana on lähetetty sähköpostiin: ${email}. Tarkista sähköpostisi.`);
        }
    };

    return (
        <div className="App">
            <h1 className='Otsikko'>Vaihda Salasana</h1>
            <p className='Ohjeistus'>Syötä sähköpostiosoitteesi ja uusi salasana lähetetään antamaasi sähköpostiosoitteeseen:</p>
            <div>
                <label className='labeli' htmlFor="email">Sähköpostiosoite:</label> <br></br>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <button onClick={handleResetPassword}>Nollaa salasana</button>
            {message && <p>{message}</p>}
            <p><Link to="/login">Palaa etusivulle</Link></p>
        </div>
    );
}

export default Svaihto;
