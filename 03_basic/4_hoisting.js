// {} => scope

//  The variable in a Global Scope can be accessible to the function or if-else of -local scope but the same cannot be accessible to global scope 
//  example-> 
 let a = 1000;
 function sayNum (){
    console.log(`sayNum result is:`,a)
    let b = 200;
}
// console.log(b)// referecnce error b is not defined.
 sayNum()

// in nested scope child function can access the parent function variable
 //Nested Scope
 function one(){
    const username = 'sejal'
    console.log('one starts')
    function two(){
        const website = 'youtube'
        console.log(username)
    }
    // console.log(website) //gives reference error. website not defined 

    two()
 }
 one()

 // ************ function scope***********

//  a. simple function declaration.
//  b. function expression.
// a. function declaration 
console.log(addOne(3)) //4
function addOne(num){
    return num + 1 
}
console.log(addOne(3)) //4
// b. function declaration 
console.log(addTwo(5)) // gives error of cannot access addTwo before initailization
const addTwo = function(num){
    return num +2
}
