document.querySelector('.menu-btn').addEventListener('click', () => {
    console.log('Abriendo el Menú de Selección...')
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase', { delay: 500});
ScrollReveal().reveal('.information', { delay: 500});
ScrollReveal().reveal('.final', { delay: 500});