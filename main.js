// scope determines where you can see your value or variable witnin your program.

var global = 10;

function myFunction() {
  var global = 'Hello from main.js';
  console.log('global: ',global);
}

myFunction()


console.log('global: ',global);
