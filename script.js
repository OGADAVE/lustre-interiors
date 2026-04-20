document.addEventListener("DOMContentLoaded", () => {

  // ===== LOADER =====
  const loader = document.getElementById("loader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "0.6s ease";

      setTimeout(() => {
        loader.style.display = "none";
      }, 600);
    }, 1500);
  });

  // ===== MOBILE MENU =====
  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // ===== ACTIVE LINK =====
  const links = document.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // SCROLL ANIMATION
  const elements = document.querySelectorAll('.fade-in');

  function reveal() {
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', reveal);
  reveal();

  
  // NAVBAR SCROLL EFFECT
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // TESTIMONIAL SLIDER
  let slides = document.querySelectorAll('.slide');
  let index = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }, 4000);
  }

  // FILTER SYSTEM
  window.filterSelection = function(category) {
    let items = document.querySelectorAll('.filter');

    items.forEach(item => {
      item.classList.remove('show');

      if (category === 'all' || item.classList.contains(category)) {
        item.classList.add('show');
      }
    });
  }

  filterSelection('all');

  // LIGHTBOX
  const images = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'block';
      lightboxImg.src = img.src;
    });
  });

  window.closeLightbox = function() {
    lightbox.style.display = 'none';
  }
});