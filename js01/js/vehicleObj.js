//Object

const vehicle = {
    wheels: 4,
    engine: function (){
        return "Vrooom";
    }
};
// const truck = Object.create(vehicle);
// truck.doors = 2;
// console.log(truck);
// console.log(truck.wheels);
// console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function (){
    return " whooooosh!";
};
console.log(car.engine());

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function() {
    return "Shhhhhhhh";
};
console.log(tesla.engine());