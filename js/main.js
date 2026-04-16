const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-list');

menu.addEventListener('click', function() {
    // Esto añade o quita la clase 'active' cada vez que haces clic
    menuLinks.classList.toggle('active');
});