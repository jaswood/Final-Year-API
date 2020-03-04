const chai = require('chai');
const chaihttp = require('chai-http');
const TestExample = require('../logic/TestExample');
const assert = require('chai').assert;

chai.use(chaihttp);

describe('TestExample Tests', () => {

    beforeEach(function() {
        console.log('confirmed test');
    });

    describe('simpleAddition Test', () => {
        it('should take two inputs and add them', () => {
            let expect = 10;
            assert.equal(TestExample.simpleAddition(5,5), expect);
        });
    });
});
