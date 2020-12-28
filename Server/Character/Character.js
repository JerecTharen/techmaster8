
//Base class for any character (player or otherwise)
module.exports = class Character{
    constructor(health, mana, characterName, id){
        this.ID = id;
        this.Health = health;
        this.Mana = mana;
        this.CharacterName = characterName;
        this.Spells = {
            Fireball: {
                SpellName: "Fireball",
                Cast: (callback, target)=>{
                    let damage = 2;
                    if(this.Mana >= damage){
                        this.Mana = this.Mana - 2;
                        console.log(`Target ${target.CharacterName} takes ${damage}.`, target.TakeDamage);
                        target.TakeDamage(damage);

                        if(callback !== undefined)
                          callback(target);
                    }
                    else{
                        console.log("no mana");
                    }

                }
            }
        };
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

//export default Character;
