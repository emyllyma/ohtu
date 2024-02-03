import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker'; // calendar for dates
import 'react-datepicker/dist/react-datepicker.css';
import TimeSlotPicker from './TimeSlotPicker'; // selecting time 
import { Link } from 'react-router-dom';
import './ReservationForm.css';

// create form to let users make reservations
function ReservationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [table, setTable] = useState('');
  const [reservationDate, setReservationDate] = useState(new Date());
  const [timePeriod, setTimePeriod] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTableChange = (event) => {
    setTable(event.target.value);
  };

  const handleTimeSelect = (time) => {
    setTimePeriod(time);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/api/reservations', { // local server url, port 5000
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, table, date: reservationDate, timePeriod })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success: ', data);
        setSuccessMessage('Varaus onnistui!');
      })
      .catch((error) => {
        console.error('Error: ', error);
        setSuccessMessage('');
      });
  };

  return (
    <div className="reservation-form">
    {successMessage && (
      <div className="success-message">
        {successMessage}
      </div>
      )}

      <form onSubmit={handleSubmit}>
        <label>
          Varaajan nimi:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Sähköposti:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Pöytä:
          <select value={table} onChange={handleTableChange}>
            <option value="Pöytä 1">Pöytä 1</option>
            <option value="Pöytä 2">Pöytä 2</option>
            <option value="Pöytä 3">Pöytä 3</option>
            <option value="Pöytä 4">Pöytä 4</option>
            <option value="Pöytä 5">Pöytä 5</option>
            <option value="Pöytä 6">Pöytä 6</option>
            <option value="Pöytä 7">Pöytä 7</option>
            <option value="Pöytä 8">Pöytä 8</option>
          </select>
        </label>
        <label>
          Päivämäärä:
          <ReactDatePicker selected={reservationDate} onChange={(date) => setReservationDate(date)} />
        </label>
        <label>
          Valitse aika:
          <TimeSlotPicker onTimeSelect={handleTimeSelect} />
        </label>
        <br />
        <button type="submit">Tee varaus</button>
      </form>

      
    {successMessage && (
      <div className="link-to-home">
        <Link to="/login">Palaa etusivulle</Link>
      </div>
      )}
    </div>
  );
}

export default ReservationForm;
