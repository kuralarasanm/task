
const menuToggle = document.querySelector('.menu-toggle');
const navbarList = document.querySelector('.navbar-list');
const navbarListEnd = document.querySelector('.navbar-list-end');

menuToggle.addEventListener('click', () => {
    navbarList.classList.toggle('active');
    navbarListEnd.classList.toggle('active');
});


