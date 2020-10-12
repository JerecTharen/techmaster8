import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './Character/Character.js';


//let EnemyCharacter = Character();

function App() {

  let EnemyCharacter = new Character(10);
  let PlayerCharacter = new Character(10);

  const [enemyCharacterState, setEnemyCharacterState] = useState(EnemyCharacter);
  const [playerCharacterState, setplayerCharacterState] = useState(PlayerCharacter);

  const CastFireball = ()=>{
    console.log("Casting Fireball");
    console.log("Player Character", PlayerCharacter);
    console.log("Enemy Character", EnemyCharacter);
    PlayerCharacter.Spells.Fireball.Cast(EnemyCharacter);
    setEnemyCharacterState(EnemyCharacter);
  };

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

        <h1>Enemy Health: {enemyCharacterState.Health}</h1>
        <h1>Player Health: {playerCharacterState.Health}</h1>
        <button id="fireballBtn" onClick={CastFireball}>Cast Fireball</button>
      </header>
    </div>
  );
}

export default App;
