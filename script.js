const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");
const indicator = document.querySelector(".indicator");

indicator.style.display = "none";

menuBtn.addEventListener("click", function () {
  menu.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  menu.classList.remove("active");
  overlay.classList.remove("active");
});
