// class constructor

class user {
  constructor(username, email, id) {
    this.username = username;
    this.email = email;
    this.id = id;
  }
  encryptPassword(){
    console.log(`my id is ${this.id}`)
  }
}
const chai = new user( 'chai', 'chaiaurcode@gmail.com' , 123 )
console.log(chai)
console.log(chai.encryptPassword())


//behind the scene of class constructor
// as js is prototypal typed language. classes is a syntaxtical sugax

function users(username , email , id){
    this.username = username
    this.email = email
    this.id = id
}
users.prototype.encryptPassword = function(){
    console.log(`I am a ${this.id}`)
}
const tea = new users('tea', 'tea@gmail.com' , 456)
console.log(tea)
console.log(tea.encryptPassword())