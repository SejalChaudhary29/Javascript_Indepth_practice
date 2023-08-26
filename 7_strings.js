//Strings
// String Interporlation  `${}`

const names = 'sejal'
const lastName = 'chaudhary'
console.log(`my name is ${names} ${lastName}.`)


// String() constructor creates string objects
 const a = new String('sejalch')
 console.log(a)
 console.log(a[1])//e
 console.log(a.charAt(3))//a
 console.log(a.length)//7
 console.log(a.indexOf('e'))//1
 console.log(a.substring(0 , 3)) //sej
 console.log(a.slice(0 , 3)) //sej
 
 let newString = '    newNameis here'  
 console.log(newString)   
 console.log(newString.trim()) //removes whitespaces

 const url = 'sejalgoogle22@.com'
 console.log(url.replace('22' , '-')) //sejalgoogle-@.com

 console.log( url.includes('sejal')) //asks que is it present or not - true 

const method = 'sejal-ch-123' 
console.log(method.split('-')) //[ 'sejal', 'ch', '123' ] gives array
console.log(method.split(''))
/*[
    's', 'e', 'j', 'a',
    'l', '-', 'c', 'h',
    '-', '1', '2', '3'
]*/
console.log(method.split(' ')) //[ 'sejal-ch-123' ]