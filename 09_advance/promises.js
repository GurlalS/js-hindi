// Q or Blubird?? => are libraries integrated in core JS to handle the async handling, before promises it was used most popularly

// creation of promises=>>>>>
// promise coantains one callbackfunction with resolve and reject parameters
const promiseOne = new Promise(function (resolve, reject) {
  // Do async task
  // DB calls, cryptograpghy, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); // now it is connected with then
  }, 1000);
});

// then is lined with the resolve => if when u call resolve then only "then" will be execited

promiseOne.then(function () {
  console.log("Promise consumed");
});

// it is not necessary to store promes in a variable

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  // if promoise will be resolved, then "then" will be informed and executed
  console.log("Async 2 resolved");
});

// how to pass data while we are consiuming it after resolve
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 3");
    resolve({ username: "Gurlal", course: "JS" });
  }, 1000);
}).then(function (user) {
  console.log("Async 3 resolved");
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Gurlal", course: "JS" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

// consuming promise 4  // i wanat only username if promise is reolved

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));
