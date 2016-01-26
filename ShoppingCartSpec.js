var shoppingCart = require('./ShoppingCart');
var basketItems = require('./BasketItems');
var discount = require('./Discounts');
var assert = require('assert');

describe('basketItems', function(){
  it('should have an item price', function(){
    assert.equal(1.00, basketItems.price);
  });
});