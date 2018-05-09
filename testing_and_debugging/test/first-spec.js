let {expect} = require('chai');
let tools = require('../lib/tools');

describe("sayHi()", () => {

    it('should say hello', function () {

        let result = tools.sayHi();

        expect(result).to.equal('hello');

    });
});