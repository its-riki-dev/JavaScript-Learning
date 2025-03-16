// Removing or updating a specific object in an array of data based on a unique ID.


const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Jim", age: 35 },
  { id: 4, name: "Jill", age: 28 },
  { id: 5, name: "Jack", age: 32 }
];

let newUsers =users.filter(function(user){
    return user.id !== 3;
})

console.log(newUsers);

// Output -

// [
//   { id: 1, name: "John", age: 25 },
//   { id: 2, name: "Jane", age: 30 },
//   { id: 4, name: "Jill", age: 28 },
//   { id: 5, name: "Jack", age: 32 }
// ]


// Here I -
// 1. filtered the users array
// 2. returned the users array without the user with id 3