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
});
