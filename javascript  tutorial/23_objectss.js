//functions are objects as well as function also.

function multipleby5(num){
    return num*5
}

multipleby5.power = 2

console.log(multipleby5(5));
console.log(multipleby5.power);//objects are accessed by dot method.
console.log(multipleby5.prototype);
function Person(name) {
  this.name = name;
}

// Adding method to prototype
Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

const p1 = new Person("Kalyani");

p1.sayHello();
console.log(Person.prop) //you can access properties of objects using this.
 // ✅ Works! Output: "Hello, my name is Kalyani"

// How?
// p1 does not have sayHello directly, 
// so JS looks at Person.prototype -> finds sayHello.

function user(name){
    this.name = name
}
user.prototype.login = function(){
    console.log(this.name + " logged in")
}
 
const u1 = new user("kalyani")
const u2 = new user("riya")

u1.login();
u2.login();

