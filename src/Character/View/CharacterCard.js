import { useState, useEffect} from "react";
import React from "react";
import "./CharacterCard.css";
import CharacterDAL from "../DAL/CharacterDAL.js";

const CharacterCard = (props)=>{
    const [character, setCharacter] = useState({});

    useEffect(()=>{
        let DAL = props.isPlayer ? new CharacterDAL().GetPlayer() : new CharacterDAL().GetEnemy();
        DAL.then(resp => {
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