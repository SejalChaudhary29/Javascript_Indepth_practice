// Array 
 const myArr = [1 ,2 ,3, true, 'sejal' ]
 console.log(myArr)
// Array()constructor
 const newArr = new Array( 1, 2 ,3 ,4)
 console.log(newArr)
 /*
 Array
 array is a resizable and can contain mix of `different data-types
 elements are accessed through indexes.
 arrays starts from 0 index
 array creates a shallow copy-( it is a copy whose properties shares the same reference.(Heap))  
 */
// Methods of Array 

const newArr1 = new Array( 1, 2 ,3 ,4, 5)
// newArr1.push(89)//[ 1, 2, 3, 4, 89 ]
// newArr1.pop()//[ 1, 2, 3, 4 ]
// newArr1.unshift(344) //[ 344, 1, 2, 3, 4, 5 ]
// newArr1.shift()//[ 2, 3, 4, 5 ]
console.log(newArr1.includes(5))//true
console.log(newArr1.indexOf(4))
//Join
const myNewArr = newArr1.join() //it converts the Array into String
console.log(myNewArr) //1,2,3,4,5-> string
console.log(newArr1)

//SLice and Splice
 
const num = [22, 33, 44 ,55 , 66 ,77 ,88]
console.log( 'original array',num)
// *******Slice*******
// 1.Slice method return the selected elements  of an array. 
// 2.It doesnt change the original array 
const num1 = num.slice(1,3)
console.log('slice result is ', num1)
console.log('slice result array,' ,num)// [22,33, 44, 55, 66, 77, 88 ]
// *******Splice*******
// 1. Splice method return the removed elements of an array by adding or deleting.  
// 2. It Changes the original array. 
const num2 = num.splice(1 , 3 , 34)
console.log('splice result is ', num2 )
console.log('splice result array,' ,num) //[ 22, 34, 66, 77, 88 ]

