// Make a rectangle and when we move mouse on that rectangle on the left side we want to gradually change the color of that rectangle to red and when we move mouse to the right side we want to change the color to blue.


var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details) {
    var rectLoaction = rect.getBoundingClientRect();
    var insideRectVal = details.clientX - rectLoaction.left;

    if(insideRectVal < rectLoaction.width/2) {
        var redColor = gsap.utils.mapRange(0, rectLoaction.width/2, 255, 0, insideRectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
    });
    } else {
        var blueColor = gsap.utils.mapRange(rectLoaction.width/2, rectLoaction.width, 0, 255, insideRectVal);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
    });
    }
});

rect.addEventListener("mouseleave", function() {
    gsap.to(rect, {
        backgroundColor: "black",
        ease: Power4,
    });
});