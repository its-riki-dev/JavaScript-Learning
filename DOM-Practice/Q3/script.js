const throttleFunction=(func, delay)=>{ 
    let prev = 0; 
    return (...args) => { 
        let now = new Date().getTime(); 
        if(now - prev> delay) { 
            prev = now; 
            return func(...args); 
        } 
    } 
} 

document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets) => { 
    // Your less repetition code 
    var div = document.createElement("div");
    div.classList.add('imagediv');
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px';

    var img = document.createElement("img");
    img.setAttribute("src", "https://images.unsplash.com/photo-1738848392298-cf0b62edc750?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    div.appendChild(img);

    gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: 0.6
    });

    gsap.to(img, {
        y: "100%",
        ease: Power2,
        delay: 0.6
    });

    document.body.appendChild(div);
    setTimeout(function(){
        div.remove();
    },2000);
}, 400));