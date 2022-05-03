// Javascript classes
class Pizza{
    crust = "original";
    #sauce = "traditonal";
    #size;
    constructor(pizzaSize){
       // this.size = pizzaSize;
        this.#size = pizzaSize;
        //this.toppings = [];
    }
    getCrust(){
        return this.crust;
    }
    setCrust (pizzaCrust){
        this.crust = pizzaCrust;
    }
    //getToppings(){
    //     return this.toppings;
    // }
    //setToppings(topping){
    //     this.toppings.push(topping); 
    // }
    // bake(){
    //     console.log(
    //          `Baking a ${this.size}   ${this.type}
    //     ${this.crust} crust pizza`);
    // }
    iLoveThis() {
        console.log(`Here's your ${this.crust} ${this.#sauce}
        sauce ${this.#size} pizza`);
    }
}
const myPizza = new Pizza('large');
myPizza.iLoveThis();
console.log(myPizza.getCrust());

// const myPizza = new Pizza("pepperoni", "small");
// myPizza.setCrust('thin');
// myPizza.bake();
// myPizza.setToppings("sausage");
// myPizza.setToppings("olives");
// console.log(myPizza.getToppings());
 
// class SpecialtyPizza extends Pizza {
//     constructor (pizzaSize){
//         super(pizzaSize);
//         this.type = 'Mashroom';
//     }
//     slice(){
//         console.log (`Our ${this.type} ${this.size} pizza has 8 slices`);
//     }
// }const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice();
