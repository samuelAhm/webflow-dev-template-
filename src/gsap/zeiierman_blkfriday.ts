// Default theme
import '@splidejs/splide/css';

import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function setSlideEl(splideELement: HTMLElement, speed: number) {
  const resSlide = new Splide(splideELement, {
    type: 'loop',
    direction: 'ttb',
    height: 'auto',
    // gap: '1rem',
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: speed,
    },
  });
  resSlide.mount({ AutoScroll });
}

// //check if device width is mobile
// function isMobileMobile(): boolean {
//   return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
// }

document.addEventListener('DOMContentLoaded', () => {
  //register plugin
  gsap.registerPlugin(ScrollTrigger);

  const splideEl = document.querySelector('#splide1') as HTMLElement;
  const splideEl2 = document.querySelector('#splide2') as HTMLElement;
  const splideEl3 = document.querySelector('#splide3') as HTMLElement;

  // const countdown_wrapper = document.querySelector('#countdown-Wrapper') as HTMLElement;

  setSlideEl(splideEl, 0.2);
  setSlideEl(splideEl2, -0.3);
  setSlideEl(splideEl3, 0.2);

  // //swipet JS initialization
  // if (isMobileMobile()) {
  //   const swiper = new Swiper('.swiper', {
  //     perPage: 1,
  //     pagination: {
  //       el: '.pagination-wrap',
  //     },
  //   });
  // }

  ///scroll trigger
  const trigger = document.querySelector('#step-trigger');
  const curriculumSect = [...document.querySelectorAll('[section-view]')] as HTMLElement[];
  const dotMove = document.querySelector('[dot-move]') as HTMLElement;
  //get the height of the dot move
  const svg_line = document.querySelector('[line-svg]') as HTMLElement;
  const svg_line_height = svg_line.getBoundingClientRect().height;

  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: 'top 55%',
      // end: 'bottom 45%',
      scrub: true,
      // markers: true,
    },
  });

  scrollTl.to(dotMove, { y: svg_line_height });

  curriculumSect.forEach((el) => {
    const activeTl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 55%',
        // end: 'bottom 75%',
        scrub: true,
        // markers: true,

        onEnter: function () {
          el?.classList.add('active');
          //  imgwrap?.classList.add('active');
        },
        onLeaveBack: function () {
          el?.classList.remove('active');
          //  imgwrap?.classList.remove('active');
        },
      },
    });
  });

  countdownToEventHours('December 4 2024 00:00:00');
  // Countdown function
  function countdownToEventHours(targetDate: string) {
    const countdownWrapper = [...document.querySelectorAll('[countdown-Wrapper]')] as HTMLElement[];
    const hoursEL = [...document.querySelectorAll('[hours]')] as HTMLElement[];
    const minutesEl = [...document.querySelectorAll('[minutes]')] as HTMLElement[];
    const secondsEl = [...document.querySelectorAll('[seconds]')] as HTMLElement[];

    // Get the target date and time
    const target = new Date(targetDate).getTime();

    // Function to update the countdown every second
    const interval = setInterval(() => {
      // Get current date and time
      const now = new Date().getTime();

      // Calculate the time remaining
      const timeRemaining = target - now;

      // Check if the countdown is finished
      if (timeRemaining < 0) {
        clearInterval(interval);
        countdownWrapper.forEach((el) => {
          el.textContent = `The Promo has ended!`;
        });
        return;
      }

      // Calculate the remaining hours, minutes, and seconds
      const totalHours = Math.floor(timeRemaining / (1000 * 60 * 60)); // Total hours including days
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Update the HTML elements
      hoursEL.forEach((el) => {
        el.textContent = `${totalHours}`;
      });
      minutesEl.forEach((el) => {
        el.textContent = `${minutes}`;
      });
      secondsEl.forEach((el) => {
        el.textContent = `${seconds}`;
      });
    }, 1000);
  }
});
