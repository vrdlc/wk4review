describe("pizzaPrice", function() {
  it("will change the price of a pizza based on the following properties", function(){
    var testPrice = new PizzaPrice('small', 'pepperoni');
    expect(testPrice.crust).to.equal('small');
    expect(testPrice.topping).to.equal('pepperoni');
  });
});
