// When we move mouse to left side make the rectangle slow down the more mouse reaches to the left and do the same when mouse goes to the right side.


window.addEventListener("mousemove", function(details) {
    var rect = document.querySelector('#rect');

    var xVal = gsap.utils.mapRange(0, window.innerWidth, 200+rect.getBoundingClientRect().width/2, window.innerWidth - (200+rect.getBoundingClientRect().width/2), details.clientX);
    
    gsap.to('#rect',{
        left: xVal + "px",
        ease: Power3,
    });
});