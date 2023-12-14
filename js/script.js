const menuIcon = document.querySelector("#menu-icon");
const navItems = document.querySelector(".nav-list");

menuIcon.onclick = function() {
   menuIcon.classList.toggle("fa-xmark");
   navItems.classList.toggle("show-nav");
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

ScrollReveal().reveal('.contact-form', {delay: 400, origin: 'right'});
ScrollReveal().reveal('.contact-icons i, .contact-icons h3', {delay: 500, origin: 'left', interval: 100});