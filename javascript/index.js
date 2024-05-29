let hamburger = document.querySelector(".hamburger");
let nav__links = document.querySelector(".nav__links");
let shopbtn = document.querySelector(".shopbtn")
let nsbutton = document.querySelector(".nsButton")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav__links.classList.toggle("active");
});

//Tar bort hamburgarmenyn 
document.querySelectorAll(".nav__links").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav__links.classList.remove("active");
  })
);

document.querySelector(".shopbtn").onclick = function () {
  window.location.href = "produktsida.html";
};

document.querySelector(".nsButton").onclick = function () {
  window.location.href = "produktsida.html";
};


