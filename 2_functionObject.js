// Function 
//   Rest Operator (...rest)we use rest operator when we dont know estimated value how many it willl come usually into shopping cart.

// case 1 
function calculateValue(...num1){
    return num1
}
console.log(calculateValue(22, 33,44,55,555))//[ 22, 33, 44, 55, 555 ]

// case2:
function calculateValue1( val1, val2 ,val3,...num1){
    return num1
}
console.log(calculateValue1(22, 33,44,55,555))//[ 55, 555 ]

// object 

const obj1 = {
    username: 'Sejal',
    course: 'FSWD',
    age : 18,
            }

     function userDetails (obj){
     console.log(`username is ${obj.username} , enrolled in course of ${obj.course}`)
        }    

userDetails(obj1)