import React from 'react';
import Calendar from 'react-calendar';
import './CalendarView.css';

class CalendarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div id="calendar-container">
        <h1>Search Your Fitness History!</h1>
        <Calendar />
      </div>
    );
  }
}

export default CalendarView;