//SINGLETON-In JavaScript, a singleton is an object that is created only once
//  and shared everywhere in your program — instead of creating multiple copies.



//OBJECTS INSIDE OBJECTS
const regularuser = {
    emailid: "kalyanisoni033@gmail.com",
    fullname:{
        userfullname:{
            firstname : "kalyani",
            lastname : "soni"
        }
    }
}
console.log(regularuser.fullname);
console.log(regularuser.emailid);
console.log(regularuser.fullname.userfullname.lastname); //if you want to access objects inside objects than do this.

//COMBINE OBJECTS.
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = Object.assign(obj1,obj2)
console.log(obj3);