import React from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './Character/Character.js';


//let EnemyCharacter = Character();

function App() {

  let EnemyCharacter = Character;
  let PlayerCharacter = Character;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1>Enemy Health: {EnemyCharacter.Health}</h1>
        <h1>Player Health: {PlayerCharacter.Health}</h1>
        {/* {(()=>{
          console.log("testing test");
          console.log("enemy health ", EnemyCharacter.Health);
          console.log("player health ", PlayerCharacter.Health);
          PlayerCharacter.Spells.Fireball.Cast(EnemyCharacter);
          console.log("enemy health ", EnemyCharacter.Health);
          console.log("player health ", PlayerCharacter.Health);
        })()} */}
      </header>
    </div>
  );
}

export default App;
