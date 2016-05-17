var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)

// var http = require('http');
// var async = require('async');

// var URL1 = process.argv[2],
// 	URL2 = process.argv[3],
// 	URL3 = process.argv[4];

// async.series([
// 	http.get(URL1, function (response) {
// 		response.setEncoding('utf');
// 		response.on('data', function cb (data, err) {
// 			if (err) return cb(err);
// 			console.log(data);
// 		});
// 	});,
// 	http.get(URL2, function (response) {
// 		response.setEncoding('utf');
// 		response.on('data', function(data) {
// 			console.log(data);
// 		});
// 	});,
// 	http.get(URL3, function (response) {
// 		response.setEncoding('utf');
// 		response.on('data', function(data) {
// 			console.log(data);
// 		});
// 	});
// ]);