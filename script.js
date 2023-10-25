// JavaScript for responsive navigation
const nav = document.querySelector('nav ul');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
