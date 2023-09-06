//for loops with break and continue

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 1; i <= arr1.length; i++) {
  if (i == 5) {
    console.log("5 is detected");
  }
  console.log(i);
}

// printing tables

for (let i = 1; i <= 10; i++) {
  console.log(`Table of  ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(i + "*" + j + "=" + i * j);
  }
}
const Heros = ["batman", "superman", "spiderman"];
for (let i = 0; i < Heros.length; i++) {
  console.log(Heros[i]);
}
// Note: <= it will take as per the length of the array not index.
// ex -> [ 10, 20, 30, 40 , 50] length = 5 abd index= 4

//Break and Continue
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log("5 is detected");
    break;
  }
  console.log(`value of i is ${i}`);
}
/*value of i is 1
    value of i is 2
    value of i is 3
    value of i is 4
    5 is detected*/

//continue - when the condition matches it skip the condition and interate on next
for (let j = 1; j <= 10; j++) {
  if (j == 5) {
    console.log("5 is detected");
    continue;
  }
  console.log(`value of j is ${j}`);
}
/*value of j is 1
    value of j is 2
    value of j is 3
    value of j is 4
    5 is detected
    value of j is 6
    value of j is 7
    value of j is 8
    value of j is 9
    value of j is 10*/
