import { useState} from "react";
import React from 'react';

const CharacterCard = (props)=>{
    //const [characterHealth, setCharacterHealth] = useState(props.Health);

    return(
        <div>
            <h1>{props.Name}: {props.Health} Hit Points</h1>
        </div>
    );
};

export default CharacterCard;