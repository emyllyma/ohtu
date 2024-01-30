import './App.css';
import ReservationForm from './ReservationForm';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1> Pöytävarausjärjestelmä</h1>
      <ReservationForm />
    </div>
  );
}

export default App;
