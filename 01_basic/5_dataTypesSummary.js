// Datatypes: primitive , non-rpimitive
//  datatypes are categorised as per how the data in memory are stored and how to access the data.
//  #primitive  7-types
  Number //1234, 123.4
  String //'sejal'
  Boolean //true or false
  BigInt // 123456787894n
  null //empty
  undefined //not declarred yet
  Symbol //unique

  //#Non-primitive ~ refernce
  Array
  Object
  Function

  // ****Symbol****
   const id = Symbol('abc')
   const anotherId = Symbol('abc')
   console.log(id === anotherId)//false, when we create symbol having same input it result as unique result therefore it log false.


   //   Is js is a dynamically typed or statically typed language?
// -> JS is a dynamically typed language because when we declare variables, we dont need to specify what type of the variable is.

// type of datatype 
 /*null => object
 undefined=> undefined
 function=> function object,
 Boolean => Boolean,
 bigint => Bigint,
 symbol => symbol
 */

  



