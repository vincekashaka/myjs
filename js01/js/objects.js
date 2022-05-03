//Objects
// key-value pairs in cuirly baces

const myObj = {name: "Vince"};

const anotherObj = {
    alive:true,
    answer:56,
    hobbies: ["eat", "sleep","code"],
    beverages: {
        morning: "tea",
        afternoon:"iced chocolate"
    },
    action: function(){
        return `Time for ${this.beverages.morning}`;
    }
}; 
console.log(anotherObj.action());