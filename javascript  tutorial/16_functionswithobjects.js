//jab arguments pta nahi hote hai ki kitne aane wale hai like shopping cart m hum add krte jate hai.
//REST operator and SPREAD operator.
//In JavaScript, the rest (...) and spread (...) operators look the same (...), but they work in opposite ways depending on where they are used.
//Think of them as two siblings:
//Spread → breaks things apart
//Rest → gathers things together

function calculatecartprice(num1){
    return num1
}
console.log(calculatecartprice(200,400,700)); //output -200

function calculatecarnewtprice(...num2){ //...parametrs
    return num2
}
console.log(calculatecarnewtprice(200,400,700)); //output -200,400,700


function cartprice(val1,val2,...num1){
    return num1
}
console.log(cartprice(200,400,700,800));//output-700,800