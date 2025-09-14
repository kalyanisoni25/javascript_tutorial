//learn about singleton.
//object.create-objects using constructor.


//object literals.
const kalyani ={
    name: "kalyani soni",
    age: "21",
    "location": "indore",
    isloggedin: "false",
    skincolor: "fair"
}
console.log(kalyani.age)
console.log(kalyani["age"])
console.log(kalyani["location"])
Object.freeze(kalyani)//no one can make changes now.
//[] use this to use something as symbol lile[age]
//you need to use brackets cause string cannot
//be accessed by .age ..learn about this.
/*Dot Notation (.)
Easiest and most common way.

Works when the property name is a valid 
JavaScript identifier (no spaces, no special characters, doesn’t start with a number).
Bracket Notation ([])
Works with property names stored in variables.

Needed if the key has spaces, special characters, or starts with a number.

Property name must be inside quotes if it’s a string.