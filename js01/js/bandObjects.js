// Ojects
// key-values pairs in curly in braces

const band = {
    vocals: "Vince Kayz",
    guitar: "Mike Mujuru",
    bass: "Noel Nyazanda",
    drums: "Obert Gomba"
};
//delete band.drums;

//Use hasOwnProperty to check if the proprty
//is in the object 
console.log(band.hasOwnProperty('drums'))

// print all keys to the console.
console.log(Object.keys(band));

// print all the values to the console.
console.log(Object.values(band));

for(let job in band){
    //console.log(band[job]);
    console.log(`On ${job}, it's ${band[job]}`);
}