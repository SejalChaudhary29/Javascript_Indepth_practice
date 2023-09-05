// Truthy value  

//'sejal','0', 1 , true,"  " ,[], {}, function(){} 

// falsy value 

//'', 0 ,-0, false ,BigInt + On, undefined, NaN ,null  

const email = []// truthy value 
if(email){
    console.log('email is checked')
}
else{
    console.log('error email')
}

// detection of empty array and object 

const arr = []
if(arr.length === 0 ){
    console.log('array got checked here')

}else{
    console.log('array error')
}

const obj = {}
 if(Object.keys(obj).length ===0){
    console.log('object got selected')
 }else{
    console.log('object error')
 }

//  Note : 
// false == 0
// false == ""
// 0 == ""