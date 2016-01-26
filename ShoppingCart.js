var basketItems = require('./BasketItems');

var shoppingCart = {
  itemCount: 0,
  addItem: function(quantity){
    this.itemCount += quantity
  }
}

module.exports = shoppingCart;