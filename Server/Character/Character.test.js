const Character = require('./Character.js');
const assert = require('assert');

describe('Character', function(){
    describe('getBaseDamage', function(){
        it('should have an initial value of 0', function(){
            //Arrange
            const expectedDamageVal = 0;
            let damageSourceArr = [];
            let character = new Character();

            //Act
            let damageVal = character.getBaseDamage(damageSourceArr);

            //Assert
            assert.equal(damageVal, expectedDamageVal);
        });
        it('should add all members of the damage array', function(){
            const expectedDamageVal = 3;
            let damageSourceArr = [];
            let character = new Character();
            character.damageSources.push(2);
            character.damageSources.push(1);

            let damageVal = character.getBaseDamage(damageSourceArr);

            assert.equal(damageVal, expectedDamageVal);
        });
        it('should include base damage from a spell', function(){
            const expectedDamageVal = 7;
            let damageSourceArr = [3];
            let character = new Character();
            character.damageSources.push(4);

            let damageVal = character.getBaseDamage(damageSourceArr);

            assert.equal(damageVal, expectedDamageVal);
        });
    });
});