// Grouping an array of object by a specific property ( e.g. grouping users by role ).

const users = [
  { name: "John", role: "admin" },
  { name: "Jane", role: "user" },
  { name: "Jim", role: "admin" },
  { name: "Jill", role: "user" },
];

let obj = {};

users.forEach(function (user) {
  if (obj[user.role]) {
    obj[user.role].push(user);
  } else {
    obj[user.role] = [user];
  }
});

console.log(obj);

// Output -

// {
//   admin: [
//     { name: "John", role: "admin" },
//     { name: "Jim", role: "admin" }
//   ],
//   user: [
//     { name: "Jane", role: "user" },
//     { name: "Jill", role: "user" }
//   ]
// }



// method 2

const groupedRole = users.reduce((acc, user) => {
  // If the role doesn't exist in accumulator, create an array for it
  if (!acc[user.role]) {
    acc[user.role] = [];
  }
  // Push the current user to the appropriate role array
  acc[user.role].push(user);
  return acc;
}, {});

console.log(groupedRole);


// Output -

// {
//   admin: [
//     { name: "John", role: "admin" },
//     { name: "Jim", role: "admin" }
//   ],






// Here I -
// 1. created an empty object
// 2. iterated over the users array
// 3. if the role already exists in the object, push the user to the array
// 4. if the role doesn't exist, create an array for it and push the user to it