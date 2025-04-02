// Build a simple website with GSAP animations and ScrollTrigger.

function section1Animation() {
    var tl = gsap.timeline();

    tl.from("nav h1, nav h4, nav button", {
        y: -30,
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        stagger: 0.1,
        ease: "power2.out"
    });

    tl.from(".center", {
        y: -30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out"
    },"-=0.5");

    tl.from(".section1bottom img", {
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out"
    },"-=0.5");
}

section1Animation();

function section2Animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            start: "top 70%",
            end: "top -10%",
            scrub: 2,
            markers: false,
        }
    });
    
    tl2.from(".services", {
        y: 30,
        opacity: 0,
        duration: 0.5
    });
    
    tl2.from(".elem.line11", {
        x: -100,
        opacity: 0,
        duration: 1
    }, "anim");
    
    tl2.from(".elem.line12", {
        x: 100,
        opacity: 0,
        duration: 1
    }, "anim");
    
    tl2.from(".elem.line21", {
        x: -100,
        opacity: 0,
        duration: 1
    }, "anim2");
    
    tl2.from(".elem.line22", {
        x: 100,
        opacity: 0,
        duration: 1
    }, "anim2");
}

section2Animation();

