import '../components/App.css';
import { React, useState } from 'react';
import Exercise from './Exercise.jsx';
import History from './History.jsx';
import CalendarView from './CalendarView.jsx';

function App() {
  const [history, setHistory] = useState([]);

  return (
    <div id="app-container">
      <div id="left-column">
        <h1>What did you workout today?</h1>
        <Exercise />
        <History workouts={history} />
      </div>
      <div id="right-column">
        <CalendarView setter={setHistory} />
      </div>
    </div>
  );
}

export default App;
