var basketItems = require('./BasketItems');

var shoppingCart = {
  itemCount: 0,
  total: 0,
  addItem: function(quantity){
    this.itemCount += quantity;
    this.total += ((basketItems.price)*quantity);
  },
  empty: function(){
    this.total = 0;
  },
  discount: function(percentage){
    percentageValue = ((100-percentage)/100);
    this.total = this.total*percentageValue;
    return this.total
  },
  buyOneGetOneFree: function(){
    isEven = this.itemCount % 2;
    bogofItems = ((this.itemCount - isEven)/2);
    total = (this.total - (basketItems.price * bogofItems));
  },
  discountCard: function(){
    shoppingCart.discount(5);
  }
}

module.exports = shoppingCart;