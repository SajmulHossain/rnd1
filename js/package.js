// Initialize AOS with optimized settings
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
  });

  // Initialize ScrollOut with optimized settings
  ScrollOut({
    targets: ".dril-2, .dril-section-2",
  });

  // Initialize Swiper with optimized settings
  const swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    speed: 800,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
      },
    },
    on: {
      init: function () {
        updateCenteredSlide();
        document.body.style.overflowX = "hidden";
      },
      slideChangeTransitionEnd: function () {
        updateCenteredSlide();
      },
      resize: function () {
        updateCenteredSlide();
      },
    },
  });

  function updateCenteredSlide() {
    requestAnimationFrame(() => {
      document.querySelectorAll(".swiper-slide").forEach((slide) => {
        slide.classList.remove("centered");
      });
      const activeSlides = document.querySelectorAll(".swiper-slide-visible");
      const middleIndex = Math.floor(activeSlides.length / 2);
      if (activeSlides[middleIndex]) {
        activeSlides[middleIndex].classList.add("centered");
      }
    });
  }

  // Prevent horizontal scroll
  document.body.style.overflowX = "hidden";
});
