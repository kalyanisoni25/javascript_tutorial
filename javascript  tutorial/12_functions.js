function greet(){
    console.log("hello kalyani")
}
greet(); //most common way to declare functions we havent't passed any parameters.

//function with parameters
function usergreet(name){
   console.log("hello " + name + "!");

}
usergreet("kalyani");

//FUNCTION WITH RETURN VALUE
function add(a,b){
    return a+b
}

let sum = add(20,5)
console.log(sum);

const addiction = (a, b) => a + b;
console.log(addiction(2, 3)); // 5
