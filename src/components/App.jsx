import '../components/App.css';
import { React, useState } from 'react';
// import Exercise from './Exercise.jsx';
import MantineE from './MantineE.jsx';
// import History from './History.jsx';
import History2 from './History2.jsx';
import CalendarView from './CalendarView.jsx';

function App() {
  const [history, setHistory] = useState([]);

  return (
    <div id="app-container">
      <div id='top-half'>
        <div id="left-column">
          <h2>What did you workout today?</h2>
          {/* <Exercise /> */}
          <MantineE />
        </div>
        <div id="right-column">
          <CalendarView setter={setHistory} />
        </div>
      </div>
      <div id='bottom-half'>
        {/* <History workouts={history} /> */}
        <History2 workouts={history} />
      </div>
    </div>
  );
}

export default App;
