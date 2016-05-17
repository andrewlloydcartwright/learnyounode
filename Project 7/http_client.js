var http = require('http');
var URL = process.argv[2];
var bl = require('bl');

http.get(URL, function callback(response) {
	response.setEncoding('utf8');
	response.on('data', function(data) {
		console.log(data);
	});
});