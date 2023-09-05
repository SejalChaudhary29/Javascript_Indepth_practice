//Arrow Function ()=>{}
// explicit return  and implicit return
// explicit return means that to use the return keyword
// implicit return means to not to use return keyword instead use ()parathesis 

// case 1 

const func = (num1 , num2)=>{ //explicit
    return num1 + num2
}
console.log(func(3 , 5))//8

// case 2

const arrFunc = (num1 , num2) => num1 + num2 //impilicit
console.log(arrFunc(15 , 10)) //25

// case3

const arrfunc3 = (num1)=>(num1)
console.log(arrfunc3(68)) //68

// case 4  *******arrow function return the object syntax*****
 const arrFunc4 = ()=>({username: 'SejalChaudhary'})

 console.log(arrFunc4())//{username: 'SejalChaudhary'}


























