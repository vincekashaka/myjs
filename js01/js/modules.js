//Modules
import * as Guitars from "./guitars.js";
import User from "./userClass.js";
// import {shredding, plucking} from "./guitars.js"
// import {shredding as shred, plucking as puck} from "./guitars.js"
import UserClass from "./userClass.js";


const me = new User("email@mail.com", "Vince");
console.log(me);
console.log(me.greeting());
console.log(Guitars.playGuitar());
// console.log(shredding());
// console.log(plucking());
console.log(Guitars.shredding());
console.log(Guitars.plucking());