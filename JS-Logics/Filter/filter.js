const names = [ "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Arnold", "Grace", "Hannah", "Ivy", "Jack", "Kathy","Leo", "Mona","Akash", "Nina", "Oscar", "Paul", "Quincy", "Rachel", "Steve", "Tina"
];


//let newarr = names.filter(function(value){
//    return true;
//});


//let newarr = names.filter(function(value){
//    return false;
//});


//let newarr = names.filter(function(value){
//    if(value === "Alice"){
//        return true;
//    }
//});


let newarr = names.filter(function(value){
    if (value.startsWith("A")){
        return true;
    }
});



// We have to use return statement in filter function also we have to return true or false.

// if we return true then that value will be added to new array.

// if we return false then that value will not be added to new array.





const books = [
    { title: 'Book One', genre: 'Fiction', published: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', published: 1990, edition: 2000 },
    { title: 'Book Three', genre: 'Fiction', published: 2001, edition: 2010 },
    { title: 'Book Four', genre: 'Non-Fiction', published: 2010, edition: 2015 },
    { title: 'Book Five', genre: 'Fiction', published: 2015, edition: 2016 },
    { title: 'Book Six', genre: 'Non-Fiction', published: 2019, edition: 2020 },
    { title: 'Book Seven', genre: 'Fiction', published: 2020, edition: 2021 },
    { title: 'Book Eight', genre: 'Non-Fiction', published: 2021, edition: 2022 }
]


let userBooks = books.filter( (bk) => bk.genre === 'Fiction' );

userBooks = books.filter( (bk) => { 
    return bk.published >= 2000 && bk.genre === 'Fiction'
});

console.log(userBooks);