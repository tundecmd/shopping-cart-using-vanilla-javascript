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


function listCart() {
  //listCart() -- return array of items
  var cartCopy = [];
  for (var i in cart) {
    var item = cart[i];
    var itemCopy = {};
      for (var p in itemCopy) {
        itemCopy[p] = item[p];
      }
    cartCopy.push(itemCopy);
  }
  //return cartCopy
  return cart.slice();
}

// ****************
var array = listCart();
array[0].name = 'Mistake';
console.log(array)


/* Reference types in javascript
// some notes here
var a = ['A','B','C'];
var b = a
b.push('D')
console.log('a',a); 
console.log('b',b);


var a = ['A','B','C'];
var b = a.slice()
b.push('D')
console.log('a',a); 
console.log('b',b);

var a = { age: 22, name: 'joe'};
var b = a;
b.name = 'cindy';
console.log('a ', a);
console.log('b ', b)

*/

// saveCart()
// loadCart()