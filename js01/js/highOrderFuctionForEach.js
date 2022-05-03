/*Higher Order functions
A higher order fuction is a functio that
does at least one of the following:
** Takes one or more functions as an argument (parameter)
** Returns a function as a result
*/

const companies = [
    {name: "company One", category: "Finance", start: 1981, end:2003},
    {name: "company Two", category: "Retail", start: 1992, end:2008},
    {name: "company Three", category: "Auto", start: 1999, end:2007},
    {name: "company Four", category: "Retail", start: 1989, end:2010},
    {name: "company Five", category: "Technology", start: 2009, end:2014},
    {name: "company Six", category: "Finance", start: 1987, end:2010},
    {name: "company Seven", category: "Auto", start: 1986, end:1996},
    {name: "company Eight", category: "Technology", start: 2011, end:2016},
    {name: "company Nine", category: "Retail", start: 1981, end:1989},
];

const ages  = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// //forLoop
// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }
// for loop .. ages 21 and above
// let canDrink = [];
// for(let i = 0; i < ages.length; i++ ){
//     if(ages[i]>= 21){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);
let total = 0;
for(let i = 0; i < ages.length; i ++) {
    total += ages[i];
}
console.log(total);

//using for loop to add all the numbers


// // forEach
// companies.forEach(function(company) {
//     console.log(company)
// })

// //filter...get ages 21 and older
// const canDrink = ages.filter(function(age) {
//     if (age >= 21){
//         return true;
//     }
// });

// // filter using the arrow function: Get 21 and older
// const canDrink = ages.filter (age => age >= 21);
// console.log(canDrink);

// //filter retail companies using expression function
// const retailCompanies = companies.filter(function(company) {
//     if(company.category === "Retail") {
//         return true;
//     }
// })
// console.log(retailCompanies);

// //filter retail companies using the arrow function
// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// // filter companies that started in 80s;Using expression function function
// const startedInEighties = companies.filter(function (company) {
//     if(company.start <= 1989){
//         return true;
//     }
// })
// console.log(startedInEighties)

// //filter companies that started in 1980s: Using arrow function
//  const startedInEighties = companies.filter(company => company.start <= 1989);
//  console.log(startedInEighties);

// //map....you can create any different array from the current array
// //Get company names and put them in an array: Using expression function
// const companyNames = companies.map(function (company) {
//     return company.name;
// });
// console.log(companyNames);

// // map company names with start and end year..using expression function
// const companyMap = companies.map(function (company) {
// return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(companyMap);

// // map company names with start and end year..using arrow function
const companyMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
    console.log(companyMap);

//Get the square of each age
const agesSquare = ages.map(age => Math.sqrt(age));

//Get the age *2
const agesTimesTwo = ages.map(age =>  age*2);
console.log(agesTimesTwo);

//Get a chain of the above two functions
const agesMap = ages
.map(age => Math.sqrt(age))
.map(age =>  age*2);
console.log(agesMap);

// //Sort the company by the start year..using expression function
// const sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     }  
//      else {
//         return -1;
//     }
// });
// console.log(sortedCompanies);

//Sort the company by the start year..using arrow function
const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start)? 1:-1);
console.log(sortedCompanies);

//SSort ages
const sortAges =   ages.sort((a, b) => b - a );
console.log(sortAges);


//reduce..add all the age number
const ageSum = ages.reduce((total, age) => total + age