// Spread and Rest ...


// Spread Operator


const names = ['Alice', 'Bob', 'Charlie', 'David', 'Edward'];


const copyNames = [...names];


// const copyNames = names; 
// donot do this, it will copy the reference of the array.



const smallObject = {
    name: 'Jack',
    age: 30,
    location: 'Wonderland'
};


const newobj = {...smallObject};


// Rest Operator


function abcd(...rest){
    console.log(rest);
}

abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);





function abcd(a,b,c,...rest){
    console.log(a,b,c,rest);
}

abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);