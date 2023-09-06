// forEach loop
//filter , map , reduce
const arr = [10 , 20 , 30 ,40 ]
arr.forEach((i)=>{
    console.log(i)
  })

arr.forEach(function(i){
    console.log(i)
})

arr.forEach((item , index ,arr)=>{
    console.log(item , index , arr)
})

function printMe(i){
    console.log(i)
} 
arr.forEach(printMe)

const arr1 = [100 , 120 , 130 , 140 ]
const newArr = arr1.forEach((i)=>{
    // console.log(i)
})
console.log(newArr) // undefined
// forEach loop does not return any value 


//filter 
const myNums = [ 1, 2,3,4 ,5, 6,7,8,9]
 const newNum = myNums.filter((num)=>{
return num<6 
})
console.log(newNum)


//Map

const myNum = [111, 222, 333, 444, 555, 666, 777]
const numMap =  myNum.map((i)=>{
    return i+100;
})
console.log(numMap)

//reduce

const bookPrice = [100 , 40 , 20 ]
const newVal = bookPrice.reduce((acc , curr)=>{
    return acc + curr
} ,0)
console.log(newVal)