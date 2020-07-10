const header = document.querySelector(".site-header")
const title = document.querySelector("#site-title")
const bg = document.querySelector(".bg-image")

const tl = new TimelineMax()

tl.fromTo(header, 1.25, {y: "-75%", opacity: 0}, {y: "0%", opacity: 1, ease: Power2.easeInOut})
.fromTo(title, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeInOut}, "-=0.75")
.fromTo(bg, 1, {opacity: 0}, {opacity: 0.7, ease: Power2.easeInOut}, "-=1.25")
