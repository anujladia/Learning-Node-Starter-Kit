var http = require('http');
http.createServer( function(request, response){ 	//anonymous function
	response.writeHead(200, {"Content-Type": "text/plain"}); //200 status suggest OK, then pass an object content type
	response.write("Hello World!"); 
	response.end();
}).listen(8080);