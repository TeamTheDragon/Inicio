const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('show');
});

ScrollReveal().reveal('.showcase', { delay: 300 });
ScrollReveal().reveal('.information', { delay: 300 });
ScrollReveal().reveal('.final', { delay: 300 });
