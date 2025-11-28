var resourcesLoaded = false;

function loadResources() {
  if (!resourcesLoaded) {
    resourcesLoaded = true;

    // Load Swiper CSS
    var swiperCSS = document.createElement('link');
    swiperCSS.rel = 'stylesheet';
    swiperCSS.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
    document.head.appendChild(swiperCSS);

    // Load Swiper JS
    var swiperScript = document.createElement('script');
    swiperScript.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    swiperScript.async = true;
    swiperScript.onload = function () {
      // Swiper Initialization
      var swiper = new Swiper('#slideImg', {
        effect: 'coverflow',
        speed: 600,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.next-btn',
          prevEl: '.prev-btn',
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        enabled: true,
        coverflowEffect: {
          rotate: 3,
          stretch: 0,
          depth: 160,
          modifier: 1.5,
          slideShadows: false,
        },
        loop: true,
      });
    };
    document.body.appendChild(swiperScript);
  }
}
// Trigger loadResources on first user interaction
window.addEventListener('scroll', loadResources, { once: true });
window.addEventListener('touchstart', loadResources, { once: true });
window.addEventListener('mousemove', loadResources, { once: true });

// // Truncate Text Scripts
// // Truncate Elements with Class 'truncate'
// document.querySelectorAll('.truncate').forEach(function (text) {
//     const textLength = 100;
//     if (text.innerHTML.length > textLength) {
//       text.innerHTML = text.innerHTML.substring(0, textLength) + '...';
//     }
//   });

//   // Truncate Elements with Class 'truncate-test' and Add "See More" Functionality
//   document.querySelectorAll('.truncate-test').forEach(function (text) {
//     const textLength = 140;
//     const fullText = text.innerHTML;
//     const seeMoreBtn = text.nextElementSibling;

//     if (
//       fullText.length > textLength &&
//       seeMoreBtn &&
//       seeMoreBtn.classList.contains('custom-see-more-btn')
//     ) {
//       const truncatedText = fullText.substring(0, textLength) + '...';
//       text.innerHTML = truncatedText;
//       seeMoreBtn.style.display = 'inline-block';

//       seeMoreBtn.addEventListener('click', function () {
//         if (text.innerHTML === truncatedText) {
//           text.innerHTML = fullText;
//           seeMoreBtn.textContent = 'See Less';
//         } else {
//           text.innerHTML = truncatedText;
//           seeMoreBtn.textContent = 'See More';
//         }
//       });
//     } else {
//       if (seeMoreBtn) seeMoreBtn.style.display = 'none';
//     }
//   });

const imgSlide = document.querySelector('#slideImg');
const swiper = new Swiper(imgSlide, {
  effect: 'coverflow',
  speed: 600,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  enabled: true,
  coverflowEffect: {
    rotate: 3,
    stretch: 0,
    depth: 160,
    modifier: 1.5,
    slideShadows: false,
  },
  loop: true,
});
