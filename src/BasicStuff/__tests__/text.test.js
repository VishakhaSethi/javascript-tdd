import {
  reverseString
} from '../text.js';


describe('text', function() {
  it('should exist', function() {
    const textFile = require('../text.js');
    expect(textFile).toBeDefined();
  });

  it('should reverse a given string', function() {
    const givenString = 'olleH';
    expect(reverseString(givenString)).toBe('Hello');
  });
});
