function printInput(input) {
   return new Promise( function(resolve, reject) {
	  // pass back the input in resolve
	  if (input != undefined) {
	    resolve(input);
	  } else {
	    // if input is null, reject
	    reject('input was undefined'); 
	  }
    })
}

// test with input
printInput('hi bob').then(console.log, console.error);

//test input undefined
printInput().then(console.log, console.error); 
