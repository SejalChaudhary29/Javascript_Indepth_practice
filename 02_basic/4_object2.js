const igUser = new Object() //singleton object
console.log(igUser)//{}

const tinderUser = {}//non-singleton object
console.log(tinderUser)//{}

// Nested Object

const fbUser = {
    name : 'sejal',
    id: 123,
    fullname : {
        userFullName: {
            firstName : 'sejal',
            lastName : 'chaudhary'
        }
    } 
}
console.log(fbUser.fullname.userFullName) //{ firstName: 'sejal', lastName: 'chaudhary' }

//Optional chaining

const XUser = {
    name : 'sejal',
    id: 123,
    fullname : {
        userFullName: {
            firstName : 'sejal',
            lastName : 'chaudhary'
        }
    } 
}
console.log(fbUser.fullname?.userFullName) 
Object.freeze(XUser) // helps to freeze changes in object
XUser.name = 'hello'
console.log(XUser)

// Methods 

const obj1 ={1: 'a',2: 'b'}
const obj2 ={  3: 'c', 4: 'd'}
const obj3 = { obj1 , obj2}
console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
 
 const obj4 = Object.assign({}, obj1 , obj2)
 console.log(obj4) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// most used method 
// Spread s
const obj5 = {...obj1 , ...obj2}
console.log(obj5) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
 
// For accessing Keys
console.log('object keys:', Object.keys(XUser))
//For accessing Values
console.log('object values:',Object.values(XUser))
//For accessing Entries
console.log('object entries:', Object.entries(XUser))


