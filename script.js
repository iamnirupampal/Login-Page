var gs = gsap.timeline();
gs.from(".login",{
    x : -900,
    opacity: 0,
    delay: .5,
    duration:.4,

})
gs.from(["nav h1", "nav ul li "],{
    y:-200,
    duration: .5,
    stagger: .2,
})
gs.from([".login h1"],{
    x : -200,
    opacity: 0,
    duration:.3,
    stagger : .2,

})
gs.from("form label",{
    opacity: 0,
    duration:.3,
})
gs.from("form input",{
    x: 100,
    opacity: 0,
    duration:.3,
})
gs.from(["form button"],{
    y: 100,
    opacity: 0,
    duration:.3,
})
gs.from(".havean",{
    x: -100,
    opacity: 0,
    duration:.3,
})