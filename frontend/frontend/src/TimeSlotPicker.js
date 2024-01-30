import React, { useState } from 'react';
import './TimeSlotPicker.css';

function TimeSlotPicker({ onTimeSelect }) {
  const [selectedTime, setSelectedTime] = useState(null);
  const times = ["9.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00", "23.00"]; 

  const selectTime = (time) => {
    setSelectedTime(time);
    if (onTimeSelect) {
        onTimeSelect(time);
    }
  };
  const scroll = (direction) => {
    const container = document.querySelector('.time-slots');
    const scrollAmount = 100; 
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="time-slot-picker">
      <button className="scroll-button" onClick={() => scroll(-1)}>&lt;</button>
      <div className="time-slots">
        {times.map(time => (
          <button
          type ="button"
            key={time}
            className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
            onClick={() => selectTime(time)}
          >
            {time}
          </button>
        ))}
      </div>
      <button className="scroll-button" onClick={() => scroll(1)}>&gt;</button>
    </div>
  );
}

export default TimeSlotPicker;
