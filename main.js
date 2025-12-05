const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('show');
});

ScrollReveal().reveal('.showcase', { delay: 300 });
ScrollReveal().reveal('.information', { delay: 300 });
ScrollReveal().reveal('.final', { delay: 300 });

// Botón volver arriba
const backToTopBtn = document.getElementById("backToTop");

// Mostrar botón al bajar
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

// Scroll suave hacia arriba
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});