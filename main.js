//general structure

//var cart = [{name: 'Brush', price: '1.99', count: '1'}, {name, price, count},{name, price, count}];
// name, price, count


var cart = [];

// FACTORY FUNCTIONS AND CONSTRUCTOR FUNCTIONS(OR CLASSES) ARE ALTERNATIVES ALTHOUGH CONSTRUCTORS( OR CLASSES) ARE NEWER STANDARD AND ARE THUS RECOMMENDED. FACTORY FUNCTIONS ARE USED IN THIS EXAMPLE JUST FOR DEMONSTRATION PURPOSE 

// FACTORY FUNCTION
/*
var Item = function (name, price, count) {
  this.name = name,
  this.price = price,
  this.count = count
}
*/
// CONSTRUCTOR FUNCTION
class Itemmm {
  constructor (name, price, count) {
    this.name = name,
    this.price = price,
    this.count = count
  }
}

// LIST OF CART FUNCTIONS

//addItemToCart(name, price, count)
//removeItemFromCart(name) -- removes one item
//removeItemFromCartAll(name) -- removes all of item-name
//clearCart() -- removes all the items from the cart
//countCart() -- returns total count
// totalCart() -- returns total cost
//listCart() -- array of items
