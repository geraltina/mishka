var menuButton = document.querySelector('.menu-button');
var mainNav = document.querySelector('.menu');

menuButton.classList.remove('menu-button--no-js');
mainNav.classList.remove('menu--no-js');

menuButton.addEventListener('click', function () {
  if (menuButton.classList.contains('menu-button--closed')) {
    menuButton.classList.remove('menu-button--closed');
    menuButton.classList.add('menu-button--opened');
    mainNav.classList.remove('menu--closed');
    mainNav.classList.add('menu--opened');
  } else {
    menuButton.classList.add('menu-button--closed');
    menuButton.classList.remove('menu-button--opened');
    mainNav.classList.add('menu--closed');
    mainNav.classList.remove('menu--opened');
  }
});
