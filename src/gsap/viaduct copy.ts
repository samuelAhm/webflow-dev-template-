import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { nav } from 'src/nav_new';
import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  nav();

  ///split text and animate individual chars
  const typeSplit = new SplitType('[slide-text]', {
    types: 'word chars',
    tagName: 'span',
  });

  const animDurationTime = 0.3;
  const animDelay = 1; //duration at which the text will be visible before leaving the screen
  const pageWrapper = document.querySelector('[page-scroll]') as HTMLElement;
  const track_el = document.querySelector('[page-progress]') as HTMLElement;
  const timelinePauseDelay = -0.5;

  //page scroll
  gsap.set(track_el, { width: '16px', height: '16px' });

  const pageScroll = gsap.timeline({
    scrollTrigger: {
      trigger: pageWrapper,
      start: 'top 5%',
      end: 'bottom bottom',
      scrub: true,
      //markers: true,
      onUpdate: function (self) {
        const progressPercent = self.progress * 100;
        track_el.style.width = `${progressPercent}%`;
      },
    },
  });

  // Select all slide-text elements and their corresponding characters
  const allTextArr = Array.from(document.querySelectorAll('[slide-text]'));

  // Create a GSAP timeline with infinite repeat
  const txScrollAnimation = gsap.timeline({
    repeat: -1,
    repeatDelay: timelinePauseDelay,
  });

  txScrollAnimation.set(allTextArr, { visibility: 'visible' });
  // Loop through allTextArr and add animations to the timeline
  allTextArr.forEach((textElement) => {
    const charArr = textElement.querySelectorAll('.char');
    txScrollAnimation
      .from(
        charArr,
        {
          yPercent: -200,
          duration: animDurationTime,
          stagger: 0.1,
          autoAlpha: 0,
        },
        '<'
      )
      .to(
        charArr,
        {
          yPercent: 200,
          autoAlpha: 1,
          delay: animDelay,
          duration: animDurationTime,
          stagger: 0.1,
        },
        `+=0`
      ); // No delay between "from" and "to" animations
  });

  //counter up animation
  const allCounters = gsap.utils.toArray('[counter]') as HTMLElement[];
  const counterBox = [...document.querySelectorAll('[counter-box]')] as HTMLElement[];

  const createOdometer = (el: HTMLElement) => {
    //get the value of the text from the el
    const value = el.getAttribute('count-uptext');
    const odometer = new Odometer({
      el: el,
      value: 0,
    });
    odometer.update(value);
  };

  if (allCounters.length > 0) {
    counterBox.forEach((el, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          // end: 'bottom 50%',
          //  markers: true,
          scrub: true,
          onEnter: function () {
            createOdometer(allCounters[i]);
          },
        },
        defaults: { duration: 0.5, ease: 'power2.out' },
      });
    });
  }

  //swiper slide
  const screenSize = window.innerWidth;
  if (screenSize < 767) {
    const swiper1 = new Swiper('#resSwiper', {
      slidesPerView: 1.2,
      spaceBetween: 10,
      breakpoints: {
        // when window width is >= 480px
        480: {
          slidesPerView: 2.3,
          spaceBetween: 10,
        },
      },
      loop: true,
      speed: 1000,
      // autoplay: {
      //   delay: 1000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: '.pagination-mb',
        clickable: true,
      },
    });
  }

  //text transformation
  const txtElements = document.querySelectorAll('[text-trans]');
  txtElements.forEach((el) => {
    //get the attribute
    const transformToText = el.getAttribute('transform-to');

    gsap.to(el, {
      duration: 2,
      text: transformToText,
      ease: 'power1.in',
    });
  });

  //   allCounters.forEach((el) => {
  //     createOdometer(el);
  //   });

  // Add a small delay at the end of the timeline
  //txScrollAnimation.addPause(timelinePauseDelay);

  //   // Function to create animation for a given set of characters
  //   const createAnimation = (charArr) => {
  //     txScrollAnimation
  //       .from(
  //         charArr,
  //         {
  //           yPercent: -200,
  //           autoAlpha: 0,
  //           duration: animDurationTime,
  //           stagger: 0.1,
  //         },
  //         '<'
  //       )
  //       .to(
  //         charArr,
  //         {
  //           yPercent: 200,
  //           autoAlpha: 0,
  //           duration: animDurationTime,
  //           delay: animDelay,
  //           stagger: 0.1,
  //         },
  //         `+=0`
  //       );
  //   };

  //   // Loop through allTextArr and apply the animation to each element's characters
  //   allTextArr.forEach((textElement) => {
  //     const charArr = textElement.querySelectorAll('.char');
  //     createAnimation(charArr);
  //   });

  //slide-text
  //   const txScrollAnimation = gsap.timeline({});

  //   const allTextArr = [...document.querySelectorAll('[slide-text]')] as HTMLElement[];

  //   const firstTextArr = allTextArr[0];
  //   const secondTextArr = allTextArr[1];
  //   const thirdTextArr = allTextArr[2];
  //   const fourthTextArr = allTextArr[3];

  //   const firstcharArr = firstTextArr.querySelectorAll('.char');
  //   const secondCharArr = secondTextArr.querySelectorAll('.char');
  //   const thirdCharArr = thirdTextArr.querySelectorAll('.char');
  //   const fourthCharrArr = fourthTextArr.querySelectorAll('.char');

  //   const txScrollAnimation = gsap.timeline({ repeat: -1 });

  //   txScrollAnimation.add(txScrollAnimation);

  //   txScrollAnimation
  //     .from(firstcharArr, {
  //       yPercent: -200,
  //       duration: animDurationTime,
  //       //  ease: 'expo.out',
  //       stagger: 0.1,
  //     })
  //     .to(firstcharArr, {
  //       yPercent: 200,
  //       duration: animDurationTime,
  //       delay: animDelay,
  //       // ease: 'expo.out',
  //       stagger: 0.1,
  //     })
  //     .from(
  //       secondCharArr,
  //       {
  //         yPercent: -200,
  //         duration: animDurationTime,
  //         //  ease: 'expo.out',
  //         stagger: 0.1,
  //       },
  //       '<'
  //     )
  //     .to(secondCharArr, {
  //       yPercent: 200,
  //       duration: animDurationTime,
  //       // delay: animDelay,
  //       // ease: 'expo.out',
  //       stagger: 0.1,
  //     })
  //     .from(
  //       thirdCharArr,
  //       {
  //         yPercent: -200,
  //         duration: animDurationTime,
  //         //  ease: 'expo.out',
  //         stagger: 0.1,
  //       },
  //       '<'
  //     )
  //     .to(thirdCharArr, {
  //       yPercent: 200,
  //       duration: animDurationTime,
  //       // delay: animDelay,
  //       // ease: 'expo.out',
  //       stagger: 0.1,
  //     })
  //     .from(
  //       fourthCharrArr,
  //       {
  //         yPercent: -200,
  //         duration: animDurationTime,
  //         //  ease: 'expo.out',
  //         stagger: 0.1,
  //       },
  //       '<'
  //     )
  //     .to(fourthCharrArr, {
  //       yPercent: 200,
  //       duration: animDurationTime,
  //       // delay: animDelay,
  //       // ease: 'expo.out',
  //       stagger: 0.1,
  //     });
});

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  const nav = function () {
    const body = document.querySelector('body');

    const navIn = function (navListEl) {
      const parent = navListEl.parentElement;
      parent?.classList.add('is-open');

      //disable scroll
      body.style.overflow = 'hidden';

      navListEl.classList.add('is-open');
      gsap.to(navListEl, { height: '100svh', duration: 0.3, ease: 'power2.out' });
    };

    const navOut = function (navListEl) {
      const parent = navListEl.parentElement;
      parent?.classList.remove('is-open');

      //enable scroll
      body.style.overflow = 'visible';

      gsap.to(navListEl, { height: '0', duration: 0.3, ease: 'power2.out' });

      setTimeout(() => {
        navListEl.classList.remove('is-open');
      }, 150);
    };

    const screenSize = window.innerWidth;

    if (screenSize < 767) {
      const navBtn = document.querySelector('[nav-btntoggle="mb-nav"]');
      const allLinks = document.querySelectorAll('[btn="mb-link"]');
      const navList = document.querySelector('[mb-nvlist]');

      navBtn?.addEventListener('click', function () {
        if (navList.classList.contains('is-open')) {
          navOut(navList);
        } else navIn(navList);
      });

      allLinks.forEach((link) => {
        link.addEventListener('click', () => {
          if (navList.classList.contains('is-open')) {
            navOut(navList);
          }
        });
      });
    }
  };

  nav();

  const typeSplit = new SplitType('[slide-text]', {
    types: 'word chars',
    tagName: 'span',
  });

  const animDurationTime = 0.3;
  const animDelay = 1;
  const pageWrapper = document.querySelector('[page-scroll]');
  const track_el = document.querySelector('[page-progress]');
  const timelinePauseDelay = -0.5;

  gsap.set(track_el, { width: '16px', height: '16px' });

  const pageScroll = gsap.timeline({
    scrollTrigger: {
      trigger: pageWrapper,
      start: 'top 5%',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: function (self) {
        const progressPercent = self.progress * 100;
        track_el.style.width = `${progressPercent}%`;
      },
    },
  });

  const allTextArr = Array.from(document.querySelectorAll('[slide-text]'));

  const txScrollAnimation = gsap.timeline({
    repeat: -1,
    repeatDelay: timelinePauseDelay,
  });

  txScrollAnimation.set(allTextArr, { visibility: 'visible' });

  allTextArr.forEach((textElement) => {
    const charArr = textElement.querySelectorAll('.char');
    txScrollAnimation
      .from(
        charArr,
        {
          yPercent: -200,
          duration: animDurationTime,
          stagger: 0.1,
          autoAlpha: 0,
        },
        '<'
      )
      .to(
        charArr,
        {
          yPercent: 200,
          autoAlpha: 1,
          delay: animDelay,
          duration: animDurationTime,
          stagger: 0.1,
        },
        `+=0`
      );
  });

  const allCounters = gsap.utils.toArray('[counter]');
  const counterBox = [...document.querySelectorAll('[counter-box]')];

  const createOdometer = (el) => {
    const value = el.getAttribute('count-uptext');
    const odometer = new Odometer({
      el: el,
      value: 0,
    });
    odometer.update(value);
  };

  if (allCounters.length > 0) {
    counterBox.forEach((el, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          scrub: true,
          onEnter: function () {
            createOdometer(allCounters[i]);
          },
        },
        defaults: { duration: 0.5, ease: 'power2.out' },
      });
    });
  }

  const screenSize = window.innerWidth;
  if (screenSize < 767) {
    const swiper1 = new Swiper('#resSwiper', {
      slidesPerView: 1.2,
      spaceBetween: 10,
      breakpoints: {
        480: {
          slidesPerView: 2.3,
          spaceBetween: 10,
        },
      },
      loop: true,
      speed: 1000,
      pagination: {
        el: '.pagination-mb',
        clickable: true,
      },
    });
  }

  const txtElements = document.querySelectorAll('[text-trans]');
  txtElements.forEach((el) => {
    const transformToText = el.getAttribute('transform-to');

    gsap.to(el, {
      duration: 2,
      text: transformToText,
      ease: 'power1.in',
    });
  });
});
