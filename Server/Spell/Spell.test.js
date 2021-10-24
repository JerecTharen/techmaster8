const assert = require('assert');
const Spell = require('./Spell.js');



describe('Sepll', function(){
    let SUT;
    let expectedSpellId;
    let expectedSpellNameStr;
    let expectedSpellDmgAmt;
    let expectedSpellManaCostAmt;
    this.beforeEach(function(){
        expectedSpellId = 1;
        expectedSpellNameStr = 'Test Spell Name';
        expectedSpellDmgAmt = 2;
        expectedSpellManaCostAmt = 3;
        SUT = new Spell(expectedSpellId, expectedSpellNameStr, expectedSpellDmgAmt,
             expectedSpellManaCostAmt);
    });

    describe('Cast', function(){
        it('Should do damage if the user has enough mana', function(){
            let mockCharacter = new MockCharacter();

            SUT.Cast(mockCharacter, expectedSpellManaCostAmt);

            assert.equal(mockCharacter.isTakeDamageUsed, true);
        });
        it('Should not do damage if the user does not have enough mana', function(){
            let mockCharacter = new MockCharacter();

            SUT.Cast(mockCharacter, expectedSpellManaCostAmt - 1);

            assert.equal(mockCharacter.isTakeDamageUsed, false);
        });
        it('Should return caster mana amount minus the mana cost if cast', function(){
            let mockCharacter = new MockCharacter();
            const expectedResultingManaAmt = 5;

            let actualRemainingManaAmt = SUT.Cast(mockCharacter, expectedResultingManaAmt + expectedSpellManaCostAmt);

            assert.equal(actualRemainingManaAmt, expectedResultingManaAmt);
        });
        it('Should return caster mana amount unmodified if not cast', function(){
            let mockCharacter = new MockCharacter();
            let expectedResultingManaAmt = expectedSpellManaCostAmt - 1;

            let actualRemainingManaAmt = SUT.Cast(mockCharacter, expectedResultingManaAmt);

            assert.equal(actualRemainingManaAmt, expectedResultingManaAmt);
        });
    });
});


class MockCharacter{
    isTakeDamageUsed = false;
    TakeDamage(val){
        this.isTakeDamageUsed = true;
    }
}