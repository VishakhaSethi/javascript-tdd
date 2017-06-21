import {
  getPosts
} from '../getPosts.js';

describe('getPosts', () => {
  it('should expect the function getPosts to exist', function() {
    expect(getPosts()).toBeDefined();
  });

  it('should load post data', () => {
    return getPosts()
    .then(data => {
      expect(data).toBeDefined()
    });
  });
});
