// Selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

// I copied the source code below from the internet

/* It's not working for some reasons...??
window.addEventListener('scroll', funtion() {
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('active', windowPosition);
})
*/

hamburgerMenu.addEventListener('click', function () {
  header.classList.toggle('menu-open');
})
