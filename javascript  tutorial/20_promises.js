const promiseONE = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('async task is completed')
        resolve()//writing resolve will commect to .then
    }, 1000);
})

promiseONE.then(function(){
    console.log("promise is consumed")
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('async task 2')
        resolve()
        
    }, 1000);
}).then(function(){
    console.log("something is consumed")
})
//you can direct do .then  cause you havrnt created seprate variable for promise.   


//PASS DATA IN PROMISES USING RESOLVE

const promisethree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({name:"kalyani", email:"kalyanisoni033@gmail.com"})
        
    }, 1000);
})

promisethree.then(function(user){
    console.log(user)
})

const promisefour = new Promise(function(resolve,reject){
   setTimeout(() => {
    let error = true
    if(!error){
        resolve({username:"kalyani soni",mobile :"9630337858"})
    }else{
        reject('something went wrong')
    }
    
   }, 1000);
})

promisefour.then((user)=>{
    console.log(user)
    user.username
}).then((username)=>{
    console.log(username)

}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("the promise is either resolved or rejected"))


const promisefive = new  Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error){
        resolve({usernam:"chunnu"})
        }else{
            reject('it is been rejected')
        }
        
    }, 1000);
})

async function consumepromisefive(){
    try{
    const response = await promisefive
    console.log(response)

} catch(error){
    console.log(error)
}

consumepromisefive()

fetch('url": "https://api.github.com/users/kalyanisoni25')
.then((response)=>{
    return response.json

})
.then((data)=> console.log(data))
.catch((error)=> console.log(error))