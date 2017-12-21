var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use the url module to turn the querystring into an object:*/
  res.write(req.url); 
  res.write("\n"); 
  var q = url.parse(req.url, true).query;
  /*Return the year and month from the query object:*/
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);
