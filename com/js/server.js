
/*var express = require('express'),
    routes  = require('./routes'),
    redis   = require('redis');
//    bbRedis  = require('backbone-redis');
*/
var app = require( 'http' ).createServer( handler )
  , io = require( '../../resources/js/socket.io' ).listen( app )
  , fs = require('fs');

app.listen( 3001 );



function handler (req, res) {
  fs.readFile( '../../index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      console.warn(err);
      return res.end('Error loading index.html...');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
	  socket.emit('get_date', { currentDate: new Date() });
	 
});


