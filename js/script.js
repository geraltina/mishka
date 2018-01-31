var menuButton = document.querySelector('.menu-button');
var mainNav = document.querySelector('.main-nav');

menuButton.classList.remove('menu-button--no-js');
mainNav.classList.remove('main-nav--no-js');

menuButton.addEventListener('click', function () {
  if (menuButton.classList.contains('menu-button--closed')) {
    menuButton.classList.remove('menu-button--closed');
    menuButton.classList.add('menu-button--opened');
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    menuButton.classList.add('menu-button--closed');
    menuButton.classList.remove('menu-button--opened');
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});
