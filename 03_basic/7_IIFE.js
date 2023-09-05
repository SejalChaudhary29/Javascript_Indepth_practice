// Immediately invoked function  expression
//iife used to prevent from the pollution of global scope.
// ; to end the context we should use ;
// (function(){})()

// example of to write 2 IIFE at once 
(function chai(){
    console.log('DB connected')
})();

//arrow function
( (name)=>{
console.log(`DB connected ${name}`)
})('sejal');



