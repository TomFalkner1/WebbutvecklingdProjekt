let surfboard = document.getElementById("surfboard")
let surfboard1 = document.getElementById("surfboard1")
let surfboard2 = document.getElementById("surfboard2")
let surfboard3 = document.getElementById("surfboard3")
let wing = document.getElementById("wing")
let wing1 = document.getElementById("wing1")
let wing2 = document.getElementById("wing2")
let wing3 = document.getElementById("wing3")
let surfboardbtn = document.getElementById("surfboardbtn")
let wingbtn = document.getElementById("wingbtn")
let allabtn = document.getElementById("alla")


allabtn.onclick = function(event){
    wing.style.visibility = "visible"
    wing1.style.visibility = "visible"
    wing2.style.visibility = "visible"
    wing3.style.visibility = "visible"
    surfboard.style.visibility = "visible"
    surfboard1.style.visibility = "visible"
    surfboard2.style.visibility = "visible"
    surfboard3.style.visibility = "visible"
}

wingbtn.onclick = function(event){
    wing.style.visibility = "visible"
    wing1.style.visibility = "visible"
    wing2.style.visibility = "visible"
    wing3.style.visibility = "visible"
    surfboard.style.visibility = "hidden"
    surfboard1.style.visibility = "hidden"
    surfboard2.style.visibility = "hidden"
    surfboard3.style.visibility = "hidden"
}

surfboardbtn.onclick = function(event){
    surfboard.style.visibility = "visible"
    surfboard1.style.visibility = "visible"
    surfboard2.style.visibility = "visible"
    surfboard3.style.visibility = "visible"
    wing.style.visibility = "hidden"
    wing1.style.visibility = "hidden"
    wing2.style.visibility = "hidden"
    wing3.style.visibility = "hidden"
}
