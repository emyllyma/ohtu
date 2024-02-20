import React, { useState } from "react";
import './App.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import './Svaihto.css'; // Import the CSS file

const Svaihto = () => {
    const [formState, setFormState] = useState({ name: "", email: "" });
    const [emailSent, setEmailSent] = useState(null); // Alusta tila null-arvolla

    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const config = {
            SecureToken: '16ba93c9-61c9-4952-b3cb-37a2a42588c9',
            To: formState.email,
            From: "emiliam.myllymaki@yopmail.com",
            Subject: "This is the subject",
            Body: "And this is body"
        }
    
        if (window.Email) {
            try {
                await window.Email.send(config); // Odota sähköpostin lähettämistä
                setEmailSent(true); // Aseta tila onnistumiselle
            } catch (error) {
                console.error("Email sending failed:", error);
                setEmailSent(false); // Aseta tila epäonnistumiselle
            }
        }
    }

    return (
        <div className="svaihto-container">
            <div className="svaihto-content">
                <div className="otsikko">
                <h1>Vaihda salasana</h1>
                </div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={changeHandler}
                    className="border"
                    placeholder="Nimi"
                />
                <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={changeHandler}
                    className="border"
                    placeholder="Sähköposti"
                />
                <input type="submit" value="Lähetä uusi salasana" />
                <Link to="/login" className="link-to-register">
                    Palaa etusivulle
                </Link>
            </form>
            {/* Näytä ilmoitus vain, jos sähköposti on yritetty lähettää */}
            {emailSent === true && <p>Sähköpostiinne on nyt lähetetty linkki salasanan vaihtoa varten.</p>}
            {emailSent === false && <p>Äshköpostin lähetys ei onnistunut.</p>}
        </div>
        </div>
    );
};

export default Svaihto;
