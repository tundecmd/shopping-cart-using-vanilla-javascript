var obj = {};
var name = "Joe";
obj.age = 33;
obj.doSomething = function (thing, count){
  
};

var WD_shoppingCart = {};
WD_shoppingCart.cart = [];
WD_shoppingCart.Item = function() {};
WD_shoppingCart.addItemToCart = function(){};



class ShoppingCart {
  constructor() {
    this.addItemToCart = addItemToCart(),
    this.removeItemFromCart = removeItemFromCart(),
    this.removeItemFromCartAll = removeItemFromCartAll(),
    this.clearCart = clearCart,
    this.countCart = countCart,
    this.totalCart = totalCart,
    this.listCart = listCart,
    this.saveCart = saveCart,
    this.loadCart = loadCart
  }
}
// Display Cart












//******************
// JQUERY
$(".add-to-cart").click(function (event) {
    event.preventDefault();
    var name = $(this).attr("data-name");
    var price = Number($(this).attr("data-price"));

    addItemToCart(name, price, 1)
    displayCart();
});

$("#clear-cart").click(function(event){
  clearCart();
  displayCart();
})

function displayCart() {
  var cartArray = listCart();
  console.log('from displayCart',cartArray);
  var output = "";
  for (var i in cartArray) {
                      output += "<li>" 
                                + cartArray[i].name 
                                + " " + cartArray[i].count 
                                + " x "+ cartArray[i].price 
                                + " = " + cartArray[i].total
                                + " <button class = 'plus-item' data-name='"+cartArray[i].name+"'>+</button> " 
                                + " <button class = 'subtract-item' data-name='"+cartArray[i].name+"'>-</button> "
                                + " <button class = 'delete-item' data-name='"+cartArray[i].name+"'>X</button> "
                                + "</li>"
  }
  $("#show-cart").html(output);
  $("#total-cart").html(totalCart());
}
$("#show-cart").on("click",".delete-item", function(event) {
  
        var name = $(this).attr("data-name");
        removeItemFromCartAll(name);
        displayCart();
});
$("#show-cart").on("click",".subtract-item", function(event) {
        var name = $(this).attr("data-name");
        removeItemFromCart(name);
        displayCart();
})
$("#show-cart").on("click",".plus-item", function(event) {
        var name = $(this).attr("data-name");
        addItemToCart(name, 0, 1);
        displayCart();
})




//general structure

//var cart = [{name: 'Brush', price: '1.99', count: '1'}, {name, price, count},{name, price, count}];
// name, price, count




// FACTORY FUNCTIONS AND CONSTRUCTOR FUNCTIONS(OR CLASSES) ARE ALTERNATIVES ALTHOUGH CONSTRUCTORS( OR CLASSES) ARE NEWER STANDARD AND ARE THUS RECOMMENDED. FACTORY FUNCTIONS ARE USED IN THIS EXAMPLE JUST FOR DEMONSTRATION PURPOSE 

// FACTORY FUNCTION
/*
var Item = function (name, price, count) {
  this.name = name,
  this.price = price,
  this.count = count
}
*/



// LIST OF CART FUNCTIONS

var shoppingCart = {};
shoppingCart.cart = [];
// CONSTRUCTOR FUNCTION
shoppingCart.Item = class Item {
  constructor (name, price, count) {
    this.name = name,
    this.price = price,
    this.count = count
  }
}
// ADDING addItemToCart() FUNCTION
shoppingCart.addItemToCart = function(name, price, count) {
  for (var i in cart) {
    if ( cart[i].name === name ) {
        cart[i].count += count;
        saveCart();
        return;
    }
  }
  var item = new Item(name, price, count)
  cart.push(item);
  saveCart();
}
// REMOVING ITEM FROM CART ONE AT A TIME
shoppingCart.removeItemFromCart = function(name) {
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
shoppingCart.removeItemFromCartAll = function (name) {
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
shoppingCart.clearCart = function() {
  // clears all the items from the cart
    cart = [];  
    saveCart();
  }
  // COUNTING THE TOTAL ITEMS IN THE CART
shoppingCart.countCart = function() {
  //returns total count
  totalCount = 0;
  for (var i in cart) {
    totalCount += cart[i].count;
  }
  return totalCount;
}
// GETTING THE LIST OF THE ITEMS
shoppingCart.listCart = function() {
  //listCart() -- return array of items
 var cartCopy = [];
  for (var i in cart) {
    var item = cart[i];
    var itemCopy = {};
      for (var p in item) {
        itemCopy[p] = item[p];
      }
      itemCopy.total = (item.price * item.count).toFixed(2);
    cartCopy.push(itemCopy);
  }
  return cartCopy 
  //return cart.slice(); -- changes made to this will affect the original cart
}
// GETTING THE TOTAL COST
shoppingCart.totalCart = function() {
  // returns total cost
  var totalCost = 0;
  for (var i in cart) {
    totalCost += cart[i].price * cart[i].count;
  }
  return totalCost.toFixed(2);
}

// SAVING TO THE LOCAL STORAGE
shoppingCart
.saveCart = function() {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

// LOADING FROM THE LOCAL STORAGE
shoppingCart.loadCart = function() {
  cart = JSON.parse(localStorage.getItem("shoppingCart"));
  //console.log(cart);
}

// cart : Array
// Item : Object/ class

// addItemToCart : function
// removeItemFromCart : function
// removeItemFromCartAll: function
// clearCart: function
// countCart: function
// totalCart: function
// listCart: function
// saveCart:function
// loadCart: function

















shoppingCart.loadCart();
shoppingCart.displayCart()
console.log('---------');
var array = shoppingCart.listCart();




console.log('array',array);