import { React, useState } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
// import 'react-calendar/dist/Calendar.css';
import './CalendarView.css';

const CalendarView = function ({ setter }) {
  const [date, setDate] = useState(new Date());

  const handleChange = (e) => {
    setDate(e)
    axios({
      url: 'http://localhost:4000/workout',
      method: 'get',
      params: {
        date: e
      }
    })
      .then((data) => {
        setter(data.data)
        console.log('received data')
      })
      .catch((err) => {
        throw err;
      })
  }

  return (
    <div id="calendar-container">
      <h3>Search Your Fitness History!</h3>
      <Calendar onChange={handleChange} value={date} />
      <span className='bold'>Selected Date:</span>{' '}
      {date.toDateString()}
    </div>
  );
}

export default CalendarView;