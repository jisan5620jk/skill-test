(function () {
  ("use strict");

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 700) {
      $(".header-area.style-2").addClass("sticky-header");
    } else {
      $(".header-area.style-2").removeClass("sticky-header");
    }
  });

  // menu button - start
  $(document).ready(function () {
    $(".close_btn, .cart_sidebar_overlay").on("click", function () {
      $(".cart_sidebar").removeClass("active");
      $(".cart_sidebar_overlay").removeClass("active");
    });

    $(".cart_btn").on("click", function () {
      $(".cart_sidebar").addClass("active");
      $(".cart_sidebar_overlay").addClass("active");
    });

    $(".cart_item .remove_btn").on("click", function () {
      $(this).closest(".cart_item").toggleClass("remove");
    });
  });

  // menu button - start
  $(document).ready(function () {
    $(".close_btn, .white_sidebar_overlay").on("click", function () {
      $(".white_sidebar").removeClass("active");
      $(".white_sidebar_overlay").removeClass("active");
    });

    $(".white_btn").on("click", function () {
      $(".white_sidebar").addClass("active");
      $(".white_sidebar_overlay").addClass("active");
    });

    $(".white_item .remove_btn").on("click", function () {
      $(this).closest(".white_item").toggleClass("remove");
    });
  });


  //tab

  $(document).ready(function () {
    const tabs = document.querySelectorAll(".tab-btn button");
    const all_content = document.querySelectorAll(".tab-content");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        tabs.forEach((tab) => {
          tab.classList.remove("active");
        });
        tab.classList.add("active");

        all_content.forEach((content) => {
          content.classList.remove("active");
        });
        all_content[index].classList.add("active");
      });
    });
  });

  // scroll up

  ////////////////////////////////////////////////////
  // 09. Sidebar Js
  $(".menu-bar").on("click", function () {
    $(".offcanvas").addClass("opened");
    $(".body-overlay").addClass("apply");
  });
  $(".close-btn").on("click", function () {
    $(".offcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });
  $(".body-overlay").on("click", function () {
    $(".offcanvas").removeClass("opened");
    $(".body-overlay").removeClass("apply");
  });

  ///////////////////////////////////////////////////
  // 02. SubMenu Dropdown Toggle
  let header_icon = `<span class="header-icon">
		<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="ht://www.w3.org/2000/svg">
		<path d="M6.04088 0L0.535156 4.125V11H4.26484V8.59381C4.26484 7.64165 5.05698 6.87506 6.04088 6.87506C7.02477 6.87506 7.81692 7.64165 7.81692 8.59381V11H11.5466V4.125L6.04088 0Z" fill="#FFB302"/></svg>                                
	</span>`;
  $(header_icon).insertBefore(".menu-icon nav ul .menu-icon-2");

  ////////////////////////////////////////////////////
  // 21.menu button - start
  $(document).ready(function () {
    $(".close_btn, .cart_sidebar_overlay").on("click", function () {
      $(".cart_sidebar").removeClass("active");
      $(".cart_sidebar_overlay").removeClass("active");
    });

    $(".cart_btn").on("click", function () {
      $(".cart_sidebar").addClass("active");
      $(".cart_sidebar_overlay").addClass("active");
    });

    $(".cart_item .remove_btn").on("click", function () {
      $(this).closest(".cart_item").toggleClass("remove");
    });
  });

  ////////////////////////////////////////////////////
  // 21.menu content - start
  if ($(".main-menu-content").length && $(".main-menu-mobile").length) {
    let navContent = document.querySelector(".main-menu-content").outerHTML;
    let mobileNavContainer = document.querySelector(".main-menu-mobile");
    mobileNavContainer.innerHTML = navContent;

    let arrow = $(".main-menu-mobile .has-dropdown > a");

    arrow.each(function () {
      let self = $(this);
      let arrowBtn = document.createElement("BUTTON");
      arrowBtn.classList.add("dropdown-toggle-btn");
      arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

      self.append(function () {
        return arrowBtn;
      });

      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("dropdown-opened");
        self.parent().toggleClass("expanded");
        self
          .parent()
          .parent()
          .addClass("dropdown-opened")
          .siblings()
          .removeClass("dropdown-opened");
        self.parent().parent().children(".submenu").slideToggle();
      });
    });
  }

  ////////////////////////////////////////////////////
  // 13. Swiper Js
  const brandSlider = new Swiper(".brand-slider", {
    // Optional parameters
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    slideToShow: 4,
    spaceBetween: 10,
    autoplay: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },

      a11y: false,
    },
    pagination: {
      el: ".brand-section .swiper-pagination",
      clickable: true,
    },
  });
})(jQuery);
