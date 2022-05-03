import '../components/App.css';
import Exercise from './Exercise.jsx';
import CalendarView from './CalendarView.jsx';

function App() {
  return (
    <div id="app-container">
      <div id="left-column">
        <h1>What did you workout today?</h1>
        <Exercise />
        <h3>HYDRATE!</h3>
      </div>
      <div id="right-column">
        <CalendarView />
      </div>
    </div>
  );
}

export default App;
