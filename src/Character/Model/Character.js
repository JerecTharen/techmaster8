
//Base class for any character (player or otherwise)
class Character {
    constructor(health, mana, name){
        this.Health = health;
        this.Mana = mana;
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
        this.Name = name;
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