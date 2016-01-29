function PizzaPrice(crust, topping, basePrice) {
  this.crust = crust;
  this.topping = topping;
  this.basePrice = basePrice;
}

PizzaPrice.prototype.crustPrice = function() {
  var basePrice = 5;

  if (this.crust === 'small') {
  basePrice += 0;
  } if (this.crust === 'med') {
    basePrice += 1;
  } if (this.crust === 'lg') {
    basePrice += 2;
  } if (this.crust === 'xl') {
    basePrice += 3;

  } return basePrice;
};


PizzaPrice.prototype.toppingPrice = function() {
  var basePrice = 5;
  if (this.topping === 'pepperoni') {
    basePrice += 1;
  } if (this.topping === 'mushrooms') {
    basePrice += 1;
  } return basePrice;
};
// PizzaPrice.prototype.price = function() {
//   var basePrice = 4;
//   var crust = 1;
//   var topping = 1;
//}



// PizzaPrice.prototype.crust = function() {
//   var small = this.baseprice;
//   var med = this.baseprice +=2;
//   var lg = this.baseprice += 4;
//
// }


// PizzaPrice.prototype.finalPizza = function() {
//   return this.crust +
// }

// PizzaPrice.prototype.topping = function() {
//   var toppingPrice = this.topping;
//   if(toppingPrice = 1) {
//     return this.basePrice ++;
//   }
// }







// PizzaPrice.prototye.crust = function(){
//   if(this.crust === 'x'); {
//   return this.basePrice;
//   }
//    if(this.crust === 'medium'); {
//     return this.basePrice += 2;
//   }
//    if(this.crust === 'large'); {
//     return this.basePrice += 3;
//   }
// }
//
// PizzaPrice.prototype.topping = function() {
//   if(this.topping = 1);
//   return basePrice += 1;
//
// }
