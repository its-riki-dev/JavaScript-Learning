// Filtering an array of objects to display items based on a search query ( e.g. filtering products by type ).


const products = [
    { name: 'Mouse', type: 'electronics' },
    { name: 'Keyboard', type: 'electronics' },
    { name: 'Monitor', type: 'electronics' },
    { name: 'Chair', type: 'furniture' },
    { name: 'Table', type: 'furniture' },
    { name: 'Lamp', type: 'furniture' },
    { name: 'Pen', type: 'stationery' },
    { name: 'Notebook', type: 'stationery' },
    { name: 'Paper', type: 'stationery' }
];


let newarr = products.filter(function(product){
    return product.type === "furniture";
});

console.log(newarr); 

// Output: 

// [ { name: 'Chair', type: 'furniture' }, { name: 'Table', type: 'furniture' }, { name: 'Lamp', type: 'furniture' } ]



// Here I -
// 1. filtered the products array
// 2. returned the products array with only the products that have the type of "furniture"
// 3. used the filter method to filter the products array