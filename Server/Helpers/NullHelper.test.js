const assert = require('assert');
const NullHelper = require('./NullHelper');

describe('NullHelper', function(){
    describe('GetIsNully', function(){
        it('should be static', ()=>{
            assert.notEqual(NullHelper.GetIsNully, undefined);
        });
        it('should return true for null', function(){
            let isNull = NullHelper.GetIsNully(null);
            
            assert.equal(isNull, true);
        });
        it('should return true for undefined', function(){
            let isUndefined = NullHelper.GetIsNully(undefined);
            
            assert.equal(isUndefined, true);
        });
        it('should return false if provided with an object', function(){
            let isNully = NullHelper.GetIsNully({});
            
            assert.equal(isNully, false);
        });
        it('should return false if provided with a primitive type', function(){
            let isNully = NullHelper.GetIsNully(0);
            
            assert.equal(isNully, false);
        });
    });

    describe('GetIsEmpty', function(){
        it('should be static', function(){
            assert.notEqual(NullHelper.GetIsEmpty, undefined);
        });
        it('should throw an exception if a primitive value is passed in', function(){
            assert.throws(()=>{NullHelper.GetIsEmpty(0)}, Error, 'Not a valid argument');
        });
        it('should return true for an empty array', function(){
            assert.equal(NullHelper.GetIsEmpty([]), true);
        });
        it('should return true for an empty object', function(){
            assert.equal(NullHelper.GetIsEmpty({}), true);
        });
        it('should return false for an array with values', function(){
            let testArr = [0];

            assert.equal(NullHelper.GetIsEmpty(testArr), false);
        });
        it('should return false for an object with properties', function(){
            let testObj = {test: 0};

            assert.equal(NullHelper.GetIsEmpty(testObj), false);
        });
        it('should return true if nothing is passed in', function(){
            assert.equal(NullHelper.GetIsEmpty(), true);
        });
    });
});