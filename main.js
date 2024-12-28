// Swiper Initialization
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  });
  
  // Hamburger Menu Functionality
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const hamburger = document.getElementById('hamburger');
  
  // Toggle navigation menu on hamburger click
  hamburger.addEventListener('click', () => {
    if (window.innerWidth < 768) { // Check for small devices
      navMenu.classList.toggle('left-[0]'); // Toggle the menu
      hamburger.classList.toggle('ri-close-line'); // Show close icon
      hamburger.classList.toggle('ri-menu-4-line'); // Toggle back to hamburger icon
    }
  });
  
  // Close navigation menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768 && navMenu.classList.contains('left-[0]')) {
        navMenu.classList.remove('left-[0]'); // Hide the menu
        hamburger.classList.remove('ri-close-line'); // Reset to hamburger icon
        hamburger.classList.add('ri-menu-4-line');
      }
    });
  });
  