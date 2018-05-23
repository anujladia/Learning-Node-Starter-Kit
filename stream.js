var fs = require('fs');

var readableStream = fs.createReadStream('readme.txt');
var data = '';
readableStream.setEncoding('UTF8');
readableStream.on('data', function(chunk){
	data += chunk;
});
readableStream.on('end', function(){
	console.log(data);
});

var writeData = 'Hello';
var writeableStream = fs.createWriteStream('output.txt');
writeableStream.write(writeData, 'UTF8');
writeableStream.end();
writeableStream.on('finish', function() {
	console.log("Write Completed");
});