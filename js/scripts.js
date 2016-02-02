function PizzaPrice(crust, topping) {
  this.crust = crust;
  this.topping = topping;
}

PizzaPrice.prototype.crustPrice = function(crust) { //MAY BE OBSOLETE
  var crustPrice = 5;
  debugger;
  console.log(this.crust);
  if (this.crust === 'sm') {
  crustPrice += 0;
  } if (this.crust === 'med') {
    crustPrice += 1;
  } if (this.crust === 'lg') {
    crustPrice += 2;
  } if (this.crust === 'xl') {
    crustPrice += 3;

  } return crustPrice;
};


PizzaPrice.prototype.toppingPrice = function(topping1) { //MAY BE OBSOLETE
  var toppingPrice = 5;
  if (this.topping === 'pepperoni') {
    toppingPrice += 1;
  } if (this.topping === 'mushrooms') {
    toppingPrice += 1;
  } return toppingPrice;
};

PizzaPrice.prototype.finalPrice = function() { //THIS WORKS FOR EVERYTHING BUT MIGHT STILL NEED TO USE CRUSTPRICE AND TOPPINGPRICE TO ADD VALUES TOGETHER?
  var basePrice = 5;
  debugger;
  console.log(this.crust);

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
    finalPizza.crustPrice();
    finalPizza.toppingPrice();
    $(".total").show();
    $("#your-order").show();
    $(".pizza-price").text(parseInt(finalPizza.crustPrice + finalPizza.toppingPrice));

    $("#order-items").append("<li>" + finalPizza.crustPrice() + " pizza with " + finalPizza.toppingPrice() + "</li>");
  });
});







// BEGINNING OF SCRIPTS THAT WORK WITHOUT CONSTRUCTOR USE?
// function PizzaPrice(crust, topping) {
//   this.crust = crust;
//   this.topping = topping;
// }
//
// PizzaPrice.prototype.crustPrice = function() { //MAY BE OBSOLETE
//   var crustPrice = 5;
//
//   if (this.crust === 'small') {
//   crustPrice += 0;
//   } if (this.crust === 'med') {
//     crustPrice += 1;
//   } if (this.crust === 'lg') {
//     crustPrice += 2;
//   } if (this.crust === 'xl') {
//     crustPrice += 3;
//
//   } return crustPrice;
// };
//
//
// PizzaPrice.prototype.toppingPrice = function() { //MAY BE OBSOLETE
//   var toppingPrice = 5;
//   if (this.topping === 'pepperoni') {
//     toppingPrice += 1;
//   } if (this.topping === 'mushrooms') {
//     toppingPrice += 1;
//   } return toppingPrice;
// };
//
// PizzaPrice.prototype.finalPrice = function() { //THIS WORKS FOR EVERYTHING BUT MIGHT STILL NEED TO USE CRUSTPRICE AND TOPPINGPRICE TO ADD VALUES TOGETHER?
//   var basePrice = 5;
//
//   if (this.crust === 'small') {
//   basePrice += 0;
//   } if (this.crust === 'med') {
//     basePrice += 1;
//   } if (this.crust === 'lg') {
//     basePrice += 2;
//   } if (this.crust === 'xl') {
//     basePrice += 3;
//
//   } if (this.topping === 'pepperoni') {
//     basePrice += 1;
//   } if (this.topping === 'mushrooms') {
//     basePrice += 1;
//   } if (this.topping === 'peppers') {
//     basePrice += 1;
//   } if (this.topping === 'extracheese') {
//     basePrice += 1;
//
//   } return basePrice;
//
// }
//
// $(document).ready(function(){
//   $("form#pizza-maker").submit(function(event) {
//     event.preventDefault();
//
//     var inputTopping1 = parseInt($("select#topping1").val());
//     var inputCrust = parseInt($("select#crust").val());
//
//     var finalPrice = new PizzaPrice(inputTopping1, inputCrust)
//     $(".total").show();
//     $("#your-order").show();
//     $(".pizza-price").text(inputTopping1 + inputCrust);
//
//     $("#order-items").append("<li>" + finalPrice.crustPrice() + " pizza with " + finalPrice.toppingPrice() + "</li>");
//   });
// }); END OF WORKING SCRIPT











 // + " and " + " - $" + finalPrice.price()




//   $('#crust').click(function(){
//
//   });
//
//   $('#topping1').click(function(){
//
//   });
//     $("#crust, #topping1").change(function(){
//
//         finalPrice = parseInt($("#crust").val()) + parseInt($("#topping1").val());
//
//     $("#submitbutton").click(function(event){
//
//       $("#finalPrice").text("Your total is: $" + finalPrice + ".00")
//       $(".finalPrice").append(finalPrice)
//     });
//
//
//
// });
// });
// $(document).ready(function(){
//   var pizza = new PizzaPrice();
//   $('.crust').click(function() {
//     var this.crustSize = $(this).val();
//     pizza.crustPrice(crustSize)
// //     alert(crustSize);
// //
// //
// //
// //     // pizza.crustPrice(crustPrice);
// //     // alert(crustPrice);
//     });
// //
//   $('.topping1').click(function(){
//     var toppingCost = $(this).val();
//     pizza.toppingPrice(toppingCost);
// //     alert(toppingCost)
//   });
// //
// //   $("#submitbutton").click(function(crustPrice, toppingPrice) {
// //     // var crustPrice = "1"
// //     // var toppingPrice = "1"
// //
//     // var finalPrice = crustPrice + toppingPrice;
//     // $("#finalPrice").text("Your total is: $" + finalPrice + ".00")
//     // $(".finalPrice").append(pizza.finalPrice)
//
//
//   $("#crust, #topping1").change(function(){
//
//       finalPrice = parseInt($("#crust").val()) + parseInt($("#topping1").val());
//
//   $("#submitbutton").click(function(event){
//     $("#finalPrice").text("Your total is: $" + finalPrice + ".00")
//     $(".finalPrice").append(finalPrice)
//   });
//
// });
//
// });
