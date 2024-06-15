// SCROLL SMOOTHER
gsap.registerPlugin(ScrollTrigger);

// TEXT SCROLL ANIMATIONS
window.addEventListener('DOMContentLoaded', (event) => {
  // Split text into spans
  const typeSplit = new SplitType('[text-split]', {
    types: 'lines, words',
    tagName: 'span',
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top bottom',
      onEnter: () => timeline.play(),
    });
  }

  $('[words-slide-up]').each(function (index) {
    const tl = gsap.timeline({ paused: true });
    tl.from($(this).find('.word'), {
      autoAlpha: 0,
      yPercent: 100,
      duration: 2,
      ease: 'expo.out',
      stagger: { amount: 0.05 },
    });
    createScrollTrigger($(this), tl);
  });

  // Avoid flash of unstyled content
  gsap.set('[text-split]', { autoAlpha: 1, delay: 0.1 });
});

// PAGE LOAD ANIMATIONS
const tl = gsap.timeline();
function init() {
  tl.from($('[page-top-text]').find('.word'), {
    autoAlpha: 0,
    yPercent: 100,
    duration: 2,
    ease: 'expo.out',
    stagger: { amount: 0.1 },
  })
    .from(
      '[fade-in]',
      {
        autoAlpha: 0,
        duration: 1,
      },
      '<0.25'
    )
    .from(
      '[fade-in-2]',
      {
        autoAlpha: 0,
        duration: 1,
      },
      '<0.25'
    );
}
window.addEventListener('DOMContentLoaded', function (event) {
  init();
});

// PAGE COLOR POWER-UP
window.addEventListener('DOMContentLoaded', (event) => {
  // attribute value checker
  function attr(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== 'string' || attrVal.trim() === '') return defaultVal;
    if (attrVal === 'true' && defaultValType === 'boolean') return true;
    if (attrVal === 'false' && defaultValType === 'boolean') return false;
    if (isNaN(attrVal) && defaultValType === 'string') return attrVal;
    if (!isNaN(attrVal) && defaultValType === 'number') return +attrVal;
    return defaultVal;
  }
  // pagecolor trigger
  $("[tr-pagecolor-element='trigger']").each(function (index) {
    // elements
    const triggerEl = $(this),
      targetEl = $('body');
    // settings
    const classSetting = attr('mode-2', triggerEl.attr('tr-pagecolor-class'));
    // result
    ScrollTrigger.create({
      trigger: triggerEl,
      start: 'top center',
      end: 'bottom center',
      onToggle: ({ self, isActive }) => {
        if (isActive) {
          targetEl.addClass(classSetting);
        } else {
          targetEl.removeClass(classSetting);
        }
      },
    });
  });
});

// slider-swiper
$('.slider-cards_component').each(function (index) {
  const fgSwiper = new Swiper($(this).find('.swiper.is-slider-cards')[0], {
    slidesPerView: 1,
    loop: true,
    speed: 800,
    keyboard: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: $(this).find('.swiper-next')[0],
      prevEl: $(this).find('.swiper-prev')[0],
    },
  });

  const bgSwiper = new Swiper($(this).find('.swiper.is-slider-bg')[0], {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    speed: 800,
  });

  fgSwiper.controller.control = bgSwiper;
});

// Play video only in view
const ambientVideo = document.getElementById('ambientVideo');

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        ambientVideo.play();
      } else {
        ambientVideo.pause();
      }
    });
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  }
);

// after confirming the element exists, look for the #ambientVideo when visible in viewport
if (ambientVideo) {
  io.observe(ambientVideo);
}
// Play video only in view END

//SCRAMBLE NAV MENU LINK
const typeSplit = new SplitType('.nav_link.is-login, .footer_link.is-login', {
  types: 'chars',
  tagName: 'span',
});

function getRandomLetter(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz*?><[]&@#)(%$';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

$('.char').each(function (index) {
  const text = $(this).text();
  $(this).attr('letter', text);
});

$('.nav_link.is-login, .footer_link.is-login').each(function (index) {
  function resetText() {
    if (myInterval !== undefined) {
      clearInterval(myInterval);
    }
    chars.each(function (index) {
      const letter = $(this).attr('letter');
      $(this).text(letter);
    });
  }

  let myInterval;
  const chars = $(this).find('.char');
  $(this).on('mouseenter', function () {
    let { length } = chars;
    myInterval = setInterval(function () {
      chars.each(function (index) {
        if (index < length) {
          const letter = getRandomLetter(1);
          $(this).text(letter);
        } else {
          const letter = $(this).attr('letter');
          $(this).text(letter);
        }
      });
      length = length - 1;
    }, 100);
    setTimeout(() => {
      resetText();
    }, 600);
  });
  $(this).on('mouseleave', function () {
    resetText();
  });
});
