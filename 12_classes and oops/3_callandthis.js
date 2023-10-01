//call and this

function person(username){
    this.username = username
    console.log('called')
}

function newPerson (username , email , id){
    person.call(this, username)
    this.email = email
    this.id = id
}
const chai = new newPerson('chai', 'chai@gmail.com', 123)
console.log(chai)
//call method technically passes current execution context to another function 


// *********** see the differnce in both the function
function userhere(){
    console.log('I am a user')
}

function secondUser(){
    userhere()
    console.log('I am second user')
}
console.log(secondUser())


//**** Scenario of this */
// 1. this is inside a function 
// 2. this is inside a method 
// 3. when function called with call , bind or apply method



let name = 'fatema';
function fun() {
   console.log(this.name);  //undefined
}

fun(); 

const users = {
    name: 'Maria',
     age: 12,
     calcAge: function(){
        return 12*4
     }
    
}
fun()
console.log(users.calcAge())
fun.call(users)