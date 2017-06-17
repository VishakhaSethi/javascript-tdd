import {
  addition,
  subtraction,
  multiply,
  divide,
  squareRoot
} from '../math.js';


describe('math', function() {
  it('addition function should exist', function() {
    expect(addition()).toBeDefined();
  });

  it('finds the sum of two values', function() {
    expect(addition(1, 2)).toBe(3);
  });

  it('subtracts two values', function() {
    expect(subtraction(5, 3)).toBe(2);
  });

  it('multiplies two values', function() {
    expect(multiply(5, 5)).toBe(25);
  });

  it('divides two values', function() {
    expect(divide(10, 2)).toBe(5);
  });

  it('finds the square root of the given value', function() {
    expect(squareRoot(100)).toBe(10);
  });
});
