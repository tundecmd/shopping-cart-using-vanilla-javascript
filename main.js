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


// ADDING addItemToCart() FUNCTION
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





// REMOVING ITEM FROM CART ONE AT A TIME
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

// REMOVING ALL ITEM OF A PARTICULAR NAME FROM THE CART 
function removeItemFromCartAll(name) {
// -- removes all of item-name
  for (var i in cart) {
    if (cart[i].name === name) {
      cart.splice(i, 1);
      return;
    }
  }
}

addItemToCart('Apple', 1, 1);
addItemToCart('Pear', 1, 1)
addItemToCart('Apple', 1, 1);
addItemToCart('Apple', 1, 3);
addItemToCart('Pear', 1, 1)
addItemToCart('Banana', 5, 1);
addItemToCart('car', 3, 3);
addItemToCart('Plush Toy', 5, 1)
addItemToCart('Apple', 1, 1);
addItemToCart('sticky notes', 5, 1);

console.log(cart.length);
console.log(cart);

removeItemFromCartAll('car')

console.log(cart.length);
console.log(cart);


// CLEARING ALL ITEMS FROM THE CART
function clearCart() {
// clears all the items from the cart
  cart = [];  
}

//clearCart();

console.log(cart.length);
console.log(cart);


// COUNTING THE TOTAL ITEMS IN THE CART
function countCart() {
  //returns total count
  totalCount = 0;
  for (var i in cart) {
    totalCount += cart[i].count;
  }
  return totalCount;
}

console.log(countCart());

// GETTING THE TOTAL COST
function totalCart() {
  // returns total cost
  var totalCost = 0;
  for (var i in cart) {
    totalCost += cart[i].price * cart[i].count;
  }
  return totalCost;
}

console.log(countCart());
console.log(totalCart());

// totalCart() -- returns total cost
//listCart() -- array of items
