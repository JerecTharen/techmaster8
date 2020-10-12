
//Base class for any character (player or otherwise)
let Character = {
    Health : 10,
    Spells : {
        Fireball: {
            SpellName: "Fireball",
            Cast: (spellTargetCharacter)=>{
                spellTargetCharacter.Health = spellTargetCharacter.Health - 2;
            }
        }
    }
};

export default Character;