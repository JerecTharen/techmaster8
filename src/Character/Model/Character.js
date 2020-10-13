
//Base class for any character (player or otherwise)
class Character {
    constructor(health, name){
        this.Health = health;
        this.Spells = {
            Fireball: {
                SpellName: "Fireball",
                Cast: (spellTargetCharacter, callback)=>{
                    spellTargetCharacter.Health = spellTargetCharacter.Health - 2;
                    //Use spread operator so that object is cloned and state updates
                    callback({...spellTargetCharacter});
                }
            }
        };
        this.Name = name;
    }
}

export default Character;