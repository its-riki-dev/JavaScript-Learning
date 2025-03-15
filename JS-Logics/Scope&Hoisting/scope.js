// 1. Global Scope is the default scope in JavaScript 

var globalVar = "I am global";

function showGlobal() {
    console.log(globalVar); // ✅ Accessible
}

showGlobal();
console.log(globalVar); // ✅ Accessible



// 2. Function Scope (Local Scope) is created when a variable is declared inside a function 

function myFunction() {
    let localVar = "I am local";
    console.log(localVar); // ✅ Accessible inside the function
}

myFunction();
console.log(localVar); // ❌ Uncaught ReferenceError: localVar is not defined



// 3. Block Scope is created when a variable is declared inside a block (ES6 - let & const)

if (true) {
    let blockVar = "I exist only in this block";
    console.log(blockVar); // ✅ Accessible inside the block
}

console.log(blockVar); // ❌ Uncaught ReferenceError: blockVar is not defined

// var does not have block scope (it is function-scoped).

if (true) {
    var testVar = "I am not block-scoped";
}
console.log(testVar); // ✅ Accessible (bad practice)



// 4. Lexical Scope is the scope of a variable defined by its location within the source code (Closures)

function outer() {
    let outerVar = "I am outer";
    
    function inner() {
        console.log(outerVar); // ✅ Accessible due to lexical scope
    }

    inner();
}

outer();

// Closures take advantage of lexical scope by remembering variables from their parent function even after the function has executed.

function makeCounter() {
    let count = 0;
    
    return function() {
        count++;
        console.log(count);
    };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2



// 5. Module Scope is the scope created by a module (ES6 - import & export)

// myModule.js
export let moduleVar = "I am inside a module";

// main.js
import { moduleVar } from './myModule.js';
console.log(moduleVar); // ✅ Accessible in the imported file





// Hoisting & Scope

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// Variables declared with var are hoisted to the top of the function scope.

// Variables declared with let and const are hoisted to the top of the block scope but are not initialized.


console.log(x); // undefined (var is hoisted but not initialized)
var x = 10;

console.log(y); // ❌ ReferenceError (let is hoisted but not initialized)
let y = 20;

// var is hoisted with undefined, let & const are hoisted but uninitialized.
