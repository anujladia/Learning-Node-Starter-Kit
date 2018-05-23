var event = require('events');
var eventEmitter = new event.EventEmitter();

var ringbell = function(){
	console.log("Ring Ring Ring");
	eventEmitter.emit('bellrings', "Welcome");
}

eventEmitter.on('doorOpens', ringbell);
eventEmitter.on('bellrings', function(message){
	console.log(message);
})
eventEmitter.emit('doorOpens');