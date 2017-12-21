var http = require('http');
//var dt = require('./datemodule.js');
var url = require('url');  

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  //res.write("the data and time are currently: " + dt.myDateTime() + "\n"); 
  //res.write(req.url); 
  var q = url.parse(req.url, true).query; 
  var txt = q.year + " " + q.month;
  //res.write(txt + "\n"); 
  res.end(txt);
}).listen(8080); 
