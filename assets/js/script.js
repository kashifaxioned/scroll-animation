/* Author: 

*/

let boxes = document.querySelectorAll(".box")

let obersrver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("reveal", entry.isIntersecting);
    })
}, { threshold: .5 })

boxes.forEach(box => {
    obersrver.observe(box)
})











