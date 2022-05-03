//Numbers
// An integer is a whole number
const myNumber = 55;

// A number with a decimal point is a float which
// references the "floatting point"
const myFloat = 55.01234;

const myString = "50.23abcd";

console.log(myNumber);
console.log(myFloat);
console.log(myString);

console.log(myFloat === myNumber);
console.log(myString === myNumber);
//Change a string type to a number type

console.log(Number(myString) + 32);

console.log(Number('vince'));
//Boolen 
console.log(Number(true));
console.log(Number(false));

// number methods
// The  Number.Integer()
// The Number.parseFloat()
// The toFixed()

console.log(Number.parseFloat(myString).toFixed(2));
console.log(myFloat.toFixed(2));
console.log(Number.parseInt(myFloat));

//Chaining = using several methods chained togeher

console.log(Number.parseFloat('4.457abc').toFixed(2).toString());

//NaN an acronoym of not a number
// The Number.isNaN() method determines whether the passed value is NaN and its type is a number
// The global isNaN() function deternines whether a valid is NaN or not.

console.log (isNaN('vince'));