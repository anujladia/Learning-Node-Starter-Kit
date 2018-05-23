function printstuff(stuff) {
	console.log(stuff);
}
//printstuff("Hello World");

// function mainfn(anotherfn, value) {
// 	anotherfn(value);
// }
// mainfn(printstuff, "Hello");

function mainfn(anotherfn, value) {
	anotherfn(value);
}
mainfn(function(stuff) {
	console.log(stuff);
}, "Fellow");

console.log(__filename);
console.log(__dirname);

setTimeout(function(){
	console.log("Call from Set Timeout");
}, 5000);

setInterval(function(){
	console.log("Call from Set Interval");
}, 2000);

