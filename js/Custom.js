$(document).ready(function () {
  const $menuIconBox = $("header .container .menu-icon");
  const $menuIcon = $("header .container .menu-icon img");
  const $navMenu = $("header .container .navList");
  const $userBox = $("header .container .user-info");
  const $userMenu = $("header .container .user-info .user-menu");
  const $dateInput = $(
    ".org-register-page .org-register-container .org-register-form .form-section .section-form-body .form-inputs-container .input-group input[type=date]"
  );
  const $dateIcon = $(
    ".org-register-page .org-register-container .org-register-form .form-section .section-form-body .form-inputs-container .input-group .dateIcon"
  );
  const $loginPasswordInput = $(
    '.login-page .auth-container .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group [type="password"]'
  );
  const $loginPasswordIcon = $(
    ".login-page .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group .passwordIcon"
  );
  const $registerPasswordInput = $(
    '.register-page .auth-container .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group [type="password"]'
  );
  const $registerPasswordIcon = $(
    ".register-page .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group .passwordIcon"
  );
  const $resetPasswordInput = $(
    '.reset-page .auth-container .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group.reset-password [type="password"]'
  );
  const $resetPasswordIcon = $(
    ".reset-page .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group.reset-password .passwordIcon"
  );
  const $confirmResetPasswordInput = $(
    '.auth-page .auth-container .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group.confirm-password [type="password"]'
  );
  const $confirmResetPasswordIcon = $(
    ".reset-page .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group.confirm-password .passwordIcon"
  );
  const $registerForm = $(
    ".auth-page .auth-container .auth-form-container .auth-form"
  );
  const $orgEditWizardTags = $(
    ".org-edit-page .org-edit-section-container .org-edit-section-content .org-edit-wizard .wizard-tag"
  );
  const $registerWizardTags = $(
    ".register-page .auth-container .auth-form-container .register-form .register-wizard .wizard-tag"
  );
  const $orgRegisterWizardTags = $(
    ".org-register-page .org-register-container .org-register-form .register-wizard .wizard-tag"
  );
  const $modalWizardTags = $(
    ".modal .modalBox .modalForm .modal-wizard .wizard-tag"
  );
  // Toggle nav menu
  $menuIconBox.on("click", function () {
    $navMenu.toggleClass("open");
    $menuIcon.attr(
      "src",
      $navMenu.hasClass("open")
        ? "assets/menu-open.png"
        : "assets/menu-close.png"
    );
  });
  // Toggle user menu
  $userBox.on("click", function () {
    $userMenu.toggleClass("open");
  });
  // Open date input on icon click
  $dateIcon.on("click", function () {
    $dateInput.focus();
  });
  // Toggle showing passwords
  function togglePasswordVisibility($input, $icon) {
    $icon.on("click", function () {
      const type = $input.attr("type") === "text" ? "password" : "text";
      $input.attr("type", type);
    });
  }
  togglePasswordVisibility($loginPasswordInput, $loginPasswordIcon);
  togglePasswordVisibility($registerPasswordInput, $registerPasswordIcon);
  togglePasswordVisibility($resetPasswordInput, $resetPasswordIcon);
  togglePasswordVisibility(
    $confirmResetPasswordInput,
    $confirmResetPasswordIcon
  );
  // Handle wizard navigation
  function handleWizardNavigation($form, $wizardTags, prefix) {
    let currentFormWizard = 1;
    $form.hide();
    $(`#${prefix}-1`).css("display", "flex");
    $wizardTags.on("click", function () {
      $form.hide();
      const wizardId = $(this).data("wizard");
      $(`#${wizardId}`).css("display", "flex");
      currentFormWizard = parseInt(wizardId.split("-")[1]);
    });
    $form.each(function (index) {
      const $btn = $(this).find(".btn");
      const $backLink = $(this).find(".back-link");
      $btn.on("click", function () {
        $(`#${prefix}-${currentFormWizard}`).hide();
        if (currentFormWizard + 1 <= $form.length) {
          currentFormWizard++;
          $(`#${prefix}-${currentFormWizard}`).css("display", "flex");
        }
      });
      $backLink.on("click", function () {
        $(`#${prefix}-${currentFormWizard}`).hide();
        if (currentFormWizard - 1 >= 1) {
          currentFormWizard--;
          $(`#${prefix}-${currentFormWizard}`).css("display", "flex");
        }
      });
    });
  }
  handleWizardNavigation(
    $(".modal .modalBox .modalForm"),
    $modalWizardTags,
    "form"
  );
  handleWizardNavigation(
    $(".register-page .auth-container .auth-form-container .register-form"),
    $registerWizardTags,
    "form"
  );
  handleWizardNavigation(
    $(".org-register-page .org-register-container .org-register-form"),
    $orgRegisterWizardTags,
    "form"
  );
  handleWizardNavigation(
    $(".org-edit-page .org-edit-section-container .org-edit-section-content"),
    $orgEditWizardTags,
    "form"
  );
  // Main landing slider
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
  // Partners swiper
  const partenerSwiper = new Swiper(".partnersSlider", {
    slidesPerView: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      450: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      991: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    },
  });
  // News section swiper
  const newsSwiper = new Swiper(".swiper.news-content", {
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
      0: { slidesPerView: 1 },
      450: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      991: { slidesPerView: 4 },
    },
  });
  // Level form check inputs
  $(
    ".level-statistics-page .level-container .level-statistics-form .form-box-item"
  ).on("click", function (event) {
    if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
      const $item = $(this);
      const isQualified = event.target.id.endsWith("True");
      $item.toggleClass("qualified", isQualified);
      $item.toggleClass("not-qualified", !isQualified);
      $item
        .find('input[type="checkbox"]')
        .not(event.target)
        .prop("checked", false);
    }
  });
  // Admin dashboard interactions
  const $navMenuItem = $(".adminDashboardPage aside .asideNav > .navItem");
  const $navSubmenuItem = $(
    ".adminDashboardPage aside .asideNav .navItem .submenu .submenuItem"
  );
  const $asideIcon = $(".adminDashboardPage aside .asideIcon");
  const $headerAsideIcon = $(
    ".adminDashboardPage .dashboardMain .dashboardHeader .headerAsideIcon"
  );
  const $submenus = $(".adminDashboardPage aside .asideNav .navItem .submenu");
  const $notificationsIcon = $(
    ".adminDashboardPage .dashboardMain .dashboardHeader .notificationIcon"
  );
  const $dashboardUserBox = $(
    ".adminDashboardPage .dashboardMain .dashboardHeader .userBox"
  );
  const $notificationsMenu = $(
    ".adminDashboardPage .dashboardMain .dashboardHeader .notificationMenu"
  );
  const $dashboardUserMenu = $(
    ".adminDashboardPage .dashboardMain .dashboardHeader .dashboardUserMenu"
  );
  $(window).on("resize", function () {
    if ($(window)[0].innerWidth < 768) {
      $aside.removeClass("expand");
      $restPageFromAside.removeClass("shrink");
    }
  });
  const $aside = $(".adminDashboardPage aside");
  const $restPageFromAside = $(".adminDashboardPage .dashboardMain");
  // Toggle notification menu
  $notificationsIcon.on("click", function () {
    $notificationsMenu.toggleClass("open");
  });
  // Toggle user menu
  $dashboardUserBox.on("click", function () {
    $dashboardUserMenu.toggleClass("open");
  });
  // Toggle sidebar visibility
  $asideIcon.on("click", function () {
    $aside.toggleClass("expand");
    $restPageFromAside.toggleClass("shrink");
    if ($aside.hasClass("expand")) {
      $navMenuItem.children(".submenu").each(function () {
        $(this).removeClass("open");
      });
    }
  });
  // Toggle aside navigation from header
  $headerAsideIcon.on("click", function () {
    $aside.toggleClass("expand");
    $restPageFromAside.toggleClass("shrink");
  });
  // Toggle submenu
  $navMenuItem.on("click", function () {
    $(this).children(".submenu").slideToggle(500);
    $(this).toggleClass("open");
  });
  // toggle inner submenu
  $navSubmenuItem.on("click", function (e) {
    e.stopPropagation();
    $(this).children(".submenu").slideToggle(500);
    $(this).toggleClass("open");
  });

  //spinner
  $(".spinerLoader").delay(500).fadeOut(300);
});
