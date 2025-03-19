var tl = gsap.timeline()

tl.from("h2", {
    y: -20,
    opacity: 0,
    duration: .8,
    delay: 0.2
})

tl.from("h4", {
    y: -20,
    opacity: 0,
    duration: .8,
    stagger: 0.2
})

tl.from("h1", {
    y: 20,
    opacity: 0,
    duration: .8
})