const menu = document.querySelector('#btn-menu');
const menuLinks = document.querySelector('.navbar ul');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    });
});