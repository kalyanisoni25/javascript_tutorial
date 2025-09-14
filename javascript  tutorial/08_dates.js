let mydate = new Date()
console.log(mydate); //output- 2025-08-08T06:19:22.874Z
console.log(mydate.toString());//output-Fri Aug 08 2025 11:50:30 GMT+0530 (India Standard Time)
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());//8/8/2025
console.log(mydate.toUTCString());//Fri, 08 Aug 2025 06:22:54 GMT
console.log(mydate.getFullYear());//2025
console.log(mydate.getMonth());
console.log(mydate.getDate());
console.log(mydate.getHours());


let mycreateddate = new Date(2004,4,25) //months starts from 0 in javascript.
console.log(mycreateddate.toDateString());

let  birthdate = new Date("2004-05-25")
console.log(birthdate.toLocaleString());