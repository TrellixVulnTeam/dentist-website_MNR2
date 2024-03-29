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

// STICKY NAVIGATION
const header = document.querySelector(".header");
const home = document.querySelector(".home");
const headerHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) header.classList.add("header__sticky");
  else header.classList.remove("header__sticky");
};

const homeObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

homeObserver.observe(home);

// SECTION ANIMATION ON SCROLL
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section__hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section__hidden");
});
