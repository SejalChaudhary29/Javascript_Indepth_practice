//prototype -> we use prototypr to add custom methods and properties.
function createUser(username, id ){
  this.username = username
  this.id = id
}
createUser.prototype.age = 1234 //adding custom  properties

const chai = new createUser('hitesh' , 12 , )
console.log(chai)
console.log(chai.age)
// protopye inheritance
// we use to inherit the the property of other to one object is done with __proto__ or setPrototypeOf 

//********old syntax

const teacher ={
  makeTea : true  
}

const assitant = {
    username: 'hitesh',
    course: 'SE'
}

const associate = {
    age : '20',
    __proto__ : assitant // associate can ascces the property of assitant
}
console.log(associate.username)//hitesh

// mordern syntax 
Object.setPrototypeOf(teacher , associate)
console.log(teacher.age)  //20 here teacher can access the property of associate

//  prototype 
// function , Array and string's their parent is OBJECT AND THEIR PROTOTYPE REFERENCE IS OBJECT ------>>>> Object- objects PROTOTYPE REFERNEC IS NOTHING i.e. null (it can be -further go woth getter an setters or it can be a null------->>>> null
Object.prototype.score = function(){ //here the property and method are applied whole over the objects
  return 278
}
console.log(teacher.score())

let abc = 'Hello there'

String.prototype.printMe = 'I am here printMe'
console.log(abc.printMe)