import { React, useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './CalendarView.css';

const CalendarView = function () {
  const [date, setDate] = useState(new Date());

  return (
    <div id="calendar-container">
      <h1>Search Your Fitness History!</h1>
      <Calendar onChange={setDate} value={date} />
      <span className='bold'>Selected Date:</span>{' '}
      {date.toDateString()}
    </div>
  );
}

export default CalendarView;