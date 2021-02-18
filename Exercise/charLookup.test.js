const {lookupChar} = require('./charLookup');
const {expect, assert} = require('chai');

describe('test1', () => {
    it('test1', () => {

        assert.isUndefined(lookupChar(1, 1));
        assert.isUndefined(lookupChar('abc', 1.2));
        assert.isUndefined(lookupChar('abc', 'a'));

    });

    it('test2', () => {
        assert.equal(lookupChar('abc', -1), "Incorrect index");
        assert.equal(lookupChar('abc', 4), "Incorrect index");
    });

    it('test3', () => {
        assert.equal(lookupChar('abc', 0), 'a');
        assert.equal(lookupChar('abc', 2), 'c');
    })


})