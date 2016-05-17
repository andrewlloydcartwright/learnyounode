var net = require('net');
var datetime = require('node-datetime');
var port = process.argv[2];

var server = net.createServer(function (socket) {
	var dt = datetime.create();
	var timestamp = dt.format('Y-m-d H:M\n');
	socket.write(timestamp);
	socket.end();
});

server.listen(port);