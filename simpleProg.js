

function multiply(input) {
   return input * input; 
}

function loop(input) {
 
 for (i=0; i<input; i++) {
   console.log('i=' + i); 
 }
}

function iffunc(testVal) {
    if (testVal == 0) {
      console.log('if is a 0'); 
    } else {
       console.log('if not a 0'); 
    }
}

function testPromiseTriple(input) {
  return new Promise(function(resolve, reject) {
     if (input > 0) {
        var result = input*input*input; 
        resolve(result); 
     } else {
         reject('dont like your number'); 
     }
  })  
}

var x = 5;
loop(x); 
iffunc(x); 
testPromiseTriple(5).then(console.log, console.error); 
console.log('x=' +  multiply(x));


