const user = {
    id: 1,
    name: {
        first: "John",
        middle: "A.",
        last: "Doe"
    },
    age: 30,
    email: "john.doe@example.com",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },
    phoneNumbers: [
        {
            type: "home",
            number: "555-555-5555"
        },
        {
            type: "work",
            number: "555-555-5556"
        }
    ],
    isActive: true,
    roles: ["user", "admin"],
    createdAt: new Date("2023-01-01T00:00:00Z"),
    updatedAt: new Date("2023-01-02T00:00:00Z")
};



// Destructuring the user object


//let {zip} = user.address;
//console.log(zip);


//let [first, second] = user.roles;
//console.log(first, second);


let [_, second] = user.roles;
console.log(second);