$(document).ready(function () {
  let menuIconBox = document.querySelector(`header .container .menu-icon`);
  let menuIcon = document.querySelector(`header .container .menu-icon img`);
  let navMenu = document.querySelector(`header .container .navList`);

  menuIconBox.addEventListener("click", function () {
    if (navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
      menuIcon.src = "assets/menu-close.png";
    } else {
      navMenu.classList.add("open");
      menuIcon.src = "assets/menu-open.png";
    }
  });

  const mainSlider = new Swiper(".mainSlider", {
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    speed: 500,
    effect: "fade",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mainSliderPagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".mainSliderNext",
      prevEl: ".mainSliderPrev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  const partenerSwiper = new Swiper(".partnersSlider", {
    slidesPerView: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
      },
      "@0.75": {
        slidesPerView: 2,
      },
      "@1.00": {
        slidesPerView: 3,
      },
      "@1.50": {
        slidesPerView: 4,
      },
    },
  });

  var newsSwiper = new Swiper(".swiper.news-content", {
    navigation: {
      nextEl: ".NewsNext",
      prevEl: ".NewsPrev",
    },
    loop: true,
    spaceBetween: 12,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
});
