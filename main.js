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
  saveCart();
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
  saveCart();
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
  saveCart();
}

// CLEARING ALL ITEMS FROM THE CART
function clearCart() {
// clears all the items from the cart
  cart = [];  
  saveCart();
}

// COUNTING THE TOTAL ITEMS IN THE CART
function countCart() {
  //returns total count
  totalCount = 0;
  for (var i in cart) {
    totalCount += cart[i].count;
  }
  return totalCount;
}


// GETTING THE TOTAL COST
function totalCart() {
  // returns total cost
  var totalCost = 0;
  for (var i in cart) {
    totalCost += cart[i].price * cart[i].count;
  }
  return totalCost;
}

// GETTING THE LIST OF THE ITEMS
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
  return cartCopy 
  //return cart.slice(); -- changes made to this will affect the original cart
}

// SAVING TO THE LOCAL STORAGE
function saveCart() {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

// LOADING FROM THE LOCAL STORAGE
function loadCart() {
  cart = JSON.parse(localStorage.getItem("shoppingCart"));
  //console.log(cart);
}

loadCart();

var array = listCart();
console.log('array',array);