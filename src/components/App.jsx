import '../components/App.css';
import { React, useState } from 'react';

import NavBar from './NavBar.jsx';
import MantineE from './MantineE.jsx';
import History2 from './History2.jsx';
import CalendarView from './CalendarView.jsx';

function App() {
  const [history, setHistory] = useState([]);

  return (
    <div id="app-container">
      <NavBar />
      <h1 id="title">Stay fit with FitTrack!</h1>
      <div id='top-half'>
        <div id="left-column">
          <h3>What did you workout today?</h3>
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
