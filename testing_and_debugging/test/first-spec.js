let {expect} = require('chai');
let tools = require('../lib/tools');
let nock = require('nock');

describe("Testing the tools modules", function () {

    describe("sayHi()", () => {

        it('should say hello', function () {

            let result = tools.sayHi();

            expect(result).to.equal('hello');

        });
    });

    describe("loadWiki()", function () {


        before(function() {
            nock('https://en.wikipedia.org')
                .get('/wiki/Abraham_Lincoln')
                .reply(200, "Mock Abraham Lincoln")
        });

        it('should load Abraham Lincoln\'s wikipedia page', function (done) {

            tools.loadWiki('Abraham_Lincoln', function (html) {
                expect(html).to.be.a('string').that.includes('Mock Abraham Lincoln');
                done();
            })

        })

    })
});

