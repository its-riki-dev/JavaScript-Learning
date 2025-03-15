// Async await is a way to write asynchronous code in a synchronous way. It is a syntactic sugar over promises. It is a way to write promises in a more readable way.

// koi bhi esa function jisme hum async code likhenge, kyoki async code hai toh hum promises ka istemal kar sakte hai, jab uska answer aayega humko then() lagana pardega, us then() ko lagaane se bachne kelia, hum async await ka use karte hai.



// Example 1   

async function abcd() {
    let raw = await fetch('https://randomuser.me//api/')
    let ans = await raw.json()
    console.log(ans)
}




// If i don't use async await then i have to write this code like this -

//function abcd() {
//    fetch('https://randomuser.me//api/')
//       .then(function(raw) {
//        return raw.json()
//    })
//    .then(function(data) {
//        console.log(data)
//    })
//}


abcd();




// koi bhi code async hai toh humko uske liya wait karna padta hai kyoki humein nahi pata uska answer kab aayega, toh hum async await ka use karte hai.