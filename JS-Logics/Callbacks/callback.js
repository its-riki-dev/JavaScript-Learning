// Callback Function is a function that is passed as an argument to another function and is executed after some operation has been completed.



function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Riki", sayGoodbye);





// Here I -

// 1. Created a function greet that takes two arguments, name and callback.
// 2. Printed a greeting message to the console.
// 3. Called the callback function.
// 4. Created another function sayGoodbye that prints a goodbye message to the console.
// 5. Called the greet function and passed the name and sayGoodbye function as arguments.
// 6. The greet function executed the sayGoodbye function after printing the greeting message.
// 7. The output is: Hello, Riki Goodbye!






// Example 2 -


function fetchData(callback) {
    setTimeout(() => {
        callback(null, "Data fetched"); // Success
    }, 1000);
}

fetchData(function (error, data) {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log(data);
    }
});




// Here I -

// 1. Created a function fetchData that takes a callback as an argument.
// 2. Used the setTimeout function to simulate an asynchronous operation.
// 3. Called the callback function with null and "Data fetched" as arguments after 1 second.
// 4. Created an anonymous function that takes error and data as arguments.
// 5. Checked if an error occurred and printed the error message.
// 6. Printed the data if no error occurred.
// 7. Called the fetchData function and passed the anonymous function as an argument. 
// 8. The fetchData function executed the anonymous function after 1 second with the data fetched message.
// 9. The output is: Data fetched.