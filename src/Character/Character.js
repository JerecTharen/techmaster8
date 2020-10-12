
//Base class for any character (player or otherwise)
class Character {
    constructor(health){
        this.Health = health;
        this.Spells = {
            Fireball: {
                SpellName: "Fireball",
                Cast: (spellTargetCharacter)=>{
                    spellTargetCharacter.Health = spellTargetCharacter.Health - 2;
                }
            }
        };
    }
}

export default Character;