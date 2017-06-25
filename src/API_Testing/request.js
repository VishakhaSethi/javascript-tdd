//this request.js is for fetching the data from the network

const http = require('http');

export default function request(url) {
  return new Promise(resolve => {
    http.get({path: url}, response => {
      let data = '';
      response.on('data', _data => (data += _data));
      response.on('end', () => resolve(data));
    });
  });
}
