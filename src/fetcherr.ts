import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    ScrollTrigger.refresh();
    console.log('hello');
  }, 500);

  //slide in

  function isMobile() {
    return window.innerWidth < 768; // Example breakpoint, adjust as necessary
  }

  const glideUp = document.querySelectorAll('[glide-trigger]');
  console.log(glideUp);

  glideUp.forEach((glide, i) => {
    const glide_item = glide.querySelector('[glide-up]') as HTMLElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: glide,
        start: isMobile() ? 'top 70%' : 'top 70%',
        end: isMobile() ? 'bottom 50%' : 'bottom 50%',
        markers: true,
        scrub: true,
        // onEnter: function () {
        //   console.log(i);
        //   glideItem.classList.add('active');
        // },
        // onLeave: function () {
        //   console.log(i, 'leave');
        //   if (i < 3) glideItem.classList.remove('active');
        // },
      },
    });

    tl.fromTo(glide_item, { yPercent: -120, opacity: 0 }, { yPercent: 0, opacity: 1 });
  });
});

// window.Webflow ||= [];
// Webflow.push(function () {
//   function isMobile() {
//     return window.innerWidth < 768; // Example breakpoint, adjust as necessary
//   }

//   const ease = 'expo.out';
//   const allInvImg = document.querySelectorAll('[inv]');
//   console.log(allInvImg);

//   gsap.set(allInvImg, { opacity: 0 });

//   const allInvItem = document.querySelectorAll('.div-block-11');

//   allInvItem.forEach((item, i) => {
//     // console.log(i);
//     const tl = gsap.timeline({
//       paused: true,
//       scrollTrigger: {
//         trigger: item,
//         start: 'top 55%',
//         end: 'bottom 45%',
//         markers: true,
//         // scrub: true,
//         onEnter: () => {
//           const activeEl = allInvImg[i];
//           activeEl.style.opacity = '1';
//           // activeEl.classList.add(`anim-in${i}`);
//         },
//         onLeave: () => {
//           const activeEl = allInvImg[i];

//           activeEl.style.opacity = '0';
//           // activeEl.classList.remove(`anim-in${i}`);
//         },
//         onLeaveBack: () => {
//           const activeEl = allInvImg[i];
//           activeEl.style.opacity = '0';
//           // activeEl.classList.remove(`anim-in${i}`);
//         },
//         onEnterBack: () => {
//           const activeEl = allInvImg[i];
//           activeEl.style.opacity = '1';
//           // activeEl.classList.add(`anim-in${i}`);
//         },
//       },
//     });
//   });
// });

// const allInvImg = document.querySelectorAll('[inv]');

// console.log(allInvImg);

// gsap.set(allInvImg, { opacity: 0 });

// const allInvItem = document.querySelectorAll('.div-block-11');

// allInvItem.forEach((item, i) => {
//   // console.log(i);
//   const tl = gsap.timeline({
//     paused: true,
//     scrollTrigger: {
//       trigger: item,
//       start: 'top 55%',
//       end: 'bottom 45%',
//     //  markers: true,
//       // scrub: true,
//       onEnter: () => {
//         const activeEl = allInvImg[i];
//         activeEl.style.opacity = '1';
//         // activeEl.classList.add(`anim-in${i}`);
//       },
//       onLeave: () => {
//         const activeEl = allInvImg[i];

//         activeEl.style.opacity = '0';
//         // activeEl.classList.remove(`anim-in${i}`);
//       },
//       onLeaveBack: () => {
//         const activeEl = allInvImg[i];
//         activeEl.style.opacity = '0';
//         // activeEl.classList.remove(`anim-in${i}`);
//       },
//       onEnterBack: () => {
//         const activeEl = allInvImg[i];
//         activeEl.style.opacity = '1';
//         // activeEl.classList.add(`anim-in${i}`);
//       },
//     },
//   });
// });

// const allInvImg = document.querySelectorAll('[inv]');

// gsap.set(allInvImg, { opacity: 0 });

// const allInvItem = document.querySelectorAll('.div-block-11');

// allInvItem.forEach((item, i) => {
//   // console.log(i);
//   const tl = gsap.timeline({
//     paused: true,
//     scrollTrigger: {
//       trigger: item,
//       start: 'top 75%',
//       end: 'bottom 65%',
//       // markers: true,
//       // scrub: true,
//       onEnter: () => {
//         const activeEl = allInvImg[i];
//         activeEl.classList.add(`anim-in${i}`);
//       },
//       onLeave: () => {
//         const activeEl = allInvImg[i];
//         activeEl.classList.remove(`anim-in${i}`);
//       },
//       onLeaveBack: () => {
//         const activeEl = allInvImg[i];
//         activeEl.classList.remove(`anim-in${i}`);
//       },
//       onEnterBack: () => {
//         const activeEl = allInvImg[i];
//         activeEl.classList.add(`anim-in${i}`);
//       },
//     },
//   });
// });

// gsap.from('[slide-up]', { yPercent: 100, duration: 2, autoAlpha: 0, ease: ease });

// const allTriggers = [...document.querySelectorAll('[section-trigger]')];

// allTriggers.forEach((trigger) => {
//   const elms = trigger.querySelectorAll('[text-slide]');
//   const boxEL = trigger.querySelectorAll('[box-slide]');

//   console.log(elms);

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: trigger,
//       start: isMobile() ? 'top 70%' : 'top 70%',
//       end: isMobile() ? 'bottom 50%' : 'bottom 50%',
//       markers: true,
//       // toggleActions: 'restart',
//       // scrub: true,
//     },
//   });

//   tl.from(elms, {
//     yPercent: 100,
//     autoAlpha: 0,
//     duration: 2,
//     stagger: 0.2,
//     ease: ease,
//   });

//   if (boxEL) {
//     tl.from(boxEL, { yPercent: 100, autoAlpha: 0, duration: 2, stagger: 0.2, ease: ease }, 0.5);
//   }
// });

// const alltext =

// gsap.from()

//  const glideUp = document.querySelectorAll('[glide-trigger]');

// glideUp.forEach((glide) => {
//   const glideItem = glide.querySelector('[glide-up]');

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: glide,
//       start: isMobile() ? 'top 70%' : 'top 70%',
//       end: isMobile() ? 'bottom 50%' : 'bottom 50%',
//       // markers: true,
//       scrub: true,
//       onEnter: function () {
//         console.log('enter');
//       },
//       onLeave: function () {
//         console.log('leave');
//       },
//     },
//   });

//   tl.fromTo(glideItem, { yPercent: -120, opacity: 0 }, { yPercent: 0, opacity: 1 });
// });

// const slideTrigger = document.querySelector('[slide-trigger]');

// const slideTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: isMobile() ? slideTrigger : slideTrigger,
//     scrub: 1,
//     start: isMobile() ? 'top 55%' : 'top 50%',
//     end: isMobile() ? '35%' : '100%',
//     markers: true,
//     // pin: isMobile() ? false : false,
//     // end: () => '+=' + slideTrigger.offsetWidth,
//     // end: '+=' + sectionSlide[0].offsetWidth,
//   },
// });

// const slideRight = document.querySelector('[slide-right]');

// //set active state

// slideTl
//   .from(slideRight, {
//     yPercent: -130,
//     autoAlpha: 0,
//     onComplete: function () {
//       console.log('complete');
//     },
//   })
//   .from('[slide-left]', { yPercent: -130, autoAlpha: 0 })
//   .from('[slide-right-sec]', { yPercent: -130, autoAlpha: 0 })
//   .from('[slide-left-sec]', { yPercent: -130, autoAlpha: 0 });

//const timeline = function (trigger, marker) {
//   return gsap.timeline({
//     // paused: true,
//     defaults: { autoAlpha: 0, duration: 2, ease: 'expo.out' },
//     scrollTrigger: {
//       trigger: trigger,
//       markers: marker,
//       start: 'top 70%',
//     },
//   });
// };

// gsap.set('.header-text-wrap', { overflow: 'hidden' });

// //pageload animation

// gsap.from('h1', {
//   yPercent: 100,
//   autoAlpha: 0,
//   duration: 2.5,
//   ease: ease,
// });

// const marqContainerWidth = document.querySelector('[marq-container]')?.offsetWidth;
// const marqContainer = document.querySelector('[marq-container]');
// const marqContents = document.querySelectorAll('[marque-left]');

// function isMobile() {
//   return window.innerWidth < 768; // Example breakpoint, adjust as necessary
// }

// const deskDuration = 50;
// const mobileDuration = 40;

// const marqSlide = function (marqContentWrap, marqContainerWidth, marContainer) {
//   const marqTl = gsap.timeline();

//   // GSAP animation with dynamic duration
//   marqTl.to(marqContentWrap, {
//     x: marqContainerWidth,
//     ease: 'none',
//     repeat: -1, // Infinite loop
//     modifiers: {
//       x: gsap.utils.unitize((x) => parseFloat(x) % (window.innerWidth * 2)), // Resets the position to create an infinite loop
//     },
//     onResize: function () {
//       this.duration(isMobile() ? mobileDuration : deskDuration); // Adjust duration on window resize
//     },
//   });

//   marqContainer.addEventListener('mouseover', (e) => {
//     marqTl.pause();
//   });

//   marqContainer.addEventListener('mouseleave', () => {
//     marqTl.play();
//   });
// };

// marqSlide(marqContents, -marqContainerWidth, marqContainer);

// //slide in

// const slideTrigger = document.querySelector('[slide-trigger]');

// const slideTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: isMobile() ? slideTrigger : slideTrigger,
//     scrub: 1,
//     start: isMobile() ? 'top 30%' : 'top, 60%',
//     end: isMobile() ? '15%' : '5%',
//     // markers: true,
//     // pin: true,
//     // end: () => '+=' + slideTrigger.offsetWidth,
//     // end: '+=' + sectionSlide[0].offsetWidth,
//   },
// });

// slideTl
//   .from('[slide-right]', { xPercent: 100, autoAlpha: 0 })
//   .from('[slide-left]', { xPercent: -100, autoAlpha: 0 })
//   .from('[slide-right-sec]', { xPercent: 100, autoAlpha: 0 })
//   .from('[slide-left-sec]', { xPercent: -100, autoAlpha: 0 });

// gsap.registerPlugin(ScrollTrigger);
// const popOpenBtns = [...document.querySelectorAll('[pop-open]')];
// const popUpElements = [...document.querySelectorAll('[pop]')];
// const closeBtns = [...document.querySelectorAll('[close-btn]')];

// const popWrapper = document.querySelector('.team_info-popup');

// const popTl = gsap.timeline({ paused: true });

// popTl.set(popWrapper, { opacity: 0, display: 'none' });
// popTl.set(popWrapper, { display: 'flex' }).to(popWrapper, { opacity: 1, duration: 0.2 }, 0.2);

// popOpenBtns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     //get the attribute
//     const popName = btn.getAttribute('pop-open');

//     const [activeEL] = popUpElements.filter((el) => el.getAttribute('pop') === popName);
//     popTl.play();

//     activeEL.style.display = 'block';
//   });
// });

// closeBtns.forEach((closebtn, i) => {
//   closebtn.addEventListener('click', () => {
//     //get active Element
//     const openPop = popUpElements[i];
//     openPop.style.display = 'none';
//     popTl.reverse();
//   });
// });

// const mainNav = document.getElementById('mainNav') as HTMLElement;
// const stickyNav = document.getElementById('stickyNav') as HTMLElement;

// const slideOut = function () {
//   stickyNav.style.transform = `translate3d(0, -140%, 0)`;
// };

// const slideIn = function () {
//   stickyNav.style.transform = `translate3d(0, 0%, 0)`;
// };

// const scrollObserver = Observer.create({
//   target: window, // can be any element (selector text is fine)
//   type: 'wheel,touch', // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
//   dragMinimum: 10,
//   onUp: () => slideIn(),
//   onDown: () => slideOut(),
// });

// const options = {
//   root: null, // observing changes to viewport
//   rootMargin: '0px',
//   threshold: 0.1, // Callback is executed when 10% of the observed element is visible
// };

// const watchNav = function (entries, observer) {
//   entries.forEach(({ isIntersecting }) => {
//     console.log(isIntersecting);

//     if (isIntersecting) {
//       scrollObserver.disable();
//       slideOut();
//     } else {
//       scrollObserver.enable();
//     }
//   });
// };
// const navObserver = new IntersectionObserver(watchNav, options);
// navObserver.observe(mainNav);
