// select hamburger icon
const hamburger = document.querySelector('.hamburger');
// select menu
const menu = document.querySelector('.menu');
// window size
// toggle css class open on click
hamburger.addEventListener('click', function() {
  if (menu.classList.contains('menu')) {
    // open menu
    menu.classList.toggle('open');
  }
});

window.addEventListener('resize', function() {
  menu.classList.remove('open');
});
