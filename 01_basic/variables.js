
// let, const, and var are memory space where we store and reterive the data.   
/* let can be updated and not re-declared 
   var can be updated and can be re-declared
   const cannot be updated and re-declared
*/
const accountId = 123455; 
let accountEmail = 'sejalch@twitter.com';
var password = '1234@67';
accountCity = 'jaipur'

accountCity = 'indore'
accountEmail = 'sam@gmail.com' 
password = '124759'


/*
accountId = 2333  TypeError: Assignment to constant variable
 accountEmail = 'sam@gmail.com' let can be updated
password = '124759'  var can update */
console.table( [accountCity, accountId , accountEmail ,  password])
