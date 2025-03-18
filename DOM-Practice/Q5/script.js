// Built an interactive e-commerce product listing with a cart system that allows users to add items and view their cart dynamically.


var product = [
    {name: "White Chair", headline: "Soft Cloud Chair", price: "5,000", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Green Sneaker", headline: "Stylish Footwear", price: "1,500", image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Batman Duck Toy", headline: "Cute Toy", price: "300", image: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];

var popular = [
    {name: "Black Sneaker", headline: "Stylish Footwear", price: "5,000", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Aesthetic Bag", headline: "School Bag", price: "1,500", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Perfume", headline: "Fashion & Beauty", price: "600", image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];

var cart = [];

function addProducts (){
    var clutter = "";
product.forEach(function(product, index){
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img class="w-full h-full object-cover" src="${product.image}" />
                </div>

                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">&#x20B9 ${product.price}</h4>
                        </div>
                        <button data-index="${index} "class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}"
                                class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
});
document.querySelector(".products").innerHTML = clutter;
};

function addPopularProducts (){
    var clutter = "";
    popular.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover" src="${product.image}" alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">&#x20B9 ${product.price}</h4>
                    </div>
                </div>`;
    });
    document.querySelector(".populars").innerHTML = clutter;
};

function addToCart(){
    document.querySelector(".products").addEventListener("click", function(details){
        if(details.target.classList.contains('add')){
            cart.push(product[details.target.dataset.index]);
        };
    });
};

function showCart() {
    document.querySelector(".carticon").addEventListener("click", function () {
        document.querySelector(".cartexpnd").classList.toggle("hidden");

        var clutter = "";
        cart.forEach(function (prod) {
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                    <img class="w-full h-full object-cover" src="${prod.image}" />
                </div>
                <div>
                    <h3 class="font-semibold">${prod.name}</h3>
                    <h5 class="text-sm font-semibold opacity-80">&#x20B9 ${prod.price}</h5>
                </div>
            </div>`;
        });
        document.querySelector(".cartexpnd").innerHTML = clutter;
    });
}



showCart();
addToCart();
addProducts();
addPopularProducts();
