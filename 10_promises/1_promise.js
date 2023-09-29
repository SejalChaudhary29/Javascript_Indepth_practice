//  A promise object represts the eventual completion ( or failure )
// of an asynchrnous operations and its resulting value

// used for -> db connection , network request , cryptography s
// three stages ===>  pending , filfilled , rejected 
// promise instance

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task is compeleted");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({username:'sejal'});
    } else {
      reject("I am a reject");
    }
  }, 1000);
});

promiseTwo.then((username)=>{
  console.log( username ,'resolvr is consumed')
}).catch((error)=>{
  console.log(error)
}).finally(()=>{
  console.log('the promise either resolved or rejected')
})

//async await with try and catch

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false; // Set error to false to resolve the promise
    if (!error) {
      resolve({ username: 'hitesh' });
    } else {
      reject("I am a reject");
    }
  }, 1000);
});

async function consumePromise() { 
  try {
    const response = await promiseThree; 
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise(); 

