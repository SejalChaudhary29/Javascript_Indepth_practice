class User {
    constructor(username , id){
        this.username = username
        this.id = id
    }
   static logMe(){
        console.log(`id is a ${this.id}`)
    }
    createUser(){
        console.log(`create user name is ${this.username}`)
    }

}

const tea = new User('Tea' , 123)

console.log(tea.logMe()) // error =>>logme is not a function
console.log(tea.createUser())


// static is keyword used to stop its access of anys its property 
// and it also applicable for extend class 