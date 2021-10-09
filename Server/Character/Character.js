const Spell = require('../Spell/Spell.js');
const NullHelper = require('../Helpers/NullHelper.js');

//Base class for any character (player or otherwise)
module.exports = class Character{
    constructor(id, characterName, maxHealth, maxMana){
        this.Id = id;
        this.MaxHealth = maxHealth;
        this.CurrentHealth = maxHealth;
        this.MaxMana = maxMana;
        this.CurrentMana = maxMana;
        this.CharacterName = characterName;

        //Damage properties
        this.damageSources = [];
        this.damageMultipliers = [];
        this.damageSubtractors = [];
        this.damageReducers = [];

        this.Spells = [
            new Spell(0, 'Fireball', 2, 2)
        ];
    }

    CastSpell = (targetCharacter, spell) => {
        this.CurrentMana = spell.cast(targetCharacter, this.CurrentMana);
    };

    TakeDamage = (sourcesArr) => {
        if(NullHelper.GetIsNully(sourcesArr))
            sourcesArr = [];
        let damage = 0;
        //get base damage from sources
        damage = this.getBaseDamage(sourcesArr);
        //Apply damage multipliers
        damage = damage * this.getDamageMultipliers();
        //Apply damage reducers
        damage = damage / this.getDamageReducers();
        //Apply damage subtractors
        damage = damage - this.getDamageSubtractors();

        this.CurrentHealth = damage > this.CurrentHealth ? 0 : this.CurrentHealth - damage;
    };

    getBaseDamage = (sourcesArr) => {
        let baseDamageAmt = 0;
        //Add sources already on character
        for(let id = 0; id < this.damageSources.length; id++){
            baseDamageAmt += this.damageSources[id];
        }
        //Add sources passed in
        for(let nd = 0; nd < sourcesArr.length; nd++){
            baseDamageAmt += sourcesArr[nd];
        }

        return baseDamageAmt;
    };

    getDamageMultipliers = () => {
        let multiplierAmt = NullHelper.GetIsEmpty(this.damageMultipliers) ? 1 : 0;

        //Add in aditional multipliers
        for(let mi = 0; mi < this.damageMultipliers.length; mi++){
            multiplierAmt += this.damageMultipliers[mi];
        }

        return multiplierAmt;
    };

    getDamageReducers = () => {
        let damageReducerAmt = NullHelper.GetIsEmpty(this.damageReducers) ? 1 : 0;

        //Add additional reducers
        for(let dr = 0; dr < this.damageReducers.length; dr++){
            damageReducerAmt += this.damageReducers[dr];
        }

        return damageReducerAmt;
    };

    getDamageSubtractors = () => {
        let damageSubtractorAmt = 0;

        //Add additional subtractors
        for(let ds = 0; ds < this.damageSubtractors.length; ds++){
            damageSubtractorAmt += this.damageSubtractors[ds];
        }

        return damageSubtractorAmt;
    };
}