
  document.addEventListener('DOMContentLoaded', function () {
    const openMenu = document.querySelector('.openMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    openMenu.addEventListener('click', () => {
      nav.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
      nav.classList.remove('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  });

