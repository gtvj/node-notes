let {expect} = require('chai');
let tools = require('../lib/tools');

describe("Testing the tools modules", function () {

    describe("sayHi()", () => {

        it('should say hello', function () {

            let result = tools.sayHi();

            expect(result).to.equal('hello');

        });
    });

    describe("loadWiki()", function () {

        it('should load Abraham Lincoln\'s wikipedia page', function (done) {

            tools.loadWiki('Abraham_Lincoln', function (html) {
                expect(html).to.be.a('string').that.includes('1864 presidential election');
                done();
            })

        })

    })
});

