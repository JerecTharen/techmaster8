//Base class for any character (player or otherwise)
class Character {
  constructor(health, name) {
    this.Health = health;
    this.Spells = {
      Fireball: {
        SpellName: "Fireball",
        Cast: (spellTargetCharacter, callback) => {
          console.log("take damage", spellTargetCharacter.TakeDamage);
          spellTargetCharacter.Health = spellTargetCharacter.TakeDamage(2);
          //Use spread operator so that object is cloned and state updates
          callback(spellTargetCharacter);
        },
      },
    };
    this.Name = name;
  }

  TakeDamage(damage) {
    if (damage > this.Health) {
      return 0;
    } else {
      return this.Health - damage;
    }
  }
}

export default Character;
