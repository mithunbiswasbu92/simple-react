import logo from './logo.svg';
import './App.css';
import Players from './Components/Players/Players';
import { useEffect, useState } from 'react';
import fakedata from './Fakedata/Fakedata.json';
import PlayerInfo from './Components/PlayerInfo/PlayerInfo';

function App() {
  const [players, setPlayers] = useState([]);
  const [selectPlayer, setSelectPlayer] = useState([]);
  useEffect(() => {
    setPlayers(fakedata)
  }, [])

const handleAddPlayer = (player) => {
  const newPlayer = [...selectPlayer, player];
  setSelectPlayer(newPlayer);
}

  return (
    <div className="App">
      <header className="App-header">
        <div className="playerDetails">
          <h1>Player Loaded: {players.length}</h1>
          <h2>Player Added: {selectPlayer.length}</h2>
          <PlayerInfo selectPlayer={selectPlayer}></PlayerInfo>
        </div>
        <div className="playerList">
          <ul>
              {
                players.map( player => <Players player={player} handleAddPlayer={handleAddPlayer}></Players>)
              }
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
