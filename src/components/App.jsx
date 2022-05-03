import '../components/App.css';
import Exercise from './Exercise.jsx';
import CalendarView from './CalendarView.jsx';

function App() {
  return (
    <div>
      <h1>What did you workout today?</h1>
      <Exercise />
      <h3>HYDRATE!</h3>
      <CalendarView />
    </div>
  );
}

export default App;
