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

PizzaPrice.prototype.finalPrice = function() {
  var basePrice = 5;

  if (this.crust === 'small') {
  basePrice += 0;
  } if (this.crust === 'med') {
    basePrice += 1;
  } if (this.crust === 'lg') {
    basePrice += 2;
  } if (this.crust === 'xl') {
    basePrice += 3;

  } if (this.topping === 'pepperoni') {
    basePrice += 1;
  } if (this.topping === 'mushrooms') {
    basePrice += 1;
  } if (this.topping === 'peppers') {
    basePrice += 1;
  } if (this.topping === 'extracheese') {
    basePrice += 1;

  } return basePrice;

}


$(document).ready(function(){
  $("#crust, #topping1").change(function(){

      concatenated_string = parseInt($("#crust").val()) + parseInt($("#topping1").val());

  $("#submitbutton").click(function(event){
    $("#finalPrice").text(concatenated_string)
    // $(".finalPrice").append(finalPrice)
  });
});


});
