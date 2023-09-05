 // Comparision Operator
//  [< , > , <= , >= , == , != , !==]

// conditional statment
// if-else  
let a = 10;
const isloggedIn = false;
if(!isloggedIn){
    console.log('I am a true')
}
else{
    console.log('I am a false')
}

// if-else-if-else 

const balance = 500
if(balance > 5000){
    console.log('balance is greater than 1500')
}
else if (balance > 3000 ){
    console.log('balance is less than 3000')
}
else if( balance > 2000){
    console.log('balance is less than 2000')
}
else{
    console.log('balance is 1500')
}

// logical statment  &&(and) ||(or)

const creditCard = true
const debitCard = true
// const debitCard = false

// if(creditCard || debitCard){ //||(OR)=> from both one should be true 
if(creditCard && debitCard){ //&&(and)=> both should be the true
    console.log('both are allowed')
}
else{
    console.log('Not allowed')
}



