import { useState} from "react";
import React from 'react';
import "./CharacterCard.css";

const CharacterCard = (props)=>{
    //const [characterHealth, setCharacterHealth] = useState(props.Health);

    return(
        <div className={props.Health > 0 ? "CharacterCard": "DeadCharacter"}>
            <h1>{props.Name}: {props.Health} Hit Points</h1>
        </div>
    );
};

export default CharacterCard;