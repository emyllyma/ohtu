import { useState } from "react"
import './App.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Svaihto = () => {
    const [formState, setFormState] = useState({});

    const config = {
        Username: 'emiliam.myllymaki@yopmail.com',
        Password: '388F9A3817C752A26BA7290ADD18E1EC172F',
        Host: 'smtp.elasticemail.com',
        Port: '2525',
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }

    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="name"
                    value=""
                    onChange={changeHandler}
                    className="border"
                />
                <input
                    type="email"
                    name="email"
                    value=""
                    onChange={changeHandler}
                    className="border"
                />
                <input type="submit" value="Lähetä uusi salasana"></input>
                <Link to="/login" className="link-to-register">
                    Takaisin etusivulle
                </Link>
            </form>
        </div>
    );
};

export default Svaihto;