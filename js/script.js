const menuIcon = document.querySelector("#menu-icon");
const navItems = document.querySelector(".nav-list");

menuIcon.onclick = function() {
   menuIcon.classList.toggle("fa-xmark");
   navItems.classList.toggle("show-nav");
}