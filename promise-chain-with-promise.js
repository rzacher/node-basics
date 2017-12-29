// Promise chaining with promises. 

new Promise(function(resolve, reject) {

   setTimeout(() => resolve(1), 1000); 
}).then(function(result) {

  console.log(result); // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 5), 1000);
 
  });

}).then(function(result) { // (**)

  console.log(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 5), 1000);
  });

}).then(function(result) {

  console.log(result); // 4

});
