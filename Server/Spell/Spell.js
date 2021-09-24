
//Base class for any character (player or otherwise)
module.exports = class Spell{
    constructor(spellId, spellNameStr, spellDamageAmt, spellManaCostAmt){
        this.spellId = spellId;
        this.spellNameStr = spellNameStr;
        this.spellDamageAmt = spellDamageAmt;
        this.spellManaCostAmt = spellManaCostAmt;
    }

    Cast = (enemyPlayer, casterManaAmt) => {
        if(casterManaAmt >= this.spellManaCostAmt){
            console.log(`Casting ${this.spellNameStr} on ${enemyPlayer.characterName}`);
            enemyPlayer.TakeDamage([this.spellDamageAmt]);
            return casterManaAmt - this.spellManaCostAmt;
        }
        else{
            console.log('Not enough mana');
            return casterManaAmt;
        }
    };
}

//export default Character;
