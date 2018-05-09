# Testing with mocha

We are going to use Mocha and Chai for our testing (these are just two of many available in Node). Here's how they differ: 

* Mocha provides tools to describe, run and build tests but it *does not provide a way to check values*
* Chai is an assertion library that *provides a way to check assertions*

This provides a quick run-through for getting up to speed with unit testing in Node.js

* _Step 1_: Install mocha globally with `npm install -g mocha`. We're installing it globally so that we can run the `mocha` command from anywhere on the command line and mocha will look for a directory named `test` in which it expects tests to reside. Try it.
* _Step 2_: Create `test/first-spec.js` (our first test) using `it()` with one argument to _stub a test_
* _Step 3_: Install Chai as a dev dependency with the command `npm install chai --save-dev` (Note: dev dependencies are those libraries we need to _work with_ our application, whereas standard dependencies are those that are needed for the application to run)
