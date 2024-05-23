import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarComponent({ onSelectDate }) {
  const [value, setValue] = useState(new Date());

  const handleChange = (date) => {
    setValue(date);
    onSelectDate(date); // Call the onSelectDate function passed from parent
  };

  return (
    <div>
      <Calendar onChange={handleChange} value={value} />
    </div>
  );
}

export default CalendarComponent;
