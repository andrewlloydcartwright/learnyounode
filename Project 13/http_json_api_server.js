var http = require('http');
var url = require('url');
var port = process.argv[2];

function parseTime (datetime) {
	return {
		hour: datetime.getHours(),
		minute: datetime.getMinutes(),
		second: datetime.getSeconds()
	}
}

function parseUnixTime (datetime) {
	return {
		unixtime: datetime.getTime()
	}
}

var server = http.createServer(function (req, res) {
	var parsed = url.parse(req.url, true);
	var datetime = new Date(parsed.query.iso);

	res.writeHead(200, { 'Content-Type': 'application/json'});

	if (parsed.pathname == '/api/parsetime') {
		res.end(JSON.stringify(parseTime(datetime)));
	}

	if (parsed.pathname == '/api/unixtime') {
		res.end(JSON.stringify(parseUnixTime(datetime)));	
	}
}).listen(port);

/*
Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────

     var http = require('http')
     var url = require('url')

     function parsetime (time) {
       return {
         hour: time.getHours(),
         minute: time.getMinutes(),
         second: time.getSeconds()
       }
     }

     function unixtime (time) {
       return { unixtime : time.getTime() }
     }

     var server = http.createServer(function (req, res) {
       var parsedUrl = url.parse(req.url, true)
       var time = new Date(parsedUrl.query.iso)
       var result

       if (/^\/api\/parsetime/.test(req.url))
         result = parsetime(time)
       else if (/^\/api\/unixtime/.test(req.url))
         result = unixtime(time)

       if (result) {
         res.writeHead(200, { 'Content-Type': 'application/json' })
         res.end(JSON.stringify(result))
       } else {
         res.writeHead(404)
         res.end()
       }
     })
     server.listen(Number(process.argv[2]))
     */