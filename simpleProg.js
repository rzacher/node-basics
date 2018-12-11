"use strict"; 

function multiply(input) {
   return input * input; 
}

function loop(input) {
 var i; 
 for (i=0; i<input; i++) {
   console.log('i=' + i); 
 }
}

function whileLoop() {
  console.log("whileLoop"); 
  var i=0; 

  while (i<3) {
    console.log("while: " + i); 
    i++; 
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
     console.log("running testPromiseTriple"); 
     if (input > 0) {
        var result = input*input*input; 
        resolve(result); 
     } else {
         reject('dont like your number'); 
     }
  })  
}


function printArray() {
   console.log('printArray'); 
   var array = ['bob', 'marieke'];
    console.log(array); 

    array.forEach(function(value) {
      console.log('Name:' + value); 
    }); 
}

function tryReduce() {
  console.log("tryReduce"); 
  var array = [3, 5];
  const reducer = (accum, current) => accum + current; 
  console.log(array.reduce(reducer));
}

function tryMap() {
  console.log('tryMap'); 
  let array = [3,5];
  const mapper = (x) => x*2;
  console.log(array.map(mapper)); 
}

var x = 5;
loop(x); 
iffunc(x); 
testPromiseTriple(5).then(console.log, console.error); 
console.log('x=' +  multiply(x));
printArray();
whileLoop();
tryReduce();  
tryMap(); 

