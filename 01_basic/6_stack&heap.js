//  Stack(primitive) and Heap (non-primitive) 

// In STACK-> make a copy of variavle declared and the changed made in copy.
//  In Headp -> make a reference of varaible declared as the changes takes place in the original object also     
// ex 1. Stack 
let names = 'sejal'
let anotherName = names
anotherName = 'hello sejal' 
//changes takes place only in copy(anotherName)  
console.log(names) //sejal
console.log(anotherName) //'hello sejal' 

// ex-2  Heap 

let objName = {
    email : 'sejalch@.com',
    Id : 1233
}
 let objName2 = objName
 objName2.email ='hellosejal@.com'  
 //changes takes place in both 
 console.log(objName)//'hellosejal@.com'
 console.log(objName2)//'hellosejal@.com'