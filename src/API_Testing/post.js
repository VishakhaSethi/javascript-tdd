import request from './request.js';

const getPosts = (postId) =>
   request(`/posts/${postId}`)
    .then(post =>
       post.author
     );
export {
  getPosts
};
