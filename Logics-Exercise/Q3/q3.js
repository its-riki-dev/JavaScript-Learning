// Mapping over an array of user data to create a list of user cards.


const usersData = [
    {name: 'John', age: 20},
    {name: 'Jane', age: 21},
    {name: 'Jack', age: 22},
];

let newarr = usersData.map(function(user) {
    return `<div<h3>${user.name}</h3><h5>${user.age}</h5></div>`;
});

console.log(newarr); 


// Output -

// ["<div<h3>John</h3><h5>20</h5></div>", "<div<h3>Jane</h3><h5>21</h5></div>", "<div<h3>Jack</h3><h5>22</h5></div>"]



// Here I -
// 1. mapped over the usersData array
// 2. returned a new array of user cards
// 3. used template literals to create the user cards
// 4. used the map method to create the user cards