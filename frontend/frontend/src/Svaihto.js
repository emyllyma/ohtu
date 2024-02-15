import React, { useState } from "react";
import './App.css'; // Import the CSS file
import { Link } from 'react-router-dom';

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
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={changeHandler}
                    className="border"
                    placeholder="Name"
                />
                <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={changeHandler}
                    className="border"
                    placeholder="Email"
                />
                <input type="submit" value="Send Email" />
                <Link to="/login" className="link-to-register">
                    Back to Homepage
                </Link>
            </form>
            {/* Näytä ilmoitus vain, jos sähköposti on yritetty lähettää */}
            {emailSent === true && <p>Email sent successfully!</p>}
            {emailSent === false && <p>Email sending failed!</p>}
        </div>
    );
};

export default Svaihto;
