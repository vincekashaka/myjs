// Promises
/*Promises have 3 states:
**Pending
**Fulfilled
** Rejected

*/
// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if (!error) {
//         resolve("Yes1! resolved the promise");
//     } else {
//         reject("No! rejected the promise.");
//     }
// });

// // console.log(myPromise);
// // myPromise.then(value => {
// //     return value + 1;
// // })
// // .then(newValue => {
// //     console.log(newValue);
// // })
// // .catch(err =>{
// //     console.error(err);
// // })

// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve("myNextPromise resolved");
//     }, 3000);
// });

// myNextPromise.then(value =>{
//     console.log(value);
// });

// myPromise.then(value =>{
//     console.log(value);
// });