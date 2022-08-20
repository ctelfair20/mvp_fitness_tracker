import { React, useState } from 'react';

import NavBar from './NavBar.jsx';
import Exercise from './Exercise.jsx';
import History from './History.jsx';
import CalendarView from './CalendarView.jsx';
import Hydrate from './Hydrate.jsx';
import SortBox from './SortBox.jsx';
import SearchBar from './SearchBar.jsx';
import EmptySearch from './EmptySearch.js';

import '../components/App.css';

function App() {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState([1]);
  const [searchClick, setSearchClick] = useState(false)

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
          <Hydrate />
        </div>
      </div>
      <div id="bottom-half">
        <div id="search-and-sort">
          <SearchBar
            workouts={history}
            setter={setHistory}
            hasBeenClicked={setSearchClick}
            searchSetter={setSearch}
          />
          <EmptySearch
            searchedWorkouts={search}
            searchClick={searchClick}
          />
          <SortBox
            workouts={history}
            setter={setHistory}
          />
        </div>
        <div id="history-table">
          <History workouts={history} />
        </div>
      </div>
    </div>
  );
}

export default App;
