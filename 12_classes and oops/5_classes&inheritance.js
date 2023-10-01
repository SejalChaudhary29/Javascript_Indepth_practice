class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is a ${this.username}`)
    }
}
const chai = new User('chai')
console.log(chai)
class Teacher extends User{
    constructor(username , email , password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(` A new course is purchased by ${this.username}`)
    }
}
const one = new Teacher('Sejal', 'sejal@gmail.com' , 133)
console.log(one)
console.log(one.addCourse())

// instance

console.log(chai instanceof User)//true
console.log(chai instanceof Teacher)//false