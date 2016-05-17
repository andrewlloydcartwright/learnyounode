var http = require('http');

var URL1 = process.argv[2],
	URL2 = process.argv[3],
	URL3 = process.argv[4];

http.get(URL1, URL2, URL3, function (response) {
	response.setEncoding('utf8');
	URL1.response.on('data', function (data) {
		console.log(data, function (dat) {
			URL2.response.on('data')
		})
	});
});jugju