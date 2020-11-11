import React from 'react';


//Base class for any character (player or otherwise)
class Character extends React.Component {
    constructor(props){
        super(props);
        this.Health = props.Heath;
        this.Mana = props.Mana;
        this.Name = props.Name;
        this.Spells = {
            Fireball: {
                SpellName: "Fireball",
                Cast: (spellTargetCharacter, callback)=>{
                    if(this.Mana >= 2){
                        this.Mana = this.Mana -2;
                        console.log("take damage", spellTargetCharacter.TakeDamage);
                        spellTargetCharacter.Health = spellTargetCharacter.TakeDamage(2);
                        //Use spread operator so that object is cloned and state updates
                        let newVersionOfTarget = {...spellTargetCharacter};
                        newVersionOfTarget.TakeDamage = spellTargetCharacter.TakeDamage;
                        callback(newVersionOfTarget);
                    }
                    else{
                        console.log("no mana");
                    }
                    
                }
            }
        };
    }

    render(){
        return(
            <div className={this.Health > 0 ? "CharacterCard": "DeadCharacter"}>
                <h1>{this.Name}: {this.Health} Hit Points {this.Mana} Mana</h1>
            </div>
        )
    }

    TakeDamage(damage){
        if(damage > this.Health){
            return 0;
        }
        else{
            return this.Health - damage;
        }
    }
}

export default Character;