'use strict';
var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var filex = '.' + process.argv[3];

fs.readdir(dir, function (err, list) {
	if (err) console.log(err);

	list.forEach(function (file) {
		if (path.extname(file) === filex) {
			console.log(file);
		}
	});
});