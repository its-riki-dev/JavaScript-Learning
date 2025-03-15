// Immediately Invoked Function Expressions (IIFE)

// IIFE is a function that is executed right after it is created.

// We use IIFE to avoid polluting the global scope.


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // <--- We need to use this semi-colon to write two IIFE in a row.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Riki')