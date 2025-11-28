import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { nav } from 'src/nav';
import Swiper from 'swiper/bundle';

import { lenisScroll } from './smoothScroll';

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);

  function isTablet(): boolean {
    return window.innerWidth <= 991; // Example breakpoint, adjust as necessary
  }

  function isMobile(): boolean {
    return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
  }
  //logo marquee swiper
  //marqueee
  const logoSwiper = new Swiper('#logo-Swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
      // when window width is >= 991px
      991: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
    },
    speed: 10000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
  });

  //logo marquee swiper
  //marqueee
  const testiSwiper1 = new Swiper('#testi-slide1', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 991px
      991: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
    },
    speed: 20000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
  });

  //logo marquee swiper
  //marqueee
  const testiSwiper2 = new Swiper('#testi-slide2', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 991px
      991: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
    },
    speed: 40000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: true,
    },
  });

  const ease = `power2.out`;

  ///cta hover animation
  const ctaHover = [...document.querySelectorAll('[cta-btn]')] as HTMLElement[];

  ctaHover.forEach((el) => {
    const ctaIcon = el.querySelector('.cta-icon') as HTMLElement;
    const ctaText = el.querySelector('.cta-tx') as HTMLElement;
    const ctaDivDrop = el.querySelector('.cta-drop') as HTMLElement;

    el.addEventListener('mouseover', (e) => {
      gsap.to(ctaDivDrop, {
        height: '100%',
        duration: 0.3,
        ease,
        overwrite: 'auto',
      });
      gsap.to(ctaIcon, {
        x: '8px',
        duration: 0.3,
        ease,
        overwrite: 'auto',
      });
    });

    el.addEventListener('mouseout', (e) => {
      gsap.to(ctaDivDrop, {
        height: '0px',
        duration: 0.3,
        ease,
        overwrite: 'auto',
      });
      gsap.to(ctaIcon, { x: '0', duration: 0.3, ease, overwrite: 'auto' });
    });
  });
  ///cta hover animation end

  //Home hero Video element scroll animation
  const videoSect = document.getElementById('video--sect') as HTMLElement;
  const videoEl = document.querySelector('[video-el]') as HTMLElement;
  const videoTl = gsap.timeline({
    scrollTrigger: {
      trigger: videoSect,
      start: 'top 85%',
      end: 'bottom 50%',
      //  markers: true,
      scrub: true,
      // pin: true,
    },
  });
  videoTl.to(videoEl, { y: 0, scale: 1, ease: 'power2.out' });

  ///scroll secton
  const scrollSect = document.getElementById('process') as HTMLElement;
  //scroll items
  const scrollItems = [...document.querySelectorAll('[scroll-item]')] as HTMLElement[];
  const scrollWrapper = document.querySelector('[scroll-wrapper]') as HTMLElement;

  const firstTabWidth = scrollItems[0].offsetWidth;

  //get the height of the scroll wrapper
  const scrollWrapperHeight = scrollWrapper.clientHeight;
  //get the width of the scroll wrapper
  //expander
  const expander = isMobile() ? 500 : 0;
  const scrollWrapperWidth = scrollWrapper.clientWidth + expander;

  const xLengthMbPortrait = firstTabWidth * (scrollItems.length - 0.8);
  const xLengthMb = firstTabWidth * (scrollItems.length - 0.9);

  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: scrollSect,
      start: isTablet() ? `top ${isMobile() ? 'top' : '5%'}` : 'top 5%',
      end: isTablet() ? `+=${scrollWrapperWidth}` : `+=${scrollWrapperHeight}px`,
      // markers: true,
      scrub: true,
      pin: true,

      onEnter: () => {
        isMobile() ? scrollSect.classList.add('pinned') : '';
      },
      onEnterBack: () => {
        isMobile() ? scrollSect.classList.add('pinned') : '';
      },
      onLeave: () => {
        isMobile() ? scrollSect.classList.remove('pinned') : '';
      },
      onLeaveBack: () => {
        isMobile() ? scrollSect.classList.remove('pinned') : '';
      },
    },
  });

  isTablet()
    ? scrollTl.to(scrollWrapper, { x: -xLengthMbPortrait, ease: 'none' })
    : scrollTl.to(scrollWrapper, { yPercent: -70, ease: 'none' });

  //ROI swiper
  const roi_swiper = new Swiper('#roi-desk-slide', {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      // when window width is >= 991px
      991: {
        slidesPerView: 1.7,
        spaceBetween: 32,
      },
    },
    speed: 750,
    navigation: {
      nextEl: '.roi-next-btn',
      prevEl: '.roi-prev-btn',
    },
  });

  const roi_swiper_mb = new Swiper('#roi-mobile-swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      // when window width is >= 991px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
    },
    speed: 600,
    navigation: {
      nextEl: '.next-btn-mb',
      prevEl: '.prev-btn-mb',
    },
  });

  //result swiper
  const res_Swiper = new Swiper('#result-swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    // cssMode: true,
    breakpoints: {
      // when window width is >= 991px
      991: {
        slidesPerView: 1.3,
        spaceBetween: 40,
      },
    },
    speed: 800,
    navigation: {
      nextEl: '.det-next--btn',
      prevEl: '.det-prev--btn',
    },
  });

  nav();
});
