// A Promise represents a value that will be available in the future (resolved or rejected).
// .then() runs when the Promise is resolved.
// .catch() runs when the Promise is rejected.



var ans = new Promise((res, rej) => {
    if (true) {
        return res();  // Resolving the promise
    } else {
        return rej();  // Rejecting the promise
    }
 });
 
 ans
   .then(function () {
       console.log("Resolved");
   })
   .catch(function () {
       console.log("Rejected");
   });




// Here I -

// Created a Promise object ans.
// Passed a callback function to the Promise object.
// The callback function has two parameters res and rej.
// If the condition is true, then the promise is resolved using res().
// If the condition is false, then the promise is rejected using rej().
// Used .then() to handle the resolved promise.
// Used .catch() to handle the rejected promise.
// Output - Resolved





// Example 2 -




function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}

fetchData()
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error));





// Here I -

// Created a function fetchData that returns a Promise object.
// Used setTimeout to mimic an asynchronous operation.
// Resolved the promise with the message "Data fetched".
// Used .then() to handle the resolved promise.
// Used .catch() to handle the rejected promise.
// Output - Data fetched








// Difference between Promises and Callbacks -

// Promises are an improvement over callbacks for handling asynchronous operations.
// Callbacks can lead to callback hell, whereas Promises provide a cleaner way to handle asynchronous code.
// Promises can be chained using .then() and .catch() to handle resolved and rejected promises.
// Promises can be used to handle both synchronous and asynchronous operations.
// Promises provide a more structured way to handle asynchronous code.
// Promises can be used to handle multiple asynchronous operations in a more readable way.
// Promises can be used to handle errors in a more structured way using .catch().