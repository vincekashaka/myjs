//var, let, const
// // Global
// var x = 1;
// let y = 1;
// //const z = 5;



// // local scope
// function myFunction(){
//     const z = 10;
//     console.log(y);
//      //Local scope
//     {
//         let y = 4;  
//         console.log(y);
//     }
// }
// myFunction();

var x = 1; //global scope
let y = 2; // block scope
const z = 3;

console.log(`glabal: ${x}`);
console.log(`glabal: ${y}`);
console.log(`glabal: ${z}`);

function myFunction(){
    var x = 10;
    const z = 5;
     
    {
        var x = 12; //function scope
        const z = 7; //block scoped
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }  
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}
myFunction();