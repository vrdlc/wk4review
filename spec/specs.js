describe("pizzaPrice", function() {
  it("will create a new pizza based on the following properties", function(){
    var testPrice = new PizzaPrice('small', 'pepperoni');
    expect(testPrice.crust).to.equal('small');
    expect(testPrice.topping).to.equal('pepperoni');
  }); //THIS AUTOMATICALLY WORKS IF function PizzaPrice IS BUILT

  it('will add one dollar for every topping added', function() {
    var testPrice = new PizzaPrice(6)
      expect(test.PizzaPrice.price).to.equal(6)
    });


}); //END OF DESCRIBE SPEC
