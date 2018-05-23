var fs = require('fs'); 

fs.readFile('readme.txt', function(err, data){
	if(err) {
		console.log(err);
	} else {
		console.log("Async data is " + data.toString());
	}
})

var data = fs.readFileSync('readme.txt');
console.log("Sync data is " + data.toString());


// setTimeout(function(){
// 	var data = fs.readFileSync('readme.txt');
// 	console.log("Sync data is " + data.toString());
// }, 5);
