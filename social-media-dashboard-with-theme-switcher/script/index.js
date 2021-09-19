const themeSwitchToggle = document.getElementById('theme-switch');
const body = document.querySelector('body');

themeSwitchToggle.addEventListener('click', () => {
  themeSwitchToggle.toggleAttribute('checked');
  document.body.classList.toggle('light-theme');
});
