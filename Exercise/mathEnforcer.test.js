const {mathEnforcer} = require('./mathEnforcer');
const {assert} = require('chai');

describe('addFive',()=>{
    it('should1 ', ()=> {
        assert.isUndefined(mathEnforcer.addFive('5'));
        assert.equal(mathEnforcer.addFive(5),10);
        assert.equal(mathEnforcer.addFive(5.5),10.5);
        assert.equal(mathEnforcer.addFive(-5.5),-0.5);
    });
})

describe('subtractTen',()=>{
    it('should2', ()=> {
        assert.isUndefined(mathEnforcer.subtractTen('10'));
        assert.equal(mathEnforcer.subtractTen(10),0);
        assert.equal(mathEnforcer.subtractTen(10.5),0.5);
        assert.equal(mathEnforcer.subtractTen(-10.5),-20.5);
    });
})

describe('sum',()=>{
    it('should3',()=> {
        assert.isUndefined(mathEnforcer.sum('1',2));
        assert.isUndefined(mathEnforcer.sum(1,'2'));
        assert.equal(mathEnforcer.sum(1,2),3);
        assert.equal(mathEnforcer.sum(1,2.5),3.5);
        assert.equal(mathEnforcer.sum(1.5,2.5),4);
        assert.equal(mathEnforcer.sum(1.5,2),3.5);
        assert.equal(mathEnforcer.sum(1.5,-2),-0.5);
    });
})