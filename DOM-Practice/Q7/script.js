// Build a Custom Cursor Animation with GSAP.

var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#imageDiv");

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.6,
    });
});

imageDiv.addEventListener("mouseenter", function() {
    cursor.innerHTML = "Click";
    gsap.to(cursor, {
        scale: 4,
        backgroundColor: "#ffffff8a"
    });
});

imageDiv.addEventListener("mouseleave", function() {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff"
    });
});