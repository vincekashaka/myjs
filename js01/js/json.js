// Javascript Object Notataion
/*
JSON is used  to send and receive data.
JSON is a text format that is completely language indepentent
Meaning JSON is used to send and receive data in any language
...no t just in javascript
*/
console.log("whats happening")

 const myObj = {
     name: "Vince",
     hobbies: ["eat", "sleep", "code"],
     hello: function(){
         console.log("Bitch");
     }
 };
 console.log(myObj);
 console.log(myObj.name);
 myObj.hello();