import { React, useState } from 'react';

import NavBar from './NavBar.jsx';
import Exercise from './Exercise.jsx';
import History from './History.jsx';
import CalendarView from './CalendarView.jsx';

import '../components/App.css';

function App() {
  const [history, setHistory] = useState([]);

  return (
    <div id="app-container">
      <NavBar />
      <h1 id="title">Stay fit with FitTrack!</h1>
      <div id='top-half'>
        <div id="left-column">
          <h3>What did you workout today?</h3>
          <Exercise />
        </div>
        <div id="right-column">
          <CalendarView setter={setHistory} />
        </div>
      </div>
      <div id='bottom-half'>
        <History workouts={history} />
      </div>
    </div>
  );
}

export default App;
