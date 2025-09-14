function saymyname(){
    console.log("kalyani,you can do everything")

}
saymyname();
//a function is defined as something which can be called multipe times he==wen needed.

function addtwono(num1,num2){
    return num1+num2
}
let sum = addtwono(20,5)
console.log(sum);   

function additin(add1,add2){//parameters
    console.log(add1+add2)
}
additin(3,5)//arguments

function loginuser(username){
    if(username===undefined){
        console.log("please enter a username")
    }
    return `${username} just logged in`
   
}
console.log(loginuser("kalyani"));
console.log(loginuser);//undefined just logged in.
