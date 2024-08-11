// Toggle navigation menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal animations
const scrollRevealOption = {
  distance: "400px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container img", { ...scrollRevealOption });
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__container p", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".header__btns", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".project__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".experience__list li", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".footer__container h2", { ...scrollRevealOption });
ScrollReveal().reveal(".footer__container p", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".footer__container .mail__to", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".footer__socials", { ...scrollRevealOption, delay: 1500 });

// Tab switching for Experience and Education sections
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
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav__links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.classList.remove('active'); // Close the menu when an item is clicked
  });
});