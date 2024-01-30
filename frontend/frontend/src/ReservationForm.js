import React, { useState } from 'react';

function ReservationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [table, setTable] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTableChange = (event) => {
    setTable(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/api/reservations', { // Replace with your server URL
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, table })
  })
  .then(response => response.json())
  .then(data=> {
    console.log('Success: ', data);
  })
  .catch((error) => {
    console.error('Error: ', error);
  })
    // console.log('Submitted:', { name, email, table });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Table:
        <select value={table} onChange={handleTableChange}>
          <option value="">Select a table</option>
          <option value="Table 1">Table 1</option>
          <option value="Table 2">Table 2</option>
          <option value="Table 3">Table 3</option>
        
        </select>
      </label>
      <br />
      <button type="submit">Reserve</button>
    </form>
  );
}

export default ReservationForm;
