import logo from './logo.svg';
import './App.css';
import Players from './Components/Players';
import { useEffect, useState } from 'react';
import fakedata from './Fakedata/Fakedata.json';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(fakedata)
  }, [])

const handleAddPlayer = (name) => {
  console.log('Player Added', name);
}

  return (
    <div className="App">
      <header className="App-header">
        <ul>
            {
              players.map( player => <Players player={player} handleAddPlayer={handleAddPlayer}></Players>)
            }
        </ul>
      </header>
    </div>
  );
}

export default App;
