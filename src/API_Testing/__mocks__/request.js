const posts = {
  1: {'author': 'typicode', 'title': 'json-server'},
  2: {'author': 'james', 'title': 'json-server 2'},
  3: {'author': 'james b', 'title': 'the dev notebook'}
};

export default function request(url) {
  return new Promise((resolve, reject) => {
    const postId = parseInt(url.substr('/posts/'.length), 10);
    setTimeout(
      () => posts[postId] ?
       resolve(posts[postId]) :
       reject({error: 'Post with id ' + postId + ' not found.'})
    ,500);
  });
}
