const menuToggle = document.querySelector('#mobile-menu');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
