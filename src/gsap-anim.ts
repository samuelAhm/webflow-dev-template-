window.Webflow ||= [];
window.Webflow.push(() => {
  const hmTl = gsap.timeline({
    duration: 0.55,
    onComplete: () => {
      dropTl.play();
    },
  });

  const dropTl = gsap.timeline({
    paused: true,
    repeat: -1,
    repeatDelay: 0.5,
  });
  const ease = 'slow(0.7,0.7,false)';

  hmTl
    .from('[hero-top]', { yPercent: -15, autoAlpha: 0, ease })
    .from('[hero-btm]', { yPercent: 15, autoAlpha: 0, ease }, '<');

  dropTl.from('[drop-slide]', { yPercent: 15, autoAlpha: 0, duration: 0.5, stagger: 1, ease });

  const trgEl = document.querySelector('[banner-sect]') as HTMLElement;

  const rbtTl = gsap.timeline({
    scrollTrigger: {
      trigger: trgEl,
      start: 'top, 80%',
      //markers: true,
    },
  });

  rbtTl
    .from('[robot-img]', { yPercent: 25, duration: 2, ease, scale: 1.3 })
    .to('[img-rotate]', { scale: 1.1, repeat: -1, duration: 1, yoyo: true, rotate: 15, ease }, '<');

  const moreBenefit1 = document.querySelector('[drop-sect-1]') as HTMLElement;
  const moreBenefit2 = document.querySelector('[drop-sect-2]') as HTMLElement;

  const mrTl1 = gsap.timeline({
    scrollTrigger: {
      trigger: moreBenefit1,
      start: 'top, 80%',
    },
  });

  const mrTl2 = gsap.timeline({
    scrollTrigger: {
      trigger: moreBenefit2,
      start: 'top, 80%',
    },
  });

  mrTl1
    .from('[drop-slide1]', {
      yPercent: 15,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 1,
      ease,
      repeat: -1,
      repeatDelay: 1.5,
      // yoyo: true,
    })
    .from(
      '[ai-img-1]',
      {
        xPercent: -100,
        scale: 1.5,
        // repeat: -1,
        duration: 5,
        rotate: 10,
        ease,
      },
      2.5
    );

  mrTl2
    .from('[drop-slide2]', {
      yPercent: 15,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 1,
      ease,
      repeat: -1,
      repeatDelay: 1.5,
      // yoyo: true,
    })
    .from(
      '[ai-img-2]',
      {
        xPercent: -100,
        scale: 1.5,
        // repeat: -1,
        duration: 5,
        rotate: 10,
        ease,
      },
      2.5
    );

  const supportSect = document.querySelector('[section-slide]') as HTMLElement;
  const supTl = gsap.timeline({
    scrollTrigger: {
      trigger: supportSect,
      start: 'top, 80%',
    },
  });

  supTl.from('[slide-in-right]', { xPercent: 20, autoAlpha: 0, duration: 1 }).from(
    '[slide-in-left]',
    {
      xPercent: -20,
      autoAlpha: 0,
      duration: 1,
    },
    '<'
  );

  //how-it-works
  //getStarted-sect
  // homeTl.from('[slide-up]', { yPercent: 100, duration: 1.5, autoAlpha: 0 }).to(
  //   '[lottie-cover]',
  //   {
  //     height: 0,
  //     duration: 1.25,
  //     ease,
  //   },
  //   0.5
  // );
  // console.log('anim');
  // function isMobile() {
  //   return window.innerWidth < 423;
  // }
  // const ease = 'expo.out';
  // const kbSection = document.querySelector('[key-benefitsection]');
  // const howitWorksSection = document.getElementById('hiwSection');
  // function sectionSlideIn(triggerEl: string, itemSlide: string) {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: triggerEl,
  //       start: 'top, 80%',
  //       markers: true,
  //       //end: '=+450',
  //       // scrub: true,
  //     },
  //   });
  //   hiwTl.from(itemSlide, {
  //     autoAlpha: 0,
  //     yPercent: 100,
  //     duration: 1.5,
  //     stagger: 0.2,
  //     ease,
  //   });
  // }
  // const kBTil = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: kbSection,
  //     start: 'top, 80%',
  //     markers: true,
  //     //end: '=+450',
  //     // scrub: true,
  //   },
  // });
  // kBTil.from('[slide-in]', {
  //   autoAlpha: 0,
  //   yPercent: 100,
  //   stagger: 0.2,
  //   duration: 1.5,
  //   ease,
  // });
  // const hiwTl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: howitWorksSection,
  //     start: 'top, 80%',
  //     markers: true,
  //     //end: '=+450',
  //     // scrub: true,
  //   },
  // });
  // hiwTl.from('[gridcard-slide]', {
  //   autoAlpha: 0,
  //   yPercent: 100,
  //   duration: 1.5,
  //   stagger: 0.2,
  //   ease,
  // });
});

//   console.log('Master services');
//   const ease = 'expo.out';
//   const duration = 1;
//   const stagger = 0.3;
//   const autoAlpha = 0;

//   const scrollTObj = {
//     trigger: '',
//     start: 'top, 80%',
//     markers: false,
//     //end: '=+450',
//     //scrub: true,
//   };

//   const headingAnim = { yPercent: 100, autoAlpha, duration };
//   const animObj2 = { yPercent: 100, autoAlpha, duration: 1.5, ease, stagger };

//   const allSLides = document.querySelectorAll('[slide-in]');
//   const numSlides = document.querySelectorAll('[num-slide]');
//   gsap.set(allSLides, { visibility: 'hidden' });
//   //gsap.set(numSlides, { visibility: 'hidden' });
//   const heroTl = gsap.timeline({ ease: ease });

//   heroTl
//     .from(allSLides, { yPercent: 120, autoAlpha: 0, stagger, duration: 1.5, ease })
//     .from('[slide-img]', { xPercent: 100, autoAlpha, duration: 1.5, ease }, '<');

//   ///Master solution sect
//   function TestiCardAnim(sect, headingSect, textSlide, numSlide) {
//     const masterTl = gsap.timeline({
//       ease,
//       scrollTrigger: {
//         ...scrollTObj,
//         trigger: sect,
//         start: 'top, 80%',
//       },
//     });
//     masterTl
//       .from(headingSect, { ...headingAnim })
//       .from(textSlide, { ...animObj2 }, 0.5)
//       .from(numSlide, { xPercent: 100, duration, autoAlpha }, 0.25);
//   }

//   TestiCardAnim('#crestSect', '[cres-heading]', '[cres-slide]', '[cres-num-slide]');

//   function tabAnimation(triggerSect, tabheading, tabMenu, tabSlide) {
//     const tabTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: triggerSect,
//         start: 'top, 80%',
//         // markers: true,
//         //end: '=+450',
//         //scrub: true,
//       },
//     });
//     tabTl
//       .from(tabheading, { ...headingAnim })
//       .from(tabMenu, { xPercent: 100, duration, ease, autoAlpha, stagger: 0.2 }, '<')
//       .from(tabSlide, { yPercent: 100, autoAlpha, duration: 1.5, ease, stagger }, 0.25);
//   }

//   tabAnimation('[tab-sect]', '[tab-heading]', '[tab-menu]', '[tab-slide]');
//   tabAnimation('[tab-sect-2]', '[tab-heading-2]', '[tab-menu-2]', '[tab-slide-2]');

//   const tabBtn = document.querySelectorAll('[tab-menu]');
//   // tabBtn.forEach((btn) => {
//   //   btn.addEventListener('click', (e) => {
//   //     tabTl.restart();
//   //   });
//   // });

//   ////monhtly packages
//   const relTl = gsap.timeline({
//     ease,
//     scrollTrigger: {
//       ...scrollTObj,
//       trigger: '#reliableSolutionSect',
//     },
//   });

//   relTl.from('[rel-heading]', { ...headingAnim }).from('[rel-slide]', { ...animObj2 }, 0.25);

//   ///moving office
//   const mvTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: '#movingOffice',
//       start: 'top 80%',
//       markers: true,
//     },
//   });

//   mvTl
//     .from('[mv-heading]', { ...headingAnim })
//     .from('[mv-slide]', { ...headingAnim }, '<')
//     .fromTo(
//       '[mv-slide-r]',
//       { yPercent: 120, opacity: 0, autoAlpha: 1 },
//       { yPercent: 0, opacity: 1, stagger, duration, ease },
//       '<'
//     );

//   /////NUMB box section
//   const numSlideTl = gsap.timeline({
//     scrollTrigger: {
//       ...scrollTObj,
//       trigger: '[smoothTech--sect]',
//       start: isMobile() ? 'top, 40%' : 'top, 70%',
//       // markers: true,
//       scrub: true,
//       end: '+=800',
//     },
//   });

//   const lineUp = document.querySelectorAll('[g-trigger]');

//   lineUp.forEach((line, i) => {
//     const circleItem = line.querySelector('circle');
//     //active circle
//     const activCir = lineUp[i];

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: line,
//         start: isMobile() ? 'top 70%' : 'top 80%',
//         end: isMobile() ? 'bottom 50%' : 'bottom 65%',
//         // markers: true,
//         scrub: true,
//         onEnter: function () {
//           activCir.classList.add('active');
//         },
//         onLeave: function () {
//           activCir.classList.remove('active');
//         },
//       },
//     });
//   });

//   numSlideTl
//     .from('[slide-right-1]', { scale: 0, ease: 'none', autoAlpha })
//     .from('[slide-left-1]', { scale: 0, ease: 'none', autoAlpha })
//     .from('[slide-right-2]', { scale: 0, ease: 'none', autoAlpha })
//     .from('[slide-left-2]', { scale: 0, ease: 'none', autoAlpha });
// });

// window.Webflow ||= [];
// window.Webflow.push(() => {
// const scrollTObj = {
//   trigger: '',
//   start: 'top, 80%',
//   markers: false,
//   //end: '=+450',
//   //scrub: true,
// };
// const tabTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '[tab-sect]',
//     start: 'top, 80%',
//     // markers: true,
//     //end: '=+450',
//     //scrub: true,
//   },
// });
//   .from('[mv-slide]', { ...animObj2, duration: 1 }, '<');
// const tabBtn = document.querySelectorAll('[tab-menu]');
// tabBtn.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     tabTl.restart();
//   });
// });
// console.log('Master solution');
// const ease = 'expo.out';
// const duration = 1;
// const stagger = 0.3;
// const autoAlpha = 0;
// function isMobile() {
//   return window.innerWidth < 423;
// }
// const allSLides = document.querySelectorAll('[slide-in]');
// const numSlides = document.querySelectorAll('[num-slide]');
// gsap.set(allSLides, { visibility: 'hidden' });
// //gsap.set(numSlides, { visibility: 'hidden' });
// const heroTl = gsap.timeline({ ease: ease });
// heroTl
//   .from(allSLides, { yPercent: 120, autoAlpha: 0, stagger: 0.2, duration: 1.5, ease })
//   .from('[slide-img]', { xPercent: 100, autoAlpha: 0, duration: 1.5, ease }, '<');
// //num sec
// const trigger = document.querySelector('[numb-sect]') as HTMLElement;
// const numTl = gsap.timeline({
//   ease,
//   scrollTrigger: {
//     trigger: trigger,
//     start: 'top, 80%',
//     // markers: true,
//   },
// });
// numTl
//   .from(numSlides, { yPercent: -100, autoAlpha: 0, stagger, duration: 1 })
//   .from('[line-slide]', { autoAlpha: 0, opacity: 0, ease }, 0.5);
// /////activities section
// const actiTl = gsap.timeline({
//   ease,
//   scrollTrigger: {
//     trigger: '[acti-sect]',
//     start: 'top, 60%',
//     // markers: true,
//   },
// });
// actiTl
//   .from('[acti-heading]', { yPercent: 100, autoAlpha: 0, duration })
//   .from('[acti-slide]', { yPercent: 100, autoAlpha: 0, stagger, duration: 1.5 }, '<')
//   .from('[acti-border]', { opacity: 0, autoAlpha: 0, ease, duration: 1 }, 0.45)
//   .from('[acti-img]', { xPercent: 100, autoAlpha: 0, duration: 1 }, '<');
// //why choose use section
// const whyChooseTl = gsap.timeline({
//   ease,
//   scrollTrigger: {
//     trigger: '#whyChooseUs',
//     start: 'top, 80%',
//     //markers: true,
//     end: '=+450',
//     scrub: true,
//   },
// });
// ///
// //major obj
// const headingAnim = { yPercent: 100, autoAlpha, duration };
// const animObj2 = { yPercent: 100, autoAlpha, duration: 1.5, ease, stagger };
// const scrollTObj = {
//   trigger: '#outsourceSect',
//   start: 'top, 80%',
//   markers: false,
//   //end: '=+450',
//   //scrub: true,
// };
// ////
// whyChooseTl
//   .from('[sup-heading]', { yPercent: 100, autoAlpha, duration })
//   .from('[sup-slide]', { yPercent: 100, autoAlpha, duration: 1.5, ease, stagger }, 0.5);
// ///Outsource section
// const outTl = gsap.timeline({
//   ease,
//   scrollTrigger: { ...scrollTObj, start: 'top, 80%' },
// });
// outTl
//   .from('[out-heading]', { ...headingAnim })
//   .from('[out-slide-r]', { xPercent: 100, autoAlpha: 0, duration: 1.5, stagger }, 0.5)
//   .from('[out-slide]', { ...animObj2, duration: 1 }, '<');
// function TestiCardAnim(sect: string, headingSect: string, textSlide: string, numSlide: string) {
//   ///Master solution sect
//   const masterTl = gsap.timeline({
//     ease,
//     scrollTrigger: {
//       ...scrollTObj,
//       trigger: sect,
//       start: 'top, 80%',
//     },
//   });
//   masterTl
//     .from(headingSect, { ...headingAnim })
//     .from(textSlide, { ...animObj2 }, 0.5)
//     .from(numSlide, { xPercent: 100, duration, autoAlpha }, 0.25);
// }
// TestiCardAnim('#masterSolutionSect', '[master-heading]', '[master-slide]', '[master-num-slide]');
// TestiCardAnim('#crestSect', '[cres-heading]', '[cres-slide]', '[cres-num-slide]');
// ///Reliable solution Sect
// const relTl = gsap.timeline({
//   ease,
//   scrollTrigger: {
//     ...scrollTObj,
//     trigger: '#reliableSolutionSect',
//   },
// });
// relTl.from('[rel-heading]', { ...headingAnim }).from('[rel-slide]', { ...animObj2 }, 0.25);
// /////Banner section
// const bannerTl = gsap.timeline({
//   ease,
//   scrollTrigger: {
//     ...scrollTObj,
//     trigger: '#bannerSect',
//     start: 'top, 70%',
//   },
// });
// bannerTl
//   .from('[banner-brder-slide]', { xPercent: -100, ease, duration: 1.5, autoAlpha })
//   .from('[banner-slide-r]', { xPercent: 100, ease, duration: 2, autoAlpha, stagger: 0.05 }, 0.25);
// ////Faq section
// const faqTl = gsap.timeline({
//   ease,
//   scrollTrigger: {
//     ...scrollTObj,
//     trigger: '#faqSect',
//   },
// });
// faqTl.from('[faq-heading]', { ...headingAnim }).from('[faq-slide]', { ...animObj2 }, '<');
// /////NUMB box section
// const numSlideTl = gsap.timeline({
//   scrollTrigger: {
//     ...scrollTObj,
//     trigger: '[smoothTech--sect]',
//     start: isMobile() ? 'top, 40%' : 'top, 70%',
//     // markers: true,
//     scrub: true,
//     end: '+=800',
//   },
// });
// const lineUp = document.querySelectorAll('[g-trigger]');
// lineUp.forEach((line, i) => {
//   const circleItem = line.querySelector('circle');
//   //active circle
//   const activCir = lineUp[i];
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: line,
//       start: isMobile() ? 'top 70%' : 'top 80%',
//       end: isMobile() ? 'bottom 50%' : 'bottom 65%',
//       // markers: true,
//       scrub: true,
//       onEnter: function () {
//         activCir.classList.add('active');
//       },
//       onLeave: function () {
//         activCir.classList.remove('active');
//       },
//     },
//   });
// });
// numSlideTl
//   .from('[slide-right-1]', { scale: 0, ease: 'none', autoAlpha })
//   .from('[slide-left-1]', { scale: 0, ease: 'none', autoAlpha })
//   .from('[slide-right-2]', { scale: 0, ease: 'none', autoAlpha })
//   .from('[slide-left-2]', { scale: 0, ease: 'none', autoAlpha });
//});
