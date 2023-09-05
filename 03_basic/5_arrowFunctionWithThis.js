// ES6 in 2015 comes up with the new feature in javascript. 
// arrow function , this keyword

// This keyword=> this refers to the current context.

console.log(this) //{} in node environment this refers to empty object
console.log(this) // in browser this refers to the global object which is window object


// this in object 
const obj = {
    username: 'sejal',
    age:20,
    course: 'FSWD',
    sayName: function(){
        console.log(`${this.username} is a username for obj`)
        
    }

}
obj.sayName() //sejal is a username of obj


//this in regular function

function myName(){
   
    console.log(this)
}
myName() //global object


function sayName (){
    const name = 'sejal'
    console.log(this.name) //undefined
}
sayName()

// function expression

const myOne = function(){
    let username = 'hello there'
    console.log('myOne function',this.username) //undefined
}
myOne()

// Arrow function with this
const arrFync = ()=>{
    let username = 'arrFunc'
    console.log(this.username)
}
arrFync() //undefined


const arrfunc2 = ()=>{
  
    console.log(this)
}
arrfunc2() //{}