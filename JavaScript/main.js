// ====== NAVIGATION ======
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navPosition = document.querySelector(".nav-position");
const navBar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navPosition.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
