const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


const toggler = document.querySelector('.header__toggler');
const nav = document.querySelector('.header__wrapper');
const user = document.querySelector('.header__user');

toggler.addEventListener('click', function () {
  if (toggler.classList.contains('header__toggler--open')) {
    toggler.classList.remove('header__toggler--open');
    toggler.classList.add('header__toggler--close');

    nav.classList.remove('header__wrapper--open');
    nav.classList.add('header__wrapper--close');
  }
  else {
    toggler.classList.add('header__toggler--open');
    toggler.classList.remove('header__toggler--close');

    nav.classList.add('header__wrapper--open');
    nav.classList.remove('header__wrapper--close');
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const dropdownParents = document.querySelectorAll('.header__item--arrow');
  dropdownParents.forEach(function(item) {
      const link = item.querySelector('.header__link');
      const dropdown = item.querySelector('.header__dropdown');
      link.addEventListener('click', function(e) {
          e.preventDefault(); 
          dropdownParents.forEach(function(parent) {
              const otherDropdown = parent.querySelector('.header__dropdown');
              if (otherDropdown !== dropdown) {
                  otherDropdown.classList.remove('show-dropdown');
              }
          });
          dropdown.classList.toggle('show-dropdown');
      });
  });
});