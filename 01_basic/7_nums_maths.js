// NUMBER 

let score = 123;

console.log(score) //123

// Number constructor ()
let balance = new Number(199) //defining new object which have Number type
console.log( balance) //[Number: 199]
console.log( typeof balance) //object

// for converting into a string 
console.log(  balance.toString())  //199
console.log( typeof balance.toString()) //string

const fixedOf = 99
console.log(fixedOf.toFixed(1))//99.0

const otherNumber = 234.599
// -------------Precision is for to get preicise value and to how many value to focus on
// focus on value before decimal less than the number present value assigned it gives exponetial form  
console.log(otherNumber.toPrecision(3)) //235
console.log(otherNumber.toPrecision(4)) //234.6

// LocaleString is to apply commas in number such as 100000=> 1,00,000
// by default it have US conversion
const number = 100000
console.log(number.toLocaleString('en-IN'))//1,00,000

// Math
// Math is a inbuild library in js 

console.log(Math) // it is a object and haves property
console.log(Math.abs(-4)) //it  only coverts negativr number into a positive
console.log(Math.round(4.6)) //5
console.log(Math.ceil(4.8)) //above than 4.0 it will give top round off value //5
console.log(Math.floor(4.8)) //above than 5.0 it will give low round off value //4


