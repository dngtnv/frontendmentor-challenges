const body = document.querySelector('body');
const navLinks = document.querySelector('nav');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.hamburger-overlay');
const heroBg = document.querySelector('.hero-bg');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const heroBackground = document.querySelector('.hero-bg');
const slideItem = document.querySelectorAll('.slide-item');
const heading = document.querySelector('.hero-heading');
const text = document.querySelector('.hero-text');

const background = ['hero_1', 'hero_2', 'hero_3'];

openBtn.addEventListener('click', () => {
  navLinks.classList.add('open');
  overlay.classList.add('overlay_visible');
  body.classList.add('nav-open-noscroll');
});
closeBtn.addEventListener('click', () => {
  navLinks.removeAttribute('class');
  overlay.classList.remove('overlay_visible');
  body.removeAttribute('class');
});
overlay.addEventListener('click', () => {
  navLinks.removeAttribute('class');
  overlay.classList.remove('overlay_visible');
  body.removeAttribute('class');
});

const handleChange = direction => {
  let index = 0;
  let currentIndex = 0;
  // handle background changing
  background.forEach(el => {
    if (heroBackground.classList.contains(el)) {
      currentIndex = background.indexOf(el);
    }
  });
  if (direction === 1) {
    index = (currentIndex + 1) % background.length;
  } else {
    currentIndex === 0 ? (index = background.length - 1) : (index = currentIndex - 1);
  }
  heroBackground.classList.remove(background[currentIndex]);
  heroBackground.classList.add(background[index]);
  // handle text changing
  slideItem.forEach(el => {
    let opacity = 0;
    if (parseInt(el.dataset.index) === index) {
      function fadeIn() {
        if (opacity < 1) {
          opacity += 0.5;
          setTimeout(function () {
            fadeIn();
          }, 100);
        }
        el.style.opacity = opacity;
      }
      fadeIn();
      el.classList.add('active-item');
      // el.style.display = 'list-item';
    } else {
      // el.style.display = 'none';
      el.classList.remove('active-item');
      el.removeAttribute('style');
    }
  });
};

prevBtn.addEventListener('click', () => {
  handleChange(-1);
});
nextBtn.addEventListener('click', () => {
  handleChange(1);
});

// Navigate the slider using keyboard
document.body.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      // arrow left
      handleChange(-1);
      break;
    case 39:
      // arrow right
      handleChange(1);
      break;
  }
};
