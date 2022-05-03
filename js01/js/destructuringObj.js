//Destructuring Objects
const band = {
    vocals: "Vince Kayz",
    guitar: "Mike Mujuru",
    bass: "Noel Nyazanda",
    drums: "Obert Gomba"
};
// const {guitar: myVariable, bass: myBass} = band;
// console.log(myVariable);
// console.log(myBass);

// const {vocals, guitar, bass, drums} = band;
// console.log(vocals);
// console.log(drums);

function sings({vocals}){
    return `${vocals} sings!` 
};
console.log(sings(band));