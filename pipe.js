var fs = require('fs');

var readableStream = fs.createReadStream('readme.txt');
var writeableStream = fs.createWriteStream('output.txt');
readableStream.pipe(writeableStream);
