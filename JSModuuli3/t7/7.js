
const trigger = document.querySelector("#trigger")
const pic = document.querySelector("#target")

function hov () {
  pic.src = "img/picB.jpg"
}
function leave () {
  pic.src = "img/picA.jpg"
}

trigger.addEventListener("mouseenter", hov)
trigger.addEventListener("mouseleave", leave)