import { React, useState } from 'react';

import Calendar from 'react-calendar';
import axios from 'axios';
import './CalendarView.css';


//Think about using mantine to display a calendar rather than react-calender
const CalendarView = function ({ setter }) {
  const [date, setDate] = useState(new Date());

  const handleChange = (e) => {
    setDate(e)
    const getData = async () => {
      try {
        const data = await axios({
          url: 'http://localhost:4000/',
          method: 'get',
          params: {
            date: e
          }
        })
        setter(data.data);
        console.log(data.data)
      } catch (err) {
        throw err;
      }
    }
    getData();
  }

  return (
    <div id="calendar-container">
      <h3>Checkout your fitness history!</h3>
      <Calendar onChange={handleChange} value={date} />
    </div>
  );
}

export default CalendarView;