import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { lenisScroll } from 'src/gsap/smoothScroll';

// import particlesJS from '../../particles.js';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  lenisScroll(ScrollTrigger, gsap);

  console.log('hlocal');

  // const particleJSON = {
  //   particles: {
  //     number: {
  //       value: 80,
  //       density: {
  //         enable: true,
  //         value_area: 800,
  //       },
  //     },
  //     color: {
  //       value: '#ffffff',
  //     },
  //     shape: {
  //       type: 'circle',
  //       stroke: {
  //         width: 0,
  //         color: '#000000',
  //       },
  //       polygon: {
  //         nb_sides: 5,
  //       },
  //       image: {
  //         src: 'img/github.svg',
  //         width: 100,
  //         height: 100,
  //       },
  //     },
  //     opacity: {
  //       value: 0.5,
  //       random: false,
  //       anim: {
  //         enable: false,
  //         speed: 1,
  //         opacity_min: 0.1,
  //         sync: false,
  //       },
  //     },
  //     size: {
  //       value: 10,
  //       random: true,
  //       anim: {
  //         enable: false,
  //         speed: 80,
  //         size_min: 0.1,
  //         sync: false,
  //       },
  //     },
  //     line_linked: {
  //       enable: true,
  //       distance: 300,
  //       color: '#ffffff',
  //       opacity: 0.4,
  //       width: 2,
  //     },
  //     move: {
  //       enable: true,
  //       speed: 12,
  //       direction: 'none',
  //       random: false,
  //       straight: false,
  //       out_mode: 'out',
  //       bounce: false,
  //       attract: {
  //         enable: false,
  //         rotateX: 600,
  //         rotateY: 1200,
  //       },
  //     },
  //   },
  //   interactivity: {
  //     detect_on: 'canvas',
  //     events: {
  //       onhover: {
  //         enable: false,
  //         mode: 'repulse',
  //       },
  //       onclick: {
  //         enable: true,
  //         mode: 'push',
  //       },
  //       resize: true,
  //     },
  //     modes: {
  //       grab: {
  //         distance: 800,
  //         line_linked: {
  //           opacity: 1,
  //         },
  //       },
  //       bubble: {
  //         distance: 800,
  //         size: 80,
  //         duration: 2,
  //         opacity: 0.8,
  //         speed: 3,
  //       },
  //       repulse: {
  //         distance: 400,
  //         duration: 0.4,
  //       },
  //       push: {
  //         particles_nb: 4,
  //       },
  //       remove: {
  //         particles_nb: 2,
  //       },
  //     },
  //   },
  //   retina_detect: true,
  // };

  // const particleJs = function () {
  //   /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  //   particlesJS.load('particles-js', particleJSON, function () {
  //     console.log('callback - particles.js config loaded');
  //   });
  // };
  // //  particleJs();

  ///split text and animate individual chars
  const typeSplit = new SplitType('[slide-text]', {
    types: 'word chars',
    tagName: 'span',
  });

  const easeScrollInto = 'elastic.out(1, 0.9)';
  const animDurationTime = 0.3;
  const animDelay = 1; //duration at which the text will be visible before leaving the screen

  ///scrollTrigger
  const section_trigger = document.querySelector('#scroll-sect');
  const headingTlTrigger = document.querySelector('#head-trigger');
  const scrollTracker = document.querySelector('[scroll-tracker]');

  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: section_trigger,
      start: 'top top',
      //make the end longer
      //   end: '+=500vh',
      scrub: 2,
      //   markers: true,
      pin: true,
      pinSpacing: true,
    },
  });

  const headingTl = gsap.timeline({
    scrollTrigger: {
      trigger: headingTlTrigger,
      start: 'top 30%',
      //make the end longer
      //   end: '+=500vh',
      // markers: true,
      pinSpacing: true,
      toggleActions: 'play none none reverse',
    },
  });

  headingTl
    .from('.char', { yPercent: 200, stagger: 0.15, duration: 1.6, ease: easeScrollInto })
    .from('[fl-left]', { xPercent: -100, autoAlpha: 0, duration: 1 }, 1)
    .from('[fl-right]', { xPercent: 100, autoAlpha: 0, duration: 0.8 }, '<');

  //   const firstCard = document.querySelector('.scroll-card.first-c');

  const charArr = document.querySelectorAll('.char');

  scrollTl.to(scrollTracker, {
    motionPath: {
      path: '#path',
      autoRotate: 180,
      align: '#path',
      alignOrigin: [0.5, 0.6],
    },
  });
});
