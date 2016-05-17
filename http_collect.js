var http = require('http');
var bl = require('bl');

var URL = process.argv[2];

http.get(URL, function callback(response) {
	response.setEncoding('utf8');
	response.pipe(bl(function (err, data) {
		console.log(data.length);
		console.log(data.toString());
	}));
});