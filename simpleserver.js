var http = require('http');
var dt = require('./datemodule.js'); 

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'}); 
  res.write("the data and time are currently: " + dt.myDateTime() + "\n"); 
  res.end();
}).listen(8080); 
