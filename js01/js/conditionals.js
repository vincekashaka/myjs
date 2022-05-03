//Conditionals: If Statements

// const myName = "Vincent";
// let customerIsBanned = false;
// let soup = "Chicken noodle soup";
// let crackers = true;
// let reply;
// if (customerIsBanned){
//     reply = `No soup for you ${myName}`;
// }else if (soup && crackers) {
//     reply = `Here's your order of ${soup} && crackers ${myName}`;
// }else {
//     reply = `Sorry, were are out of ${soup} ${myName}`;
// }
// console.log(reply);

let testScore = 40;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
    grade = "A+";
} else if (testScore >= 80) {
    grade = "A";
}else if (testScore >= 70) {
    grade = "B";
}else if (testScore >= 50) {
    grade = "C";
}else {
    // Nested if statement
    if(collegeStudent){
        grade = "U";
    }else {
        grade = "F";
    }
}
console.log(grade);
 