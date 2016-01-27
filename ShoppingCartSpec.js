var shoppingCart = require('./ShoppingCart');
var basketItems = require('./BasketItems');
var discount = require('./Discounts');
var assert = require('assert');

describe('Basket Items', function(){
  it('should have an item price', function(){
    assert.equal(2.00, basketItems.price);
  });
});

describe('Shopping Cart', function(){
  it('should start at 0 item count', function(){
    assert.equal(0, shoppingCart.itemCount)
  });
  it('should start with a total price of 0', function(){
    assert.equal(0, shoppingCart.total);
  });
  it('should add items to shopping cart', function(){
    shoppingCart.addItem(1)
    assert.equal(1, shoppingCart.itemCount);
  });
  it('should keep a track of the total cost', function(){
    assert.equal(2.00, shoppingCart.total);
  });
  it('should empty shopping cart', function(){
    shoppingCart.empty();
    assert.equal(0, shoppingCart.total)
  });
  it('should calculate and apply 10% discount to total when total over £20', function(){
    // shoppingCart.empty();
    shoppingCart.addItem(20);
    shoppingCart.discount(10);
    assert.equal(36.00, shoppingCart.total)
  });
  it('should deduct the buy one get one free items', function(){
    shoppingCart.empty();
    shoppingCart.addItem(5);
    assert.equal(6.00, shoppingCart.total);
  });
  it('should deduct 5% off the tatal', function(){
    shoppingCart.empty();
    shoppingCart.addItem(1);
    shoppingCart.discountCard;
    assert.equal(1.90, shoppingCart.total)
  });
})




















