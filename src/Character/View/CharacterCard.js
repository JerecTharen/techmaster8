import { useState, useEffect} from "react";
import React from "react";
import "./CharacterCard.css";

const CharacterCard = ()=>{
    const [character, setCharacter] = useState({});

    useEffect(()=>{
        fetch('/player').then(resp => {
            console.log('received response: ', resp);
            if(resp.ok)
                return resp.json();
        })
        .then((respJson) => setCharacter(respJson))
        .catch(err => console.error(err));
    });

    return(
        <div className={character.CurrentHealth > 0 ? "CharacterCard": "DeadCharacter"}>
            <h1>{character.CharacterName}: {character.CurrentHealth} Hit Points, {character.CurrentMana} Mana</h1>
        </div>
    );
};

export default CharacterCard;