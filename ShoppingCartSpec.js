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
  it('should add items to shopping cart', function(){
    shoppingCart.addItem(1)
    assert.equal(1, shoppingCart.itemCount)
  });
})