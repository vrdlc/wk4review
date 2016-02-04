function PizzaPrice(crust, topping) {
  this.crust = crust;
  this.topping = topping;
  this.price = 5;
}


PizzaPrice.prototype.finalPrice = function(PizzaPrice) {
  var basePrice = this.price;

  if (this.crust === 'sm') {
    basePrice += 0;
  } if (this.crust === 'med') {
    basePrice += 1;
  } if (this.crust === 'lg') {
    basePrice += 2;
  } if (this.crust === 'xl') {
    basePrice += 3;

  } if (this.topping === 'pep') {
    basePrice += 1;
  } if (this.topping === 'mush') {
    basePrice += 1;
  } if (this.topping === 'bell') {
    basePrice += 1;
  } if (this.topping === 'ch') {
    basePrice += 1;

  } return basePrice;

}


$(document).ready(function(){

  $("form#pizza-maker").submit(function(event) {
    event.preventDefault();
    var inputCrust = $("select#crust").val();
    var inputTopping1 = $("select#topping1").val();
    var finalPizza = new PizzaPrice(inputCrust, inputTopping1)
    var finalPrice = finalPizza.finalPrice();


    $(".total").show();
    $(".finalPizza").append(finalPrice);
    $("#orderbutton").hide()


  });

});
