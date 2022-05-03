// // Factory Function
// // Javascript classes

// function pizzaFactory(pizzaSize){
//     const crust = "original";
//     const size =  pizzaSize;
//     return  {
//         bake: ()  => console.log(
//             `Baking a ${size} ${crust} crust pizza.`)
//     };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();
class Pizza{
    crust = "original";
    #sauce = "traditional" ;
    #size;
    constructor(pizzaSize){
       // this.size = pizzaSize;
        this.#size = pizzaSize;
    }
    getCrust(){
        return this.crust;
    }
    setCrust (pizzaCrust){
        this.crust = pizzaCrust;
    }
    iLoveThis(){
        console.log(
            `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
}
const myPizza = new Pizza ("large");
myPizza.iLoveThis();

// you can not access private properties outside the enclosing class
//console.log(myPizza.#sauce);

// you can access public properties outside the enclosing class
console.log(myPizza.getCrust());