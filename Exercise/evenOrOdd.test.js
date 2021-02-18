const {isOddOrEven} = require('./evenOrOdd');
const { expect, assert } = require('chai');

describe('test1',()=>{
    it('work1', ()=>{
       expect(isOddOrEven('1')).to.equal('odd')
    })
    it('work2', ()=>{
        expect(isOddOrEven('11')).to.equal('even')
    })
    it('work3', ()=>{
        expect(isOddOrEven(1)).to.be.undefined
    })
})