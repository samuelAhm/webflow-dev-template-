import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// import { lenisScroll } from '../../smoothScroll';
import {
  bgMovement,
  floatSection,
  footerAnimation,
  heroAnimation,
  labSection,
  metricSection,
  resultSection,
  textScroll_animation,
  z_indexSection,
} from '../animFiles';

// Constants
const EASE_SCROLL_INTO = 'elastic.out(1, 0.9)';
const DEFAULT_DURATION = 1.5;
const STAGGER_DELAY = 0.12;

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  // lenisScroll(ScrollTrigger, gsap);

  // Split Text
  new SplitType('[ring-split]', { types: 'word chars', tagName: 'span' });

  // Cache DOM Elements
  const bodyEl = document.querySelector('body') as HTMLElement;
  const pageBg = document.querySelector('[page-bg]') as HTMLElement;
  const section_trigger = document.querySelector('#scroll-sect') as HTMLElement;
  const headingTlTrigger = document.querySelector('#head-trigger');
  const scrollTracker = document.querySelector('[scroll-tracker]');
  const textChar = gsap.utils.toArray('.char');

  // Initialize Animations
  bgMovement(gsap);
  heroAnimation(gsap);
  labSection(gsap);
  textScroll_animation(gsap, SplitType);
  floatSection(gsap);
  resultSection(gsap, SplitType);

  // ScrollTrigger Animations
  const scrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: section_trigger,
      start: 'top top',
      scrub: 2,
      pin: true,
      pinSpacing: true,
    },
  });

  scrollTimeline.to(scrollTracker, {
    motionPath: {
      path: '#path',
      autoRotate: 180,
      align: '#path',
      alignOrigin: [0.5, 0.6],
    },
  });

  const headingTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: headingTlTrigger,
      start: 'top 30%',
      toggleActions: 'play none none reverse',
    },
  });

  headingTimeline
    .from(textChar, {
      yPercent: 200,
      opacity: 0,
      stagger: STAGGER_DELAY,
      duration: DEFAULT_DURATION,
      ease: EASE_SCROLL_INTO,
    })
    .from(
      '[fl-left]',
      { xPercent: -100, opacity: 0, duration: DEFAULT_DURATION, ease: EASE_SCROLL_INTO },
      1
    )
    .from(
      '[fl-right]',
      { xPercent: 100, opacity: 0, duration: DEFAULT_DURATION * 0.8, ease: EASE_SCROLL_INTO },
      '<'
    );

  // Additional Animations
  z_indexSection(gsap);
  metricSection(gsap, bodyEl);
  footerAnimation(gsap);
});

// import { gsap } from 'gsap';
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import SplitType from 'split-type';

// import { lenisScroll } from '../../smoothScroll';
// import {
//   bgMovement,
//   floatSection,
//   footerAnimation,
//   heroAnimation,
//   labSection,
//   metricSection,
//   resultSection,
//   textScroll_animation,
//   z_indexSection,
// } from '../animFiles';

// // window.Webflow ||= [];
// // window.Webflow.push(async () => {});

// document.addEventListener('DOMContentLoaded', () => {
//   gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
//   lenisScroll(ScrollTrigger, gsap);

//   //body El
//   const bodyEl = document.querySelector('body') as HTMLElement;
//   const pageBg = document.querySelector('[page-bg]') as HTMLElement;

//   ///split text and animate individual chars
//   const typeSplit = new SplitType('[slide-text]', {
//     types: 'word chars',
//     tagName: 'span',
//   });

//   bgMovement(gsap);
//   heroAnimation(gsap);

//   labSection(gsap);
//   textScroll_animation(gsap, SplitType);
//   floatSection(gsap);
//   resultSection(gsap);

//   const easeScrollInto = 'elastic.out(1, 0.9)';

//   ///scrollTrigger
//   const section_trigger = document.querySelector('#scroll-sect') as HTMLElement;
//   const headingTlTrigger = document.querySelector('#head-trigger');
//   const scrollTracker = document.querySelector('[scroll-tracker]');

//   const textChar = section_trigger.querySelectorAll('.char');

//   const scrollTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: section_trigger,
//       start: 'top top',
//       //make the end longer
//       //   end: '+=500vh',
//       scrub: 2,
//       //   markers: true,
//       pin: true,
//       pinSpacing: true,
//     },
//   });

//   const headingTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: headingTlTrigger,
//       start: 'top 30%',
//       toggleActions: 'play none none reverse',
//     },
//   });

//   headingTl
//     .from(textChar, { yPercent: 200, stagger: 0.15, duration: 1.6, ease: easeScrollInto })
//     .from('[fl-left]', { xPercent: -100, autoAlpha: 0, duration: 1 }, 1)
//     .from('[fl-right]', { xPercent: 100, autoAlpha: 0, duration: 0.8 }, '<');

//   //   const firstCard = document.querySelector('.scroll-card.first-c');
//   // const charArr = document.querySelectorAll('.char');
//   scrollTl.to(scrollTracker, {
//     motionPath: {
//       path: '#path',
//       autoRotate: 180,
//       align: '#path',
//       alignOrigin: [0.5, 0.6],
//     },
//   });

//   z_indexSection(gsap);
//   metricSection(gsap, bodyEl);
//   footerAnimation(gsap);
// });
