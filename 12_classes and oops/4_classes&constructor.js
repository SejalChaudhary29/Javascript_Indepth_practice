// class constructor

class User {
  constructor(username, email, id) {
    this.username = username;
    this.email = email;
    this.id = id;
  }
  encryptPassword(){
    console.log(`my id is ${this.id}`)
  }
}
const chai = new User( 'chai', 'chaiaurcode@gmail.com' , 123 )
console.log(chai)
console.log(chai.encryptPassword())


//behind the scene of class constructor
// as js is prototypal typed language. classes is a syntaxtical sugax

function Users(username , email , id){
    this.username = username
    this.email = email
    this.id = id
}
Users.prototype.encryptPassword = function(){
    console.log(`I am a ${this.id}`)
}
const tea = new Users('tea', 'tea@gmail.com' , 456)
console.log(tea)
console.log(tea.encryptPassword())