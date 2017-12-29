function printName(name) {
  return new Promise(function(resolve, reject) {
     if (name != undefined) {
        resolve(name); 
     } else {
        reject(name); 
     }
  })
}

printName('Robert Zacher').then(console.log, console.error); 
