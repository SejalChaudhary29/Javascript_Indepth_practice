//for of loop for array
//for in loop for object

//for of loop
const arr1 = [10, 20, 30, 40, 50, 60];
for (const i of arr1) {
  console.log(i);
}

//Map
const map = new Map();
map.set("IN", "Bharat");
map.set("USA", " United state of America");
console.log(map);

//map objects holds key-value pair.
//   Map also remebers the original insertion order of key
//Key in map may only appears once
//********Map can be iterable into {for of loops} */

// for of loop
for (const key of map) {
  console.log(key);
}
for (const [key, pair] of map) {
  console.log(key, "=>", pair);
}

//Objects cannot be iterable on for of loops
const myObject = {
  username: "Sejal",
  course: "FSWD",
  price: "3500",
};
// for( const key  of myObject){
//     console.log(key , myObject[key])
// }//TypeError: myObject is not iterable

//for in loop

const obj = {
  username: "Sejal",
  course: "FSWD",
  price: "3500",
};
for (const key in obj) {
  console.log(key, "for", obj[key]);
}
//map in for in loop will not be iterable.
//********Map can be iterable into {for in loops} *

const maps = new Map();
map.set("IN", "Bharat");
map.set("USA", " United state of America");

for (const key in maps) {
  console.log(key);
} //it will not give any result.
