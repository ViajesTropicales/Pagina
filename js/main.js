const menu = document.querySelector('#mobile-menu'); const menuLinks =
document.querySelector('.nav-list'); 
// Función para abrir/cerrar al dar al botón
menu.addEventListener('click', function() {
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active'); }); 
// Función EXTRA: Cerrar elmenú al hacer clic en un enlace 
document.querySelectorAll('.nav-listli a').forEach(link => { link.addEventListener('click', () => {
menu.classList.remove('is-active');
menuLinks.classList.remove('active'); }); });