// Concat 

const myArr1 = ['thor', 'ironman', 'spiderman' ]
const myArr2 = ['superman', 'batman','flash']
myArr1.push(myArr2) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
console.log(myArr1)
 console.log(myArr1.concat(myArr2))
//  [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

// Spread Operator

const allInOne = [...myArr1, ...myArr2]
console.log(allInOne)

// Flat 
const num2 = [1,3,4,5,[2,4,6,7],[4,8],99]
console.log(num2.flat(Infinity));// [ 1, 3, 4, 5, 2,  4, 6, 7, 4, 8,99]

//for question is it a array?
const names = 'sejal'
console.log(Array.isArray(names)) //false

//for converting into array

const name1 = 'sejal'
console.log(Array.from(name1))//[ 's', 'e', 'j', 'a', 'l' ]
//  one interesting situation is here
console.log(Array.from('sejal'))//[ 's', 'e', 'j', 'a', 'l' ]
console.log(Array.from({name:'hitesh'})) //[] 
//it will return as empty array[]. becoz we have to first decide to convert the key or value. we can't take both as one.   

let score = 100;
let score2 = 200;
let score3 = 300;
let score4 = [1,2,3,4,55]
let score5 = 'sejal'
console.log(Array.of(score, score2, score3))//[ 100, 200, 300 ]
console.log(Array.of(score, score2, score3,score4,score5))//[ 100, 200, 300, [ 1, 2, 3, 4, 55 ], 'sejal' ]

// sumarry of some methods ->>>
// Array.isArray() //questioing is it array? 
// Array.from()// converts into array.
// Array.of() //the elemnts to convert it into a array.  


