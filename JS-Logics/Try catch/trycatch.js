// Try catch is used to handle errors in JavaScript. It is used to catch the errors that occur in the code block. The try block contains the code that might throw an exception and the catch block contains the code that handles the exception. The finally block is used to execute the code after the try block and catch block, regardless of the result.


console.log("hey"); // yaha se aage ka code run nahi hoga but yeh run hoga cuz JS line by line run hota hai and yaha pe koi error nahi hai
console.log(hey); 
console.log("hey");


// So to handle this error we use try catch

console.log("hey");
try{
    console.log(hey);
}
catch(err){
    console.log(err);
}
console.log("hey");





try {
    let result = 10 / 0;  // No error here, but let's force one
    let a = undefinedVariable; // This will throw an error
} catch (error) {
    console.log("An error occurred:", error.message);
} finally {
    console.log("This runs no matter what!");
}







async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error fetching data:", error.message);
    }
}

fetchData();