//  fetch with then and catch

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);


  })
  .catch((error) => {
    console.log("error is here", error);
  });

//  fetch with async await

async function getallUsers() {
  try {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getallUsers();

// the global fetch() method starts the process of a resources from the network , returning a promise which is fulfilled once the response us available

// what f you  request from promise and error code occurs from what it will resove or reject?
// ->  it will get as a response it is not error we get error when it will not complete the request.
/* [
      A fetch() promise does not reject on Http errors (404) instead. then () handler ,ust check the REsponse.ok and Response.status .properties  
 ]*/



