//***Math PI */
// interview question 
// Universal constant 

console.log(Math.PI) //3.141592653589793

const descriptor = Object.getOwnPropertyDescriptor(Math , 'PI')
console.log(descriptor)
/*{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
} */

//due to this PI value is constant. by default the developer made it false and added checks for not even converting into true. WE can define this type of property to our object. 


// custom object for disrupting

const chai = {
    name : 'ginger chai',
    price : 20,
    isAvailable :true
}
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))
/* {
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}*/

Object.defineProperty(chai , 'name' , {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))