let {expect} = require('chai');
let rewire = require('rewire');

let tools = rewire('../lib/tools');


describe("Testing mocking data", function () {

    beforeEach(function () {
        this.testData = ['DDD'];
        tools.__set__('our_data', this.testData);
    });


    describe("getFirstItemFromOurData()", function () {
        it('Should return the first item from our mocked data', function () {

            let item = tools.getFirstItemFromOurData();
            expect(item).to.equal('DDD')
        })
    })
});