// Demo how to handle an error in a callback function

const fs = require('fs');

function nodeStyleCallback(err, data) {

  if (err) {
    console.error('There was an error', err);
    return; 
  }
  console.log('data'); 

}

console.log('read file that does not exist');
fs.readFile('./demomodule-notexist.js', nodeStyleCallback);

console.log('read file that does exist'); 
fs.readFile('./demomodule.js', nodeStyleCallback);


