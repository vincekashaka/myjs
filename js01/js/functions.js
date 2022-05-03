//Function
// function sum(num1,num2){
//     console.log(num1);
//     console.log(num2);
//     if (num2 == undefined) {
//         return num1 + num1
//     }
//     return num1 + num2;
// }
// let mySum = sum(5, 6);
// console.log(sum(20, 17));

// function getUserNameFromEmail(email){
//     return email.slice(0, email.indexOf('@'));

// }
// console.log(getUserNameFromEmail("player@somoEmail.com"));

// Unonymous fuction

// const getUserNameFromEmail = function(email){
//     return email.slice(0, email.indexOf('@'));
// }
// console.log(getUserNameFromEmail("vince@somoEmail.com"));


//Arrow function
// const getUserNameFromEmail = (email) => {
//     return email.slice(0, email.indexOf('@'));
// }
// console.log(getUserNameFromEmail("vador@somoEmail.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();   
};
console.log(toProperCase("viNCenT"));