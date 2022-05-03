//Fetch API requires a discussion of ....
// Callbacks, Promises, Thenables, and Async/Await

// Callbacks
function firstFunction(parameters, callback) {
    // do some stuff
    callback();
}

// AKA  "callback hell" 
firstFunction(para, function(){
    // do some stuff here
    secondFunction(para, function() {
         // do some stuff here
        thirdFuncttion(para, function() {
             // do some stuff here

        })
    })
})