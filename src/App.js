import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Character from "./Character/Model/Character.js";
import CharacterCard from "./Character/View/CharacterCard.js";

//let EnemyCharacter = Character();
const PlayerCharacter = new Character(10, "Player");
const EnemyCharacter = new Character(10, "Enemy");
function App() {
  const [enemyCharacterHealth, setEnemyCharacterHealth] = useState(
    EnemyCharacter.Health
  );

  const CastFireball = () => {
    console.log("Player Character", PlayerCharacter);
    console.log("Enemy Character", EnemyCharacter);
    console.log("Casting Fireball");
    PlayerCharacter.Spells.Fireball.Cast(EnemyCharacter, (char) =>
      setEnemyCharacterHealth(char.Health)
    );
    console.log("Player Character", PlayerCharacter);
    console.log("Enemy Character health", enemyCharacterHealth);
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

        <CharacterCard
          Health={PlayerCharacter.Health}
          Name={PlayerCharacter.Name}
        />
        <CharacterCard
          Health={enemyCharacterHealth}
          Name={EnemyCharacter.Name}
        />
        <button id="fireballBtn" onClick={CastFireball}>
          Cast Fireball
        </button>
      </header>
    </div>
  );
}

export default App;
