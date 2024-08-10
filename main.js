const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
document.getElementById('menu-btn').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('open');
});


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container img", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".project__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".experience__list li", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".footer__container h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".footer__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".footer__container .mail__to", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".footer__socials", {
  ...scrollRevealOption,
  delay: 1500,
});

document.getElementById('experience-btn').addEventListener('click', function() {
  document.getElementById('experience').classList.add('active');
  document.getElementById('education').classList.remove('active');
  this.classList.add('active');
  document.getElementById('education-btn').classList.remove('active');
});

document.getElementById('education-btn').addEventListener('click', function() {
  document.getElementById('education').classList.add('active');
  document.getElementById('experience').classList.remove('active');
  this.classList.add('active');
  document.getElementById('experience-btn').classList.remove('active');
});



document.addEventListener('DOMContentLoaded', function() {
  const experienceBtn = document.getElementById('experience-btn');
  const educationBtn = document.getElementById('education-btn');
  const experienceSection = document.getElementById('experience');
  const educationSection = document.getElementById('education');

  // Show experience section by default
  experienceSection.classList.add('active');
  experienceBtn.classList.add('active');

  experienceBtn.addEventListener('click', function() {
    experienceSection.classList.add('active');
    educationSection.classList.remove('active');
    experienceBtn.classList.add('active');
    educationBtn.classList.remove('active');
  });

  educationBtn.addEventListener('click', function() {
    educationSection.classList.add('active');
    experienceSection.classList.remove('active');
    educationBtn.classList.add('active');
    experienceBtn.classList.remove('active');
  });
});

