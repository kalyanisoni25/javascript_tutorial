const temprature = 30
if(temprature<50){
    console.log("temprature is less than 50")
}else{
    console.log("temprature is greater than 50");
}

const userinstagram = true
const usersnapchat = true
const userwhatsapp = false
if(userinstagram && usersnapchat && userwhatsapp){
    console.log("students are allowed for courses")
}//all conditions should be true
else{
    console.log("students are not allowed")
}

if(userinstagram || userwhatsapp){
    console.log("you are allowed")
}//any one shoukd be true