import { checkEmail } from "./components/checkEmail.js";
import { checkLength } from "./components/checkLength.js";

const menuIcon = document.querySelector("#menu-icon");
const navItems = document.querySelector(".nav-list");
const contactButton = document.querySelector(".cta-contact");
const formError = document.querySelector(".form-error");

const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

menuIcon.addEventListener("click", navMenu);
navItems.addEventListener("click", navMenu);
contactButton.addEventListener("click", validateForm);

function navMenu() {
   menuIcon.classList.toggle("fa-xmark");
   navItems.classList.toggle("show-nav");
}

function validateForm() {
   event.preventDefault();
   if(checkLength(fullName.value, 5) && checkEmail(email.value) && checkLength(message.value, 15)) {
      contactButton.classList.add("form-success");
      contactButton.innerHTML = "Email sent";
      formError.innerHTML = "";
   } else {
      formError.innerHTML = "One or more fields were incorrect, please try again";
   }
}

ScrollReveal({
   reset: true,
   distance: '60px',
   duration: 2500,
   delay: 400
});

ScrollReveal().reveal('.hero-heading, .section-header', { delay: 200, origin: 'left'});
ScrollReveal().reveal('.hero-image', { delay: 300, origin: 'right'});
ScrollReveal().reveal('.project-card', {delay: 500, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.about-info', {delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.skills, .about-section__content .vertical-line', {delay: 500, origin: 'left'});

ScrollReveal().reveal('.contact-form, .contact-section__content .vertical-line', {delay: 400, origin: 'right'});
ScrollReveal().reveal('.contact-icons i, .contact-icons h3', {delay: 500, origin: 'left', interval: 100});