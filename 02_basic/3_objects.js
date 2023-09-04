// Objects 
// -> Object Literals  -> from this it will not create singleton
//-> Singleton - the objects which us created with constructor always has a singleton.


// for symbol 
const mySym = Symbol('key2')
const user = {
    names : 'sejal',
    email :  'sejalch@gmail.com',
    [mySym] :'helloo'
}
console.log(user.names) // not preferable syntax.
console.log(user['names']) // preferable syntax.
user.location = 'India' //insertion of new key and pair
console.log(user)


const user1 = {}
user1.name = 'sejal'
user1.location = 'India'
console.log(user1)
//creating a function into object
user.greeting = function(){
    console.log('its a first function')
}
console.log(user.greeting())

//refering the values from object in function
user.greeting2 = function(){
    console.log(`it is a second function, ${this.location}`)

}
console.log(user.greeting2())



