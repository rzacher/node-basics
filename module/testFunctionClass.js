// test export of functionClass

var person = require('./functionClass');

var person1 = new person('Derek', 'Flint');

console.log("persons full name is " + person1.fullName());