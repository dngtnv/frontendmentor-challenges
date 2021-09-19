const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const navbar = document.querySelector('.nav-bar');
const hasInvisible = document.querySelectorAll('.invisible-element');

btnHamburger.addEventListener('click', function () {
  if (navbar.classList.contains('open')) {
    body.classList.remove('noscroll');
    navbar.classList.remove('open');
    hasInvisible.forEach(function (el) {
      el.classList.add('invisible-element');
    });
  } else {
    body.classList.add('noscroll');
    navbar.classList.add('open');
    hasInvisible.forEach(function (el) {
      el.classList.remove('invisible-element');
    });
  }
});
