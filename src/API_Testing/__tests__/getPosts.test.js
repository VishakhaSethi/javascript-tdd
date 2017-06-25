jest.mock('../request.js');

import {getPosts} from '../post.js';
import * as post from '../post.js';

describe('getPosts', () => {

  // function exists or not
  it('should expect the function getPosts to exist', function() {
    expect(getPosts()).toBeDefined();
  });

  // load data
  it('should load post data', () => {
    return post.getPosts(2)
    .then(data =>
      expect(data).toBeDefined());
  });


  //promise
  it('works with promises', () => {
    return post.getPosts(2)
    .then(data =>
      expect(data).toEqual('james'));
  });


  //resolves
  it('works with resolves', () => {
    return expect(post.getPosts(3)).resolves.toEqual('james b');
  });


  //rejects
  it('works with reject', () => {
    return expect(post.getPosts(5)).rejects.toEqual({
      error: 'Post with id 5 not found.'
    });
  });
});
