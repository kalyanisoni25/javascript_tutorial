class user{
    constructor(username ,email,password){
        this.username= username
        this.email =email
        this.password=password
    }

    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username}`
    }

}

    const chai = new user("kalyani","kalyanisoni@gmail","123abc")

    console.log(chai.encryptpassword());
    console.log(chai.changeusername());

    