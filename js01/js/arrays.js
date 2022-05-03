//array

const myArray = [];

//add elements to an array
 myArray[0] = "Vince";
 myArray[1] = 200;
 myArray[2] = false;
 myArray.push("school");
 myArray.push(2);
 myArray.push("Kashaka");
 //refer to an array
 console.log(myArray);

 //length property
 console.log(myArray.length);

 //last element in an array
 console.log(myArray[myArray.length - 1])

 //refer to an potision of an element in an array
 console.log(myArray[0]);

 myArray.pop(myArray[6]);
 console.log(myArray); 
 myArray.unshift(32);
 console.log(myArray);
 myArray.splice(2, 6);
 console.group(myArray);
 