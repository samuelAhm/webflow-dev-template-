// import { gsap } from 'gsap';

// Constants for reusable values
const EASE_SCROLL_INTO = 'elastic.out(1, 0.9)';
const DEFAULT_DURATION = 1.5;
const STAGGER_DELAY = 0.2;

// Helper function to fade in elements
function fadeInElements(
  elements,
  yPercent = 0,
  duration = DEFAULT_DURATION,
  stagger = STAGGER_DELAY
) {
  return gsap.from(elements, { yPercent, autoAlpha: 0, duration, stagger, ease: EASE_SCROLL_INTO });
}

// Background movement animation
export const bgMovement = function (gsap: any) {
  const bgs = gsap.utils.toArray('[color-grad]'); // Use gsap.utils.toArray for better compatibility
  const bgTimeline = gsap.timeline();

  bgTimeline.to(bgs, {
    xPercent: 30,
    duration: 20,
    ease: EASE_SCROLL_INTO,
    yoyo: true,
    repeat: -1,
    repeatDelay: 1,
  });
};

// Hero section animation
export const heroAnimation = function (gsap: any) {
  const heroLinks = document.querySelectorAll('[link-drop]');
  const heroBox = document.querySelector('[slide-right]');
  const logoName = document.querySelector('[logo-name]');

  const heroTimeline = gsap.timeline();

  heroTimeline
    .from(heroLinks, {
      yPercent: 100,
      autoAlpha: 0,
      stagger: STAGGER_DELAY,
      duration: DEFAULT_DURATION,
      ease: EASE_SCROLL_INTO,
    })
    .from(
      heroBox,
      { xPercent: 100, autoAlpha: 0, duration: DEFAULT_DURATION, ease: EASE_SCROLL_INTO },
      0.4
    )
    .from(
      logoName,
      { yPercent: -100, autoAlpha: 0, duration: DEFAULT_DURATION, ease: EASE_SCROLL_INTO },
      0.7
    );
};

// Lab section animation
export const labSection = function (gsap: any) {
  const labSection = document.querySelector('#labSection');
  const cardConnector = document.querySelector('[connector]');
  const teamCard = document.querySelector('[team-card]');

  const labTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: labSection,
      start: 'top 85%',
      end: '+=130%',
      scrub: 2,
      toggleActions: 'play none none reverse',
    },
  });

  labTimeline
    .from('[labImgCover]', { height: '20%' })
    .from(teamCard, { yPercent: 100 }, 0.1)
    .from(cardConnector, { scaleX: 0.5 }, 0.1);
};

// Text scroll animation
export const textScroll_animation = function (gsap: any, SplitType: any) {
  const typeSplit = new SplitType('[gritvision-scroll]', { types: 'word chars', tagName: 'span' });
  const allTextWrapper = document.querySelector('[text--wrapper]') as HTMLElement;
  const words = gsap.utils.toArray('.word', allTextWrapper); // Use gsap.utils.toArray
  const scrollSection = document.querySelector('[text-scrollSection]');

  const iconTimeline = gsap.timeline({ paused: true, delay: 1.5 });
  iconTimeline.from('[grit-icon]', {
    z: 300,
    stagger: 0.15,
    duration: DEFAULT_DURATION,
    autoAlpha: 0,
    ease: EASE_SCROLL_INTO,
  });

  const scrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: scrollSection,
      start: 'top 5%',
      end: '=+250%',
      scrub: true,
      pin: true,
      pinSpacing: true,
    },
    onStart: () => iconTimeline.play(),
  });

  scrollTimeline.from(words, { filter: 'blur(15px)', opacity: 0, stagger: 0.1 });
};

// Float section animation
export const floatSection = function (gsap: any) {
  const floatSection = document.querySelector('[float--section]');
  const floatItems = document.querySelectorAll('[float-item]');

  const floatTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: floatSection,
      start: 'top 3%',
      scrub: true,
      pin: true,
      pinSpacing: true,
    },
  });

  floatTimeline.from(floatItems, { yPercent: 140, stagger: 0.24 });
};

// Result section animation
export const resultSection = function (gsap: any, SplitType: any) {
  // Split Text
  new SplitType('[slide-text]', { types: 'word chars', tagName: 'span' });

  const capTrigger = document.querySelector('[cap-trigger]');
  const capElements = document.querySelectorAll('[capsule]');
  const resultSection = document.querySelector('[result--section]') as HTMLElement;
  const leftScrollCard = document.querySelector('[resScroll-left]');
  const rightScrollCard = document.querySelector('[resScroll-right]');
  const cardScrollSection = document.querySelector('[card--sect]');
  const words = resultSection.querySelectorAll('.word');

  // Capsule animation
  const capsuleTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: capTrigger,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });

  capsuleTimeline.from(capElements, {
    yPercent: 100,
    duration: 2.5,
    autoAlpha: 0,
    stagger: 0.6,
    ease: EASE_SCROLL_INTO,
  });

  // Card scroll animation
  const cardScrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: cardScrollSection,
      start: 'top 15%',
      toggleActions: 'play none none reverse',
    },
  });

  cardScrollTimeline
    .from(leftScrollCard, {
      xPercent: -100,
      autoAlpha: 0,
      duration: DEFAULT_DURATION,
      ease: EASE_SCROLL_INTO,
    })
    .from(
      rightScrollCard,
      { xPercent: 100, autoAlpha: 0, duration: DEFAULT_DURATION * 0.8, ease: EASE_SCROLL_INTO },
      0
    );

  // Result text animation
  const resultTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: resultSection,
      start: 'top 2%',
      scrub: true,
      pin: true,
      // pinSpacing: true,
    },
  });

  resultTimeline.from(words, { filter: 'blur(15px)', opacity: 0, stagger: 0.13 });
};

// Z-index section animation
export const z_indexSection = function (gsap: any) {
  const zIndexSection = document.querySelector('[z-section]');
  const zItems = document.querySelectorAll('[z-item]');

  const zIndexTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: zIndexSection,
      start: 'top 10%',
      end: '+=120%',
      pin: true,
      pinSpacing: true,
      toggleActions: 'play none none reverse',
    },
  });

  zIndexTimeline.fromTo(
    zItems,
    { z: -170, opacity: 0, filter: 'blur(10px)' },
    { z: 170, stagger: 0.25, opacity: 1, filter: 'blur(0px)' }
  );
};

// Metric section animation
export const metricSection = function (gsap: any, bodyEl: HTMLElement) {
  const metricSection = document.querySelector('[metric--section]');
  const metric1 = document.querySelector('[metric--item-1]');
  const metric2 = document.querySelector('[metric--item-2]');
  const metric3 = document.querySelector('[metric--item-3]');

  const metricTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: metricSection,
      start: 'top 10%',
      end: '+=250%',
      scrub: true,
      pin: true,
      pinSpacing: true,
      onEnter: () => bodyEl.classList.add('metric-sect'),
      onEnterBack: () => bodyEl.classList.add('metric-sect'),
      onLeave: () => bodyEl.classList.remove('metric-sect'),
      onLeaveBack: () => bodyEl.classList.remove('metric-sect'),
    },
  });

  metricTimeline
    .to(metric1, { z: 100, opacity: 1 })
    .to(metric1, { opacity: 0 }, 0.5)
    .to(metric2, { z: 100, opacity: 1 }, 1)
    .to(metric2, { opacity: 0 }, 1.5)
    .to(metric3, { z: 100, opacity: 1 }, 2);
};

// Footer animation
export const footerAnimation = function (gsap: any) {
  const footerSection = document.querySelector('[footer--sect]') as HTMLElement;
  const footerIcon = document.querySelector('[footer--icon]');
  const footerLinksWrapper = document.querySelector('[footer--linkswrap]');
  const footerArrow = document.querySelector('[footer--arrow]');

  const footerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: footerSection,
      start: 'top 45%',
      toggleActions: 'play none none reverse',
    },
  });

  footerTimeline
    .from(footerIcon, {
      yPercent: -100,
      autoAlpha: 0,
      stagger: STAGGER_DELAY,
      duration: DEFAULT_DURATION,
      ease: EASE_SCROLL_INTO,
    })
    .from(
      footerLinksWrapper,
      { yPercent: 100, autoAlpha: 0, duration: DEFAULT_DURATION, ease: EASE_SCROLL_INTO },
      0.3
    )
    .from(
      footerArrow,
      { xPercent: -200, autoAlpha: 0, duration: 2.5, ease: EASE_SCROLL_INTO },
      0.3
    );
};

// const easeScrollInto = 'elastic.out(1, 0.9)';

// export const bgMovement = function (gsap: any) {
//   const bgs = [...document.querySelectorAll('[color-grad]')];

//   const bgTl = gsap.timeline({});

//   bgTl.to(bgs, {
//     // yPercent: 30,
//     xPercent: 30,
//     duration: 20,
//     ease: 'elastic.out(1, 0.9)',
//     yoyo: true,
//     repeat: -1,
//     repeatDelay: 1,
//   });
// };

// export const heroAnimation = function (gsap: any) {
//   //links
//   const heroLinks = document.querySelectorAll('[link-drop]');
//   const heroBox = document.querySelector('[slide-right]');
//   const logoName = document.querySelector('[logo-name]');

//   const heroTl = gsap.timeline({});
//   //heroTl.tl.set(heroLinks, { transform: 'translateX(-1.25rem)' });

//   heroTl
//     .from(heroLinks, {
//       yPercent: 100,
//       autoAlpha: 0,
//       stagger: 0.2,
//       duration: 1.5,
//       // duration: 1.5,
//       ease: easeScrollInto,
//     })
//     .from(heroBox, { xPercent: 100, autoAlpha: 0, duration: 1.5, ease: easeScrollInto }, 0.4)
//     .from(logoName, { yPercent: -100, autoAlpha: 0, duration: 1.5, ease: easeScrollInto }, 0.7);
// };

// export const labSection = function (gsap: any) {
//   const labSection = document.querySelector('#labSection');

//   //team card
//   const cardConnector = document.querySelector('[connector]');
//   const teamCard = document.querySelector('[team-card]');

//   const labTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: labSection,
//       start: 'top 85%',
//       toggleActions: 'play none none reverse',
//       //make the end longer
//       end: '+=130%',
//       scrub: 2,
//       // markers: true,
//       //pin: true,
//       // pinSpacing: true,
//     },
//   });

//   labTl
//     .from('[labImgCover]', {
//       height: '20%',
//       //duration: 2,
//     })
//     .from(teamCard, { yPercent: 100 }, 0.1)
//     .from(cardConnector, { scaleX: 0.5 }, 0.1);
// };

// export const textScroll_animation = function (gsap: any, SplitType: any) {
//   const typeSplit = new SplitType('[gritvision-scroll]', {
//     types: 'word chars',
//     tagName: 'span',
//   });

//   const alltextWrapper = document.querySelector('[text--wrapper]') as HTMLElement;
//   const words = [...alltextWrapper?.querySelectorAll('.word')];
//   const scrollSect = document.querySelector('[text-scrollSection]');

//   const bxTl = gsap.timeline({
//     paused: true,
//     delay: 1.5,
//   });

//   bxTl.from('[grit-icon]', {
//     z: 300,
//     stagger: 0.15,
//     duration: 1.5,
//     autoAlpha: 0,
//     ease: easeScrollInto,
//   });

//   const secTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: scrollSect,
//       start: 'top 5%',
//       end: '=+250%',
//       scrub: true,
//       // markers: true,
//       pin: true,
//       pinSpacing: true,
//     },
//     onStart: () => {
//       bxTl.play();
//     },
//   });

//   secTl.from(words, {
//     filter: 'blur(15px)',
//     opacity: 0,
//     stagger: 0.1,
//     // ease: easeScrollInto,
//   });
// };

// export const floatSection = function (gsap: any) {
//   const floatSection = document.querySelector('[float--section]');
//   const float_item = document.querySelectorAll('[float-item]');

//   const floatTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: floatSection,
//       start: 'top 3%',
//       //      end: 'bottom bottom',
//       scrub: true,
//       //  markers: true,
//       pin: true,
//       pinSpacing: true,
//     },
//   });

//   floatTl.from(float_item, { yPercent: 140, stagger: 0.24 }).to(float_item, {}, 0.1);
// };

// export const resultSection = function (gsap: any) {
//   const capTrigger = document.querySelector('[cap-trigger]');
//   const capEl = document.querySelectorAll('[capsule]');
//   //cap tl
//   const capTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: capTrigger,
//       start: 'top 80%',
//       toggleActions: 'play none none reverse',
//     },
//   });

//   capTl.from(capEl, {
//     yPercent: 100,
//     duration: 2.5,
//     autoAlpha: 0,
//     stagger: 0.6,
//     ease: easeScrollInto,
//   });

//   const resultSection = document.querySelector('[result--section]') as HTMLElement;
//   const leftScrollCard = document.querySelector('[resScroll-left]');
//   const rightScrollCard = document.querySelector('[resScroll-right]');

//   const cardScrollSect = document.querySelector('[card--sect]');

//   const cardScrollTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: cardScrollSect,
//       start: 'top 15%',
//       //  markers: true,
//       toggleActions: 'play none none reverse',
//     },
//   });

//   cardScrollTl
//     .from(leftScrollCard, { xPercent: -100, autoAlpha: 0, duration: 1.5, ease: easeScrollInto })
//     .from(
//       rightScrollCard,
//       {
//         xPercent: 100,
//         autoAlpha: 0,
//         duration: 1.25,
//         ease: easeScrollInto,
//       },
//       0
//     );

//   const words = resultSection.querySelectorAll('.word');

//   const result_item = document.querySelectorAll('[result-item]');

//   const resultTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: resultSection,
//       start: 'top top',
//       //      end: 'bottom bottom',
//       scrub: true,
//       //markers: true,
//       pin: true,
//       pinSpacing: true,
//     },
//   });

//   resultTl.from(words, { filter: 'blur(15px)', opacity: 0, stagger: 0.13 });
// };

// export const z_indexSection = function (gsap: any) {
//   const z_indexSect = document.querySelector('[z-section]');

//   //z items
//   const z_items = document.querySelectorAll('[z-item]');

//   const z_indexTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: z_indexSect,
//       start: 'top 10%',
//       end: '+=120%',
//       // scrub: 1,
//       //  markers: true,
//       pin: true,
//       pinSpacing: true,
//       toggleActions: 'play none none reverse',
//     },
//     // onComplete: () => {
//     //   gsap.to(z_items, { opacity: 0 });
//     // },
//   });

//   z_indexTl.fromTo(
//     z_items,
//     { z: -170, opacity: 0, filter: 'blur(10px)' },
//     { z: 170, stagger: 0.25, opacity: 1, filter: 'blur(0px)' }
//   );
// };

// export const metricSection = function (gsap: any, bodyEl: HTMLElement) {
//   const m_section = document.querySelector('[metric--section]');

//   // const allMetric = document.querySelectorAll('[metric--item]');
//   const metric1 = document.querySelector('[metric--item-1]');
//   const metric2 = document.querySelector('[metric--item-2]');
//   const metric3 = document.querySelector('[metric--item-3]');

//   const mTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: m_section,
//       start: 'top 10%',
//       //      end: 'bottom bottom',
//       end: '+=250%',
//       scrub: true,
//       //  markers: true,
//       pin: true,
//       pinSpacing: true,
//       onEnter: () => {
//         bodyEl.classList.add('metric-sect');
//       },
//       onEnterBack: () => {
//         bodyEl.classList.add('metric-sect');
//       },
//       onLeave: () => {
//         bodyEl.classList.remove('metric-sect');
//       },
//       onLeaveBack: () => {
//         bodyEl.classList.remove('metric-sect');
//       },
//     },
//   });

//   mTl
//     .to(metric1, { z: 100, opacity: 1 })
//     .to(metric1, { opacity: 0 }, 0.5)
//     .to(metric2, { z: 100, opacity: 1 }, 1)
//     .to(metric2, { opacity: 0 }, 1.5)
//     .to(metric3, { z: 100, opacity: 1 }, 2);
// };

// export const footerAnimation = function (gsap: any) {
//   const footerSect = document.querySelector('[footer--sect]') as HTMLElement;
//   const footerIcon = document.querySelector('[footer--icon]');
//   const footerLinksWrapper = document.querySelector('[footer--linkswrap]');
//   const footerArrow = document.querySelector('[footer--arrow]');

//   const footerTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: footerSect,
//       start: 'top 45%',
//       // end: '+=500vh',
//       // scrub: 2,
//       // markers: true,
//       toggleActions: 'play none none reverse',
//     },
//   });

//   footerTl
//     .from(footerIcon, {
//       yPercent: -100,
//       autoAlpha: 0,
//       stagger: 0.2,
//       duration: 1.5,
//       ease: easeScrollInto,
//     })
//     .from(
//       footerLinksWrapper,
//       {
//         yPercent: 100,
//         autoAlpha: 0,
//         duration: 1.5,
//         ease: easeScrollInto,
//       },
//       0.3
//     )
//     .from(footerArrow, { xPercent: -200, autoAlpha: 0, duration: 2.5, ease: easeScrollInto }, 0.3);
// };
