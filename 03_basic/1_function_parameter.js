// function 
 function sayName(){
    console.log('hello') // function definition 
}

sayName //function reference
sayName() //function execution

//function with parameter and arguments

function addTwoNumber(num1, num2) { //parameter
        
    return (num1 + num2)

}

 console.log(addTwoNumber(2 ,4)) //arguments

 // return and cosole log ====>>>> after the return statement we cannot console the value. it will be the unreachable code.
 //console.log only console the value it never return the value.
function addThreeNumber ( num1 , num2 ){
    return num1+ num2
    console.log('third number function result') //unreachable code, 'due to written after return keyword'. 

}
console.log('result is ',addThreeNumber(4 , 6)) //result is  10


function loginUserName(username){
    if(!username){
        console.log('>>>>>>>Enter a username')
    }
    return `${username} is username of login user`

} 
let result = loginUserName('Sejal')
console.log(`Result:`, result)//Result: Sejal is username of login user

let result1 = loginUserName()
console.log(`Result2 is:`, result1)//Result2 is: *------undefined--------* is username of login user

// >>>>>>>>>>>>>>>>>>>>>> default value<<<<<<<<<<<<<<<<<<< 
function loginUserName1(username = 'Sammy'){ //deafult value parameter is here
    if(!username){
        console.log('>>>>>>>Enter a username')
    }
    return `${username} is username of login user`

} 
let results = loginUserName1('Sejal')// It will over-ride the default paramter
console.log(`Result:`, results)//Result: Sejal is username of login user

let results1 = loginUserName1() //it will give the default paramter.
console.log(`Result2 is:`, results1)//Result2 is: Sammy is username of login user
