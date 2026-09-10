// =========================
// Mobile Menu
// =========================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});


// =========================
// Close Menu After Clicking
// =========================

const navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });

});


// =========================
// Navbar Scroll Effect
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});