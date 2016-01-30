function PizzaPrice(crust, topping, basePrice) {
  this.crust = crust;
  this.topping = topping;
  this.basePrice = basePrice;
}

PizzaPrice.prototype.crustPrice = function() {
  var basePrice = 5;

  if (this.crust === 'Small') {
  basePrice += 0;
} if (this.crust === 'Medium') {
    basePrice += 1;
  } if (this.crust === 'Large') {
    basePrice += 2;
  } if (this.crust === 'X-Large') {
    basePrice += 3;

  } return basePrice;
};


PizzaPrice.prototype.toppingPrice = function() {
  var basePrice = 5;
  if (this.topping === 'Pepperoni') {
    basePrice += 1;
  } if (this.topping === 'Mushrooms') {
    basePrice += 1;
  } return basePrice;
};

PizzaPrice.prototype.finalPrice = function() {
  var basePrice = 5;


  if (this.crust === 'Small' && this.topping === 'Pepperoni'){
    basePrice +=1
  } else if(this.crust === 'Medium' && this.topping === 'Pepperoni'){
    basePrice +=2;
  } else if (this.crust === 'Large' && this.topping === 'Pepperoni'){
    basePrice +=3;
  } else (this.crust === 'X-Large' && this.topping === 'Pepperoni')
    basePrice +=4;



       return basePrice;

    }


  // if (this.crust === 'small') {
  // basePrice += 0;
  // } if (this.crust === 'med') {
  //   basePrice += 1;
  // } if (this.crust === 'lg') {
  //   basePrice += 2;
  // } if (this.crust === 'xl') {
  //   basePrice += 3;
  //
  // } if (this.topping === 'pepperoni') {
  //   basePrice += 1;
  // } if (this.topping === 'mushrooms') {
  //   basePrice += 1;
  // } if (this.topping === 'peppers') {
  //   basePrice += 1;
  // } if (this.topping === 'extracheese') {
  //   basePrice += 1;


$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    var inputtedCrust = $("select#crust").val();
    var inputtedTopping = $("select#topping1").val();
    var pizza = new PizzaPrice(inputtedCrust, inputtedTopping);

    if(inputtedCrust === "" || inputtedTopping == "") {
      alert("Sorry! You didn't make all your selections.")

    } else {
      $(".pizzaSize").text(inputtedCrust)
      $(".pizzaTopping").text(inputtedTopping)
      $(".finalPrice").text(pizza.finalPrice)

    }

  });




  });






//
//
// $(document).ready(function(){
//   $("#crust, #topping1").change(function(){
//
//       concatenated_string = parseInt($("#crust").val() + parseInt($("#topping1")).val());
//
//   $("#submitbutton").click(function(event){
//     $("#finalPrice").text(concatenated_string)
//     // $(".finalPrice").append(finalPrice)
//   });
// });
//
//
// });
