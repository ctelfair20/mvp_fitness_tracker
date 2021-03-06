import { React, useState } from 'react';

import Calendar from 'react-calendar';
import axios from 'axios';
import './CalendarView.css';


//Think about using mantine to display a calendar rather than react-calender
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
      <h3>Checkout your fitness history!</h3>
      <Calendar onChange={handleChange} value={date} />
    </div>
  );
}

export default CalendarView;