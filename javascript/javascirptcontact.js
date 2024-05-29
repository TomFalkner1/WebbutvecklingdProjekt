let form = document.getElementById("contact-form");
let popup = document.querySelector(".popup");

form.onsubmit = (event) => {
  event.preventDefault();

  popup.style.animation = "popup 4s 1";
  popup.style.visibility = "visible";

  setTimeout(() => {
    popup.style.visibility = "hidden";
    location.reload();
  }, 3900);
};
