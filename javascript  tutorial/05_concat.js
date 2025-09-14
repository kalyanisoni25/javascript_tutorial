//this is an old method for concatenation
let name = "kalyani"
let repocount =    25

console.log(name +   repocount);

//modern day mwethod using back ticks known as template literals
console.log(`my name is ${name} and my repo is ${repocount}`);
console.log(`${name}${repocount}`);

//method 3
let str1="kalyani"
let str2 = "soni"
let str3 = "!"

let result = str1.concat(str2,str3);
console.log(result);

//to join arrays
const parts = ["Make", "Model", "Year"];

// Join with a space in between
const carInfo = parts.join(" ");
console.log(carInfo); // Output: Make Model Year

// Join with no separator
const fileName = parts.join("");
console.log(fileName); // Output: MakeModelYear

let song = "saiyaara"
console.log(song.length);
console.log(song.toUpperCase);
console.log(song[0]);
console.log(song[4]);