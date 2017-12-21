// Learn how to use events and emitters.
var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
  console.log('listener1 executed an error was emitted');
}

// Add listener1 for an error event
eventEmitter.addListener('error', listener1);

//Fire the error event
console.log('emitting error event'); 
eventEmitter.emit('error');

// Remove the error event listener
console.log('remove error event');
eventEmitter.removeListener('error', listener1);

try {
  console.log('emitting error');
  eventEmitter.emit('error');
} catch (err) {
  console.log('caught an error ' + err);
}

console.log('program finished');
