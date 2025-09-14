//Destructuring in JavaScript is a shortcut way to unpack values 
// from arrays or properties from objects and store them in variables.
//Think of it like “taking apart” a box and pulling out only the items you need — without opening it one by one.
let person = { name: "Kalyani", age: 22 };
let name = person.name;
let age = person.age;
console.log(name, age); // Kalyani 22


const course ={
    coursename : "chaiandcode",
    courseprice :"999",
    courseinstructor : "hitesh"
}       
console.log(course.courseinstructor);
course.courseinstructor;
course.coursename

//one more method.

const {courseinstructor} = course
console.log(courseinstructor);

//to rename the value
const{courseinstructor:inst} = course
console.log(inst);

const people = { naam: "Kalyani", age: 20, city: "Indore" };
const { naam, city } = people;
console.log(name);
console.log(city);//instead of using the dot notation method.