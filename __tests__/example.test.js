const {addition, subtraction, multiply} = require("../src/example.js");


describe('example', function() {
  it('finds the sum of two numbers', function() {
    expect(addition(1, 2)).toBe(3);
  });

  it('subtracts two numbers', function() {
    expect(subtraction(5, 3)).toBe(2);
  });

  it('multiplies two numbers', function() {
    expect(multiply(5, 5)).toBe(25);
  })
});
