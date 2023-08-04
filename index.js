document.addEventListener("DOMContentLoaded", function() {
// burger

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__nav');
const headerMenuItems = document.querySelectorAll('.header__nav-item');
let breaker = -1;

headerBurger.addEventListener('click', function() {

  headerBurger.classList.toggle('burger--active');
  headerMenu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');

  if (breaker) {
    document.querySelector('.hero__link').addEventListener('focus', function() {
      document.querySelector('.burger--active').focus();
    });
    breaker += 1;
  };

});

headerMenuItems.forEach(item => {
  item.addEventListener('click', function() {

    headerBurger.classList.remove('burger--active');
    headerMenu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');

  });
});

});
