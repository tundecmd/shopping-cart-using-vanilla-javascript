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
class Item {
  constructor (name, price, count) {
    this.name = name,
    this.price = price,
    this.count = count
  }
}

// LIST OF CART FUNCTIONS

function addItemToCart(name, price, count) {
  for (var i in cart) {
    if ( cart[i].name === name ) {
        cart[i].count += count;
        return;
    }
  }
  var item = new Item(name, price, count)
  cart.push(item);
}
addItemToCart('Apple', 1.22, 1);
addItemToCart('Pear', 1.72, 3)
addItemToCart('Apple', 1.22, 1);
addItemToCart('Apple', 1.22, 3);
console.log(cart);





function removeItemFromCart(name) {
  //removes one item of a particular name
  for (var i in cart) {
    if (cart[i].name === name) {
      cart[i].count --; // cart[i].count = cart[i].count - 1 which can be shortened to cart[i].count -= 1
      if (cart[i].count === 0) {
        cart.splice(i, 1);
      }
      return;
    }
  }
} 
//console.log(cart);
console.log(cart[0].count);
removeItemFromCart('Apple')
removeItemFromCart('Apple')
removeItemFromCart('Apple')
removeItemFromCart('Apple')
removeItemFromCart('Apple')
removeItemFromCart('Apple')
console.log(cart);




//removeItemFromCartAll(name) -- removes all of item-name
//clearCart() -- removes all the items from the cart
//countCart() -- returns total count
// totalCart() -- returns total cost
//listCart() -- array of items
