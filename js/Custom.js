$(document).ready(function () {
  const menuIconBox = document.querySelector(`header .container .menu-icon`);
  const menuIcon = document.querySelector(`header .container .menu-icon img`);
  const navMenu = document.querySelector(`header .container .navList`);
  const userBox = document.querySelector(`header .container .user-info`);
  const userMenu = document.querySelector(
    `header .container .user-info .user-menu`
  );
  const dateInput = document.querySelector(
    `.org-register-page .org-register-container .org-register-form .form-section .section-form-body .form-inputs-container .input-group input[type=date]`
  );
  const dateIcon = document.querySelector(
    `.org-register-page .org-register-container .org-register-form .form-section .section-form-body .form-inputs-container .input-group .dateIcon`
  );
  const loginPasswordInput = document.querySelector(
    `.login-page .auth-container .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group [type="password"]`
  );
  const loginPasswordIcon = document.querySelector(
    `.login-page .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group .passwordIcon`
  );
  const registerPasswordInput = document.querySelector(
    `.register-page .auth-container .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group [type="password"]`
  );
  const registerPasswordIcon = document.querySelector(
    `.register-page .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group .passwordIcon`
  );
  const resetPasswordInput = document.querySelector(
    `.reset-page .auth-container .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group.reset-password [type="password"]`
  );
  const resetPasswordIcon = document.querySelector(
    `.reset-page .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group.reset-password .passwordIcon`
  );
  const confirmResetPasswordInput = document.querySelector(
    `.auth-page .auth-container .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group.confirm-password [type="password"]`
  );
  const confirmResetPasswordIcon = document.querySelector(
    `.reset-page .auth-form-container .auth-form .auth-form-body .form-inputs-container .input-group.confirm-password .passwordIcon`
  );
  const registerForm = document.querySelectorAll(
    `.auth-page .auth-container .auth-form-container .auth-form`
  );
  const orgEditWizardTags = document.querySelectorAll(
    `.org-edit-page .org-edit-section-container .org-edit-section-content .org-edit-wizard .wizard-tag`
  );
  const registerWizardTags = document.querySelectorAll(
    `.register-page .auth-container .auth-form-container .register-form .register-wizard .wizard-tag`
  );
  const orgRegisterWizardTags = document.querySelectorAll(
    `.org-register-page .org-register-container .org-register-form .register-wizard .wizard-tag`
  );

  // toggle opening the nav menu
  menuIconBox?.addEventListener("click", function () {
    if (navMenu?.classList.contains("open")) {
      navMenu.classList.remove("open");
      menuIcon.src = "assets/menu-close.png";
    } else {
      navMenu.classList.add("open");
      menuIcon.src = "assets/menu-open.png";
    }
  });

  // toggle opening the user menu
  userBox?.addEventListener("click", function () {
    if (userMenu?.classList.contains("open")) {
      userMenu.classList.remove("open");
    } else {
      userMenu.classList.add("open");
    }
  });

  // open the date input by clicking the icon
  dateIcon?.addEventListener("click", function () {
    dateInput.focus();
  });

  // toggle showing password at register
  registerPasswordIcon?.addEventListener("click", function () {
    if (registerPasswordInput?.getAttribute("type") === "text") {
      registerPasswordInput.setAttribute("type", "password");
    } else if (registerPasswordInput?.getAttribute("type") === "password") {
      registerPasswordInput.setAttribute("type", "text");
    }
  });

  // toggle showing password at login
  loginPasswordIcon?.addEventListener("click", function () {
    if (loginPasswordInput?.getAttribute("type") === "text") {
      loginPasswordInput.setAttribute("type", "password");
    } else if (loginPasswordInput?.getAttribute("type") === "password") {
      loginPasswordInput.setAttribute("type", "text");
    }
  });

  // toggle showing password at reset
  resetPasswordIcon?.addEventListener("click", function () {
    console.log(resetPasswordInput);
    if (resetPasswordInput?.getAttribute("type") === "text") {
      resetPasswordInput.setAttribute("type", "password");
    } else if (resetPasswordInput?.getAttribute("type") === "password") {
      resetPasswordInput.setAttribute("type", "text");
    }
  });

  // toggle showing confirm password at reset
  confirmResetPasswordIcon?.addEventListener("click", function () {
    if (confirmResetPasswordInput?.getAttribute("type") === "text") {
      confirmResetPasswordInput.setAttribute("type", "password");
    } else if (confirmResetPasswordInput?.getAttribute("type") === "password") {
      confirmResetPasswordInput.setAttribute("type", "text");
    }
  });

  // register forms wizards
  let currentRegisterFormWizard = 1;
  $(
    ".register-page .auth-container .auth-form-container .register-form"
  )?.hide();
  $(".register-page #form-" + currentRegisterFormWizard).css("display", "flex");

  $(`.register-page #form-1 span.btn`).click(function () {
    $(".register-page #form-" + currentRegisterFormWizard).hide();
    if (
      currentRegisterFormWizard + 1 <=
      $(`.register-page .auth-container .auth-form-container .register-form`)
        .length
    ) {
      currentRegisterFormWizard++;
      $(".register-page #form-" + currentRegisterFormWizard).css(
        "display",
        "flex"
      );
    }
  });

  $(`.register-page #form-2 .back-link`).click(function () {
    $(".register-page #form-" + currentRegisterFormWizard).hide();
    if (currentRegisterFormWizard - 1 >= 1) {
      currentRegisterFormWizard--;
      $(".register-page #form-" + currentRegisterFormWizard).css(
        "display",
        "flex"
      );
    }
  });

  registerWizardTags.forEach((tag) => {
    tag.addEventListener("click", function () {
      $(
        ".register-page .auth-container .auth-form-container .register-form"
      )?.hide();
      $(".register-page #" + tag.getAttribute("data-wizard")).css(
        "display",
        "flex"
      );
      currentRegisterFormWizard = +tag
        .getAttribute("data-wizard")
        .split("-")[1];
    });
  });

  // org edit wizard navigation
  $(
    `.org-edit-page .org-edit-section-container .org-edit-section-content`
  ).hide();
  $(
    `.org-edit-page .org-edit-section-container .org-edit-section-content#form-1`
  ).css("display", "flex");
  orgEditWizardTags.forEach((tag) => {
    tag.addEventListener("click", function () {
      $(
        `.org-edit-page .org-edit-section-container .org-edit-section-content`
      ).hide();
      $(
        `.org-edit-page .org-edit-section-container .org-edit-section-content#${tag.getAttribute(
          "data-wizard"
        )}`
      ).css("display", "flex");
    });
  });

  // org register form wizards
  let currentORGRegisterFormWizard = 1;
  $(".org-register-page .org-register-container .org-register-form").hide();
  $(".org-register-page #form-" + currentORGRegisterFormWizard).css(
    "display",
    "flex"
  );

  $(
    `.org-register-page .org-register-container .org-register-form span.btn`
  )?.click(function () {
    $(".org-register-page #form-" + currentORGRegisterFormWizard).hide();
    if (
      currentORGRegisterFormWizard + 1 <=
      $(`.org-register-page .org-register-container .org-register-form`).length
    ) {
      currentORGRegisterFormWizard++;
      $(".org-register-page #form-" + currentORGRegisterFormWizard).css(
        "display",
        "flex"
      );
    } else {
      $(".org-register-page #form-" + currentORGRegisterFormWizard).css(
        "display",
        "flex"
      );
    }
  });

  $(
    `.org-register-page .org-register-container .org-register-form .back-link`
  )?.click(function () {
    $(".org-register-page #form-" + currentORGRegisterFormWizard).hide();
    if (currentORGRegisterFormWizard - 1 >= 1) {
      currentORGRegisterFormWizard--;
      $(".org-register-page #form-" + currentORGRegisterFormWizard).show();
    }
  });

  orgRegisterWizardTags.forEach((tag) => {
    tag.addEventListener("click", function () {
      $(
        ".org-register-page .org-register-container .org-register-form"
      )?.hide();
      $(".org-register-page #" + tag.getAttribute("data-wizard")).css(
        "display",
        "flex"
      );
      currentORGRegisterFormWizard = +tag
        .getAttribute("data-wizard")
        .split("-")[1];
    });
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

// Add measurment chart
let measurmentOptions = {
  series: [
    {
      name: "مستوى التطبيق",
      data: [31, 40, 28, 51, 42, 90, 100],
    },
    {
      name: "مستوى الفاعلية",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "مستوى الوجود",
      data: [15, 11, 32, 18, 9, 24, 11],
    },
  ],
  chart: {
    height: 350,
    width: "100%",
    type: "area",
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 1500,
      animateGradually: {
        enabled: true,
        delay: 300,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 1000,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "category",
    categories: [
      "البنية التحتية و التقنية",
      "التفعيل المجتمعي والتطوع",
      "إدارة العلاقات والاتصال المؤسسي",
      "إدارة الموارد البشرية",
      "الاستدامة المالية",
      "التنظيم المالي",
      "إدارة المشاريع والعمليات",
      "حوكمة المنظمة وإدارة المخاطر والالتزام",
      "إدارة الاستراتيجية والأداء",
    ],
  },
  yaxis: {
    opposite: true,
    labels: {
      formatter: function (value) {
        return value + "%";
      },
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "%";
      },
    },
  },
  colors: ["#F9C74F", "#2D9CDB", "#F94144"],
  fill: {
    opacity: 0.8,
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.75,
      opacityTo: 0.75,
      stops: [0, 100],
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "center",
    floating: true,
    offsetY: -25,
    offsetX: -5,
  },
};

let measurmentChart = new ApexCharts(
  document.querySelector("#measurment-chart"),
  measurmentOptions
);
measurmentChart?.render();

// Add supply & demands chart
let supplyDemandsOptions = {
  series: [
    {
      data: ["55%", "22%", "40%", "84%", "60%", "28%", "13%", "75%", "80%"],
    },
  ],
  chart: {
    height: 350,
    type: "bar",
  },
  colors: ["#1D968F"],
  plotOptions: {
    bar: {
      columnWidth: "15px",
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: [
      ["إدارة الاستراتيجية والأداء"],
      ["حوكمة المنظمة وإدارة المخاطر والالتزام"],
      ["التنظيم المالي"],
      ["إدارة العلاقات والاتصال المؤسسي"],
      ["التفعيل المجتمعي والتطوع"],
      ["إدارة المشاريع والعمليات"],
      ["البنية التحتية و التقنية"],
      ["الاستدامة المالية"],
      ["إدارة الموارد البشرية"],
    ],
    labels: {
      style: {
        colors: ["#666B88"],
        fontSize: "13px",
        fontFamily: "MadaniArabic-Regular",
        fontWeight: "400",
      },
    },
  },
};

let supplyDemandsChart = new ApexCharts(
  document.querySelector("#supply-demands-chart"),
  supplyDemandsOptions
);
supplyDemandsChart?.render();

const levelFormCheckInputs = document.querySelectorAll(
  `.level-statistics-page .level-container .level-statistics-form .form-box .form-box-item .input-group input`
);

function updateQualifiedInputs() {
  levelFormCheckInputs?.forEach((input) => {
    if (
      input.parentNode.parentNode.parentElement.classList.contains("qualified")
    ) {
      if (input.parentNode.classList.contains("qualified-input")) {
        input.checked = true;
      } else if (input.parentNode.classList.contains("not-qualified-input")) {
        input.checked = false;
      }
    } else if (
      input.parentNode.parentNode.parentElement.classList.contains(
        "not-qualified"
      )
    ) {
      if (input.parentNode.classList.contains("qualified-input")) {
        input.checked = false;
      } else if (input.parentNode.classList.contains("not-qualified-input")) {
        input.checked = true;
      }
    }
  });
}

const levelFormBtnsContainerItems = document.querySelectorAll(
  `.level-statistics-page .level-container .level-statistics-form .form-box .form-box-item .item-btns-container`
);

levelFormBtnsContainerItems?.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.parentElement.classList.contains("not-qualified")) {
      item.parentElement.classList.remove("not-qualified");
      item.parentElement.classList.add("qualified");
      updateQualifiedInputs();
    } else if (item.parentElement.classList.contains("qualified")) {
      item.parentElement.classList.remove("qualified");
      item.parentElement.classList.add("not-qualified");
      updateQualifiedInputs();
    }
  });
});

const submenuIcons = document.querySelectorAll(
  `.adminDashboardPage aside .asideNav .navItem .submenuIcon`
);

const asideIcon = document.querySelector(
  `.adminDashboardPage aside .asideIcon`
);

const headerAsideIcon = document.querySelector(
  `.adminDashboardPage .dashboardMain .dashboardHeader .headerAsideIcon`
);

const submenus = document.querySelectorAll(
  `.adminDashboardPage aside .asideNav .navItem .submenu`
);

const notificationsIcon = document.querySelector(
  `.adminDashboardPage .dashboardMain .dashboardHeader .notificationAndUserBox .notificationIcon`
);

const dashboardUserBox = document.querySelector(
  `.adminDashboardPage .dashboardMain .dashboardHeader .notificationAndUserBox .userBox`
);

const notificationsMenu = document.querySelector(
  `.adminDashboardPage .dashboardMain .dashboardHeader .notificationAndUserBox .notificationMenu`
);

const dashboardUserMenu = document.querySelector(
  `.adminDashboardPage .dashboardMain .dashboardHeader .notificationAndUserBox .dashboardUserMenu`
);

notificationsIcon?.addEventListener("click", function () {
  notificationsMenu?.classList.toggle("open");
});

dashboardUserBox?.addEventListener("click", function () {
  dashboardUserMenu?.classList.toggle("open");
  if (dashboardUserMenu?.classList.contains("open")) {
    dashboardUserBox.classList.add("clicked");
  } else {
    dashboardUserBox.classList.remove("clicked");
  }
})

submenuIcons?.forEach((icon) => {
  icon.addEventListener("click", function () {
    icon.parentNode.classList.toggle("open");
  });
});

const aside = document.querySelector(`.adminDashboardPage aside`);

function hideSubmenu() {
  if (aside?.classList.contains("shrink")) {
    submenus?.forEach((menu) => {
      if (menu.parentNode.classList.contains("open")) {
        menu.parentNode.classList.remove("open");
      }
    });
  }
}

let asideWasShrinked = false;

aside?.addEventListener("mouseenter", function () {
  if (aside.classList.contains("shrink")) {
    aside.classList.remove("shrink");
    hideSubmenu();
  }
});

hideSubmenu();

document.addEventListener("resize", hideSubmenu);

asideIcon?.addEventListener("click", function () {
  aside?.classList.toggle("shrink");
  hideSubmenu();
});

headerAsideIcon?.addEventListener("click", function () {
  aside?.classList.toggle("open");
});

updateQualifiedInputs();
