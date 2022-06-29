import { React, useState } from 'react';

import NavBar from './NavBar.jsx';
import Exercise from './Exercise.jsx';
import History from './History.jsx';
import CalendarView from './CalendarView.jsx';
import SortBox from './SortBox.jsx';
import Search from './Search.jsx';

import '../components/App.css';

function App() {
  const [history, setHistory] = useState([]);

  return (
    <div id="app-container">
      <NavBar />
      <h1 id="title">Stay fit with FitTrack!</h1>
      <div id="top-half">
        <div id="left-column">
          <h3>What did you workout today?</h3>
          <Exercise />
        </div>
        <div id="right-column">
          <CalendarView setter={setHistory} />
        </div>
      </div>
      <div id="bottom-half">
        <div id="search-and-sort">
          <Search workouts={history} />
          <SortBox workouts={history} />
        </div>
        <div id="history-table">
          <History workouts={history} />
        </div>
      </div>
    </div>
  );
}

export default App;
