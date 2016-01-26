var basketItems = require('./BasketItems');

var shoppingCart = {
  itemCount: 0,
  total: 0,
  addItem: function(quantity){
    this.itemCount += quantity;
    this.total += (basketItems.price);
  }
}

module.exports = shoppingCart;