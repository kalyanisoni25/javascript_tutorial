/* so there are two types of scope block scope and 
functional scope
*/

//block scope
{
  let x = 10;
  console.log(x); // ✅ 10
}
console.log(x); // ❌ ReferenceError: x is not defined

//functional scope
function myFunc() {
  var y = 20;
  console.log(y); // ✅ 20
}
myFunc();
console.log(y); // ❌ ReferenceError: y is not defined

//variable is a function scope hence it is advised to avoid cause it will create functional scope error
//while let and const are block scope