// Selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

// I copied the source code below from the internet


window.onscroll = function() {
  var top = window.scrollY
  console.log(top);
  if (top >= 10) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

}


hamburgerMenu.addEventListener('click', function () {
  header.classList.toggle('menu-open');
})
