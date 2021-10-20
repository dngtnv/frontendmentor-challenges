const body = document.querySelector('body');
const navLinks = document.querySelector('nav');
const overlay = document.querySelector('.hamburger-overlay');
const slideBG = document.querySelector('.slide-bg');
const slideText = document.querySelectorAll('.slide-item');
let slideIndex = 1;
let isMoving = false;

moveSlides();
function moveSlides() {
  slideBG.style.transform = `translateX(-${slideIndex * 100}%)`;
}

const handleChange = direction => {
  isMoving = true;
  slideBG.style.transition = 'transform 400ms ease-in-out';
  direction !== 'right' ? (slideIndex -= 1) : (slideIndex += 1);
  moveSlides();
};

// Event listener
slideBG.addEventListener('transitionend', () => {
  isMoving = false;
  const slidesArr = [...slideBG.querySelectorAll('.bg-img')];
  if (slideIndex === 0) {
    slideBG.style.transition = 'none';
    slideIndex = slidesArr.length - 2;
    moveSlides();
  }
  if (slideIndex === slidesArr.length - 1) {
    slideBG.style.transition = 'none';
    slideIndex = 1;
    moveSlides();
  }
  slideText.forEach(el => {
    if (parseInt(el.dataset.index) === slideIndex) {
      el.style.opacity = 1;
      el.classList.add('active-item');
    } else {
      el.classList.remove('active-item');
      el.removeAttribute('style');
    }
  });
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
  handleChange('right');
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
      handleChange('right');
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
