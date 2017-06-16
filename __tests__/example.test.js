const example = require("../src/example.js");


//The mock starts here. The mock is named.
describe('sum', function() {
  //Describes what the Mock does.
  it('finds the sum of two numbers', function() {
    //What is required for the mock to work
  //  var sum = require('../sum.js');
    //What the mock will do and what it is expected to match
    expect(example(1, 2)).toBe(3);
  });
});
