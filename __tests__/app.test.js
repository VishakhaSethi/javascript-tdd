var request = require('request');

it('Main page content', function() {
    request('http://localhost:8080' , function(error, response, body) {
        expect(body).toBe('Hello World');
    });
});

it('Main page status', function() {
    request('http://localhost:8080' , function(error, response, body) {
        expect(response.statusCode).toBe(200);
    });
});
it('About page content', function() {
    request('http://localhost:8080/about' , function(error, response, body) {
        expect(response.statusCode).toBe(404);
    });
});
