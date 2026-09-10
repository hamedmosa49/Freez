const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");


// فتح وإغلاق قائمة الموبايل
menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});


// إغلاق القائمة بعد الضغط على أي رابط
const navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});


// تغيير شكل الـNavbar عند النزول في الصفحة
window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});