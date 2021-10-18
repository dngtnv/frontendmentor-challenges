const body = document.querySelector('body');
const navLinks = document.querySelector('nav');
const overlay = document.querySelector('.hamburger-overlay');
const heroBackground = document.querySelector('.hero-bg');
const slideItem = document.querySelectorAll('.slide-item');
const background = ['hero_1', 'hero_2', 'hero_3'];
let isMoving = false;

const handleChange = direction => {
  isMoving = true;
  let index = 0;
  let currentIndex = 0;
  // Handle background changing
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
  // Handle text changing
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
    } else {
      el.classList.remove('active-item');
      el.removeAttribute('style');
    }
  });
};

// Event listener
heroBackground.addEventListener('transitionend', () => {
  isMoving = false;
});

document.querySelector('.prev').addEventListener('click', () => {
  if (isMoving) {
    return;
  }
  handleChange();
});
document.querySelector('.next').addEventListener('click', () => {
  if (isMoving) {
    return;
  }
  handleChange(1);
});

// Navigate the slider using keyboard
window.addEventListener('keyup', e => {
  if (isMoving) {
    return;
  }
  switch (e.key) {
    case 'ArrowLeft':
      handleChange();
      break;
    case 'ArrowRight':
      handleChange(1);
      break;
    default:
      break;
  }
});

// Hamburger button
document.querySelector('.open-btn').addEventListener('click', () => {
  navLinks.classList.add('open');
  overlay.classList.add('overlay_visible');
  body.classList.add('nav-open-noscroll');
});
document.querySelector('.close-btn').addEventListener('click', () => {
  navLinks.removeAttribute('class');
  overlay.classList.remove('overlay_visible');
  body.removeAttribute('class');
});
overlay.addEventListener('click', () => {
  navLinks.removeAttribute('class');
  overlay.classList.remove('overlay_visible');
  body.removeAttribute('class');
});
