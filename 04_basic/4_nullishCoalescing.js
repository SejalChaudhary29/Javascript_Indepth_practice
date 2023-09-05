// for database call response
//  ( null and undefied )

// Nullish Coalescing operator ?? 
let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 15 //15
val1 = 20 ?? undefined //20
val1 = null ?? 25 ?? 40 //25
console.log(val1)

//Ternary operator

// condition ? true : false 
const chai = 100
chai >= 80? console.log('greater than 80'): console.log('less than 80')


// Note=>  nullish coalescing operator(??) and ternary operator(?) both are different. 