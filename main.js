//general structure

//var cart = [{name: 'Brush', price: '1.99', count: '1'}, {name, price, count},{name, price, count}];
// name, price, count


var cart = [];

// FACTORY FUNCTIONS AND CONSTRUCTOR FUNCTIONS(OR CLASSES) ARE ALTERNATIVES ALTHOUGH CONSTRUCTORS( OR CLASSES) ARE NEWER STANDARD AND ARE THUS RECOMMENDED. FACTORY FUNCTIONS ARE USED IN THIS EXAMPLE JUST FOR DEMONSTRATION PURPOSE 

// FACTORY FUNCTION
var Item = function (name, price, count) {
  this.name = name,
  this.price = price,
  this.count = count
}

// CONSTRUCTOR FUNCTION
class Itemmm {
  constructor (name, price, count) {
    this.name = name,
    this.price = price,
    this.count = count
  }
}


//var a = new Item('Brush', 1.99, 1 )


var aaa = new Itemmm('Brushhh', 1.99, 1 )
//console.log(aaa);

cart.push(new Itemmm('Apple', 5.99, 2 ));
cart.push(aaa);

console.log(cart);
