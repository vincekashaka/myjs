//Array
const myArray = ['A','B','C','D','E','F'];

const newString = myArray.join( );
const newArray = newString.split(",");
console.log(newArray); 

//Array.slice

const arr = [0, 1, 2, 3, 4, 5, 6];

const slice1 =  arr.slice(3);
console.log(slice1);
console.log(arr);

const slice2 =  arr.slice(2, 5);
console.log(slice2);

// Array.shift() //shift removes the first element in an array

const item = arr.shift();
console.log(arr);
console.log(item);

//Arrsy.reverse()... the fiirst element becomes the last element

const arrReversed = arr.reverse();
console.log(arrReversed);

//Array.reduceRight()

const array1 = [[0, 1], [2, 3], [4, 5]];
const newArray1 = array1.reduceRight((acc, cur) => acc.concat(cur));
console.log(newArray1);
console.log(array1);

//Array .reduce()...goes through element by element perfoming the defined action with the previous and current valeus,

const numbers = [1, 2, 3, 4, 5, 6];
const sum = numbers.reduce((pre, cur) => {
    return pre + cur;
});
console.log(sum);

const product = numbers.reduce((pre, cur) => {
    return pre*cur;
});
console.log(product);

//Array.of()..creates a new array from the arguments passed to it
// regadless of the quantity or type of them.

console.log(Array.of(2, 'Hello', true));

//Array.groupByToMap


