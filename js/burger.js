const headerMenu = document.querySelector('.header-menu');
const headerMenuIcon = document.querySelector('.header-menu__icon');
const mobile = document.querySelector('.mobile');

headerMenu.addEventListener('click', function() {
  headerMenuIcon.classList.toggle('active');
  mobile.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});