// Merging two arrays of data fetched from separate APIs into a single list.

const names = ["John", "Jane", "Jack", "Jill"];
const lastNames = ["Doe", "Smith", "Johnson", "Brown"];

const fullName = [...names, ...lastNames];

console.log(fullName); 

// Output: 

// ["John", "Jane", "Jack", "Jill", "Doe", "Smith", "Johnson", "Brown"]



// Here I -
// 1. merged the two arrays
// 2. used the spread operator to merge the two arrays