describe("pizzaPrice", function() {
  it("will create a new pizza based on the following properties", function(){
    var testPrice = new PizzaPrice('small', 'pepperoni');
    expect(testPrice.crust).to.equal('small');
    expect(testPrice.topping).to.equal('pepperoni');
  }); //(7:40 AM) THIS AUTOMATICALLY WORKS IF function PizzaPrice IS BUILT BECAUSE GENERAL VARIABLES WERE FED INTO PizzaPrice FUNCTION...
  //(8:39 AM) WHICH IS WHAT IT WAS SUPPOSED TO DO...

  it('will change the price based on the crust size', function(){
    var testPrice = new PizzaPrice("lg");
    expect(testPrice.crustPrice()).to.equal(7)

  });

  it('will change the price based on the number of toppings added', function() {
    var testTopping = new PizzaPrice('lg', 'mushrooms');
    expect(testTopping.toppingPrice()).to.equal(6);
  });


  // it('will add one dollar for every topping added', function() {
  //   var testPrice = new PizzaPrice(6)
  //     expect(test.PizzaPrice.price).to.equal(6)
  //   });



}); //END OF DESCRIBE SPEC
