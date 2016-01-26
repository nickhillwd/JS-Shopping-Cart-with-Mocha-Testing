var basketItems = require('./BasketItems');

var shoppingCart = {
  itemCount: 0,
  total: 0,
  addItem: function(quantity){
    this.itemCount += quantity;
    this.total += (basketItems.price);
  },
  empty: function(){
    this.total = 0;
  }
}

module.exports = shoppingCart;