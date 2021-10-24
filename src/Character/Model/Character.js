import React from 'react';

//TODO: Depricate this
//Base class for any character (player or otherwise)
class Character extends React.Component {
    constructor(props){
        super(props);
        this.Health = props.Heath;
        this.Mana = props.Mana;
        this.Name = props.Name;
        this.Targets = props.Targets;
        this.CurrentTarget = 0;
        this.Spells = {
            Fireball: {
                SpellName: "Fireball",
                Cast: (callback)=>{
                    if(this.Mana >= 2){
                        this.Mana = this.Mana -2;
                        console.log("take damage", this.Targets[this.CurrentTarget].TakeDamage);
                        this.Targets[this.CurrentTarget].TakeDamage(2);

                        // if(callback !== undefined)
                        //   callback(newVersionOfTarget);
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

                <button onClick={this.NextTarget}>Next Target</button>
                <button onClick={this.Spells.Fireball.Cast}>Cast Fireball</button>
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

    NextTarget(){
      this.CurrentTarget++;
      if(this.CurrentTarget >= this.Targets.length)
        this.CurrentTarget = 0;
    }
}

export default Character;
