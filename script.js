// script.js

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const menuItems = document.querySelectorAll('.menu-item a');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });

  menuItems.forEach(item => {
      item.addEventListener('mouseover', () => {
          item.classList.add('hover');
      });

      item.addEventListener('mouseout', () => {
          item.classList.remove('hover');
      });
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});
