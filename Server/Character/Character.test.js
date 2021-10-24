const Character = require('./Character.js');
const assert = require('assert');

describe('Character', function(){
    let expectedCharacterNameStr;
    let expectedCharacterId;
    let expectedCharacterMaxHealth;
    let expectedCharacterMaxMana;
    let SUT;
    this.beforeEach(function(){
        expectedCharacterId = 1;
        expectedCharacterNameStr = 'Test Name';
        expectedCharacterMaxHealth = 10;
        expectedCharacterMaxMana = 10;
        SUT = new Character(expectedCharacterId, expectedCharacterNameStr, expectedCharacterMaxHealth,
             expectedCharacterMaxMana);
    });

    describe('getBaseDamage', function(){
        it('should have an initial value of 0', function(){
            //Arrange
            const expectedDamageVal = 0;
            let damageSourceArr = [];

            //Act
            let damageVal = SUT.getBaseDamage(damageSourceArr);

            //Assert
            assert.equal(damageVal, expectedDamageVal);
        });
        it('should add all members of the damage array', function(){
            const expectedDamageVal = 3;
            let damageSourceArr = [];
            SUT.damageSources.push(2);
            SUT.damageSources.push(1);

            let damageVal = SUT.getBaseDamage(damageSourceArr);

            assert.equal(damageVal, expectedDamageVal);
        });
        it('should include base damage from a spell', function(){
            const expectedDamageVal = 7;
            let damageSourceArr = [3];
            SUT.damageSources.push(4);

            let damageVal = SUT.getBaseDamage(damageSourceArr);

            assert.equal(damageVal, expectedDamageVal);
        });
    });

    describe('getDamageMultipliers', function(){
        it('should have a base multilier of 1', function(){
            const expectedMultiplier = 1;

            let actualMultiplierVal = SUT.getDamageMultipliers();

            assert.equal(actualMultiplierVal, expectedMultiplier);
        });

        it('should add all multipliers together', function(){
            const expectedMultiplier = 3;
            SUT.damageMultipliers.push(1);
            SUT.damageMultipliers.push(2);

            let actualMultiplierVal = SUT.getDamageMultipliers();

            assert.equal(actualMultiplierVal, expectedMultiplier);
        });
    });

    describe('getDamageReducers', function(){
        it('should have a base divider of 1', function(){
            const expectedReducerVal = 1;

            let actualReducerVal = SUT.getDamageReducers();

            assert.equal(actualReducerVal, expectedReducerVal);
        });
        it('should add all reducers together', function(){
            const expectedReducerVal = 3;
            SUT.damageReducers.push(1);
            SUT.damageReducers.push(2);

            let actualReducerVal = SUT.getDamageReducers();

            assert.equal(actualReducerVal, expectedReducerVal);
        });
    });

    describe('getDamageSubtractors', function(){
        it('should have a base subtractor of 0', function(){
            const expectedSubtrVal = 0;

            let actualSubtrVal = SUT.getDamageSubtractors();

            assert.equal(actualSubtrVal, expectedSubtrVal);
        });
        it('should sum all subtractors', function(){
            const expectedSubtrVal = 3;
            SUT.damageSubtractors.push(1);
            SUT.damageSubtractors.push(2);

            let actualSubtrVal = SUT.getDamageSubtractors();

            assert.equal(actualSubtrVal, expectedSubtrVal);
        });
    });

    describe('TakeDamage', function(){
        it('should run without exception if no damage sources are provided', function(){
            let isWithoutException = true;

            try{
                SUT.TakeDamage();
            }
            catch(err){
                isWithoutException = false;
                console.error('error is: ', err);
            }

            assert.equal(isWithoutException, true);
        });
        it('should default to 0 damage', function(){

            SUT.TakeDamage();
            let actualHealth = SUT.CurrentHealth;

            assert.equal(actualHealth, expectedCharacterMaxHealth);
        });
        it('should subtract damage sources', function(){
            const expectedHealthVal = 7;

            SUT.TakeDamage([1, 2]);
            let actualHealthVal = SUT.CurrentHealth;

            assert.equal(actualHealthVal, expectedHealthVal);
        });
        it('should multiply damage by multipliers', function(){
            const expectedHealthVal = 7;//10 - 1 * 3
            SUT.damageMultipliers.push(3);

            SUT.TakeDamage([1]);
            let actualHealthVal = SUT.CurrentHealth;

            assert.equal(actualHealthVal, expectedHealthVal);
        });
        it('should divide by reducers', function(){
            const expectedHealthVal = 8;
            SUT.damageReducers.push([2]);

            SUT.TakeDamage([4]);
            let actualHealthVal = SUT.CurrentHealth;

            assert.equal(actualHealthVal, expectedHealthVal);
        });
        it('should subtract damage subtractors', function(){
            const expectedHealthVal = 7;
            SUT.damageSubtractors.push(2);

            SUT.TakeDamage([5])

            assert.equal(SUT.CurrentHealth, expectedHealthVal);
        });
        it('should not allow current health to go negative', function(){
            const expectedHealth = 0;

            SUT.TakeDamage([expectedCharacterMaxHealth + 1]);

            assert.equal(SUT.CurrentHealth, expectedHealth);
        });
        it('should multiply and reduce before subtracting', function(){
            const expectedHealthVal = 6;
            SUT.damageMultipliers.push(4);
            SUT.damageReducers.push(2);
            SUT.damageSubtractors.push(2);

            SUT.TakeDamage([1, 2]);

            assert.equal(SUT.CurrentHealth, expectedHealthVal);
        });
        it('should not heal the character if subtractors are more than damage', function(){
            const expectedHealthVal = 8;
            SUT.CurrentHealth = expectedHealthVal;
            SUT.damageSubtractors.push(2);

            SUT.TakeDamage([1]);

            assert.equal(SUT.CurrentHealth, expectedHealthVal);
        });
    });
});