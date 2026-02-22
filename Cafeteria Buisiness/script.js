const navLinks = document.querySelector(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle Mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the cross button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        // Close menu when any menu item is clicked
        menuOpenButton.click();
    });
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    grabCursor: true,
    spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0:{
        slidesPerView: 1
    },
    768:{
        slidesPerView: 2
    },
    1024:{
        slidesPerView: 3
    },
  }
});
