"use strict";

// SHOW SCROLL TOP
function scrollTop() {
  const scrollTop = document.getElementById("scroll");
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

// MOBILE MENU
const navSlide = () => {
  const toggle = document.querySelector(".nav__toggle");
  const nav = document.querySelector(".nav__list");

  nav.addEventListener("click", () => {
    nav.classList.remove("nav__list-active");
  });

  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav__list-active");
  });
};

navSlide();
