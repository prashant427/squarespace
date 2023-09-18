
var tl = gsap.timeline()


tl.from("nav img , h3 ,h4,button",{
    y:-100 ,
    duration:1,
    // delay:1,
    opacity:0,
    stagger:0.2,
})

tl.from("#main h1",{
    y:200,
    opacity:0,
    duration:1,
})
tl.from("#main > img ",{
    scale:0,
    opacity:0,
    stagger:0.3,
    duration:1,
})
tl.from("#main > h5 ",{
    scale:0,
    opacity:0,
})
tl.to("#main > h5",{
    y:20,
    repeat:-1,
    yoyo:true,
})


