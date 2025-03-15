const names = ['Alice', 'Bob', 'Charlie', 'David', 'Edward'];

names.forEach(function (value) {
    if (value === 'Charlie') {} 
    else {
        console.log('value');
    }
});


// Break is not allowed in forEach along with continue because forEach is a higher order function and it is not a loop.

// If you want to break the loop, you can use for loop instead of forEach.


//names.forEach(function (value) {
//   if (value === 'Charlie') {
//        break;
//    }
//});