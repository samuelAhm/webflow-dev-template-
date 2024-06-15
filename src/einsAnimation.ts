window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('eins');

  /////Animation
  const calendlySrc = 'https://assets.calendly.com/assets/external/widget.js';
  const fakeSrc = 'google.com';

  const script = document.getElementById('calendly') as HTMLScriptElement;
  script.src = '';

  const calendlyLoad = function () {
    if (script.src === calendlySrc) return;

    script.src = calendlySrc;
    script.async = true;

    console.log(script);
  };

  const ctaButtons = document.querySelectorAll('[lf-button="cta"]');

  const initCalendly = function () {
    calendlyLoad();

    Calendly.initPopupWidget({
      url: 'https://calendly.com/d/3tz-5c6-ckp/se-om-eiendomsmalen-er-riktig-for-deg',
    });
    return false;
  };

  ctaButtons.forEach((cta) => {
    cta.addEventListener('click', initCalendly);
  });

  //timeline function
  // const timeline = function (trigger, marker) {
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

  // const headerTl = gsap.timeline({
  //   defaults: {
  //     duration: 3,
  //     ease: 'expo.out',
  //     autoAlpha: 0,
  //   },
  // });

  // headerTl
  //   .from('[bg-move]', {
  //     opacity: 0,
  //   })
  //   .from(
  //     '[move-up]',
  //     {
  //       yPercent: 100,
  //       stagger: 0.2,
  //     },
  //     0.5
  //   )
  //   .from(
  //     '[slide-left]',
  //     {
  //       xPercent: -100,
  //     },
  //     1.5
  //   )
  //   .from(
  //     '[slide-right]',
  //     {
  //       xPercent: 100,
  //     },
  //     2
  //   );

  // //const abtTl = timeline

  // const abtSect = document.querySelector('[about-us]');
  // const abtTl = timeline(abtSect, false);

  // abtTl
  //   .from('[page-moveup]', { yPercent: 100, stagger: 0.3 })
  //   .from('[abt-slideleft]', { xPercent: -100 }, 0.5)
  //   .from('[abt-slideright]', { xPercent: 100 }, 1);

  // //  const sectionAll = [...document.querySelectorAll('[section-name]')];

  // //feature section
  // const gridCard = document.querySelectorAll('.grid-card-1');
  // gridCard.forEach((card) => {
  //   card.addEventListener('mouseenter', () => {
  //     gsap.to(card, { rotate: '-4deg' });
  //   });

  //   card.addEventListener('mouseleave', () => {
  //     gsap.to(card, { rotate: '0deg' });
  //   });
  // });

  // const featureSect = document.querySelector('[feature-sect]');
  // const featureTl = timeline(featureSect, false);

  // featureTl
  //   .from('[f-move]', {
  //     yPercent: 100,
  //   })
  //   .from('[grid-card]', { yPercent: 100, stagger: 0.3 }, 0.5);

  // ///calc section
  // const calcSection = document.querySelector('[calc-section]');

  // const calcTl = timeline(calcSection, false);

  // calcTl
  //   .from('[calc-bg]', { yPercent: 100 })
  //   .from('[cal-move]', { yPercent: 100, stagger: { amount: 0.5 } }, 1)
  //   .from('[cal-slidein]', { xPercent: 100, stagger: 0.2 }, 0.5);

  // ///testicard
  // const testiSect = document.querySelector('[test-sect]');
  // const testiTl = timeline(testiSect, false);

  // testiTl
  //   .from('[testi-heading]', {
  //     yPercent: 50,
  //   })
  //   .from('[test-cards]', { yPercent: 100, stagger: { amount: 0.3 } }, 0.5);
  // //testimonnial

  // ///steps section
  // const stepSect = document.querySelector('[steps--section]');
  // const lineHeight = document.querySelector('[step-line]') as HTMLElement;
  // console.log(lineHeight.offsetHeight);

  // gsap.to('[arrow-down]', {
  //   y: lineHeight.offsetHeight,
  //   scrollTrigger: {
  //     trigger: stepSect,
  //     start: 'top 15%',
  //     scrub: true,
  //     //markers: true,
  //   },
  // });

  // const stepCard = gsap.utils.toArray('.step-card');

  // stepCard.forEach((card) => {
  //   ScrollTrigger.create({
  //     trigger: card,
  //     //markers: true,
  //     start: 'top 50%',
  //     onEnter: () => {
  //       const activeEl = card.querySelector('.step_card-cap');
  //       activeEl.classList.add('active-step');
  //     },
  //     onLeaveBack: () => {
  //       const activeEl = card.querySelector('.step_card-cap');
  //       activeEl.classList.remove('active-step');
  //     },
  //   });
  // });
  // ///mbstep animation

  // if (isTab()) {
  //   const mbStepCard = gsap.utils.toArray('[mb-step]');
  //   console.log(mbStepCard);

  //   mbStepCard.forEach((card) => {
  //     const activeEl = card.querySelector('.v-flex.gap-tb-16');
  //     const line = card.querySelector('.line-blue');

  //     ScrollTrigger.create({
  //       trigger: card,
  //       //  markers: true,
  //       start: 'top 40%',
  //       onEnter: () => {
  //         activeEl.classList.add('active-el');
  //         activeEl.classList.remove('remove');
  //       },
  //       onLeaveBack: () => {
  //         activeEl.classList.add('remove');
  //         activeEl.classList.remove('active-el');
  //       },
  //     });
  //   });
  // }
  // /////Animation end
  // /////calculator
  // const handle = document.getElementById('sliderHandle');
  // const container = document.getElementById('sliderContainer') as HTMLElement;
  // ///html values to update
  // const monthlyRent = document.getElementById('monthlyRent');
  // const profitEstimate = document.getElementById('profitEstimate');

  // const percentAdj = document.querySelectorAll('[lf-calc="percent"]');
  // //tab to mb text
  // const textYield = document.querySelector('[lf-text="mb-yield"]') as HTMLElement;
  // const text1 = document.querySelector('.bad-text') as HTMLElement;
  // const text2 = document.querySelector('.excellence-text') as HTMLElement;
  // let maxValue = 20;
  // const stepSize = container.offsetWidth / (maxValue - 1);

  // //color picker
  // function getColorForValue(value) {
  //   let color;

  //   if (value >= 1 && value <= 6) {
  //     color = '#f04438';
  //     document.documentElement.style.setProperty('--yield-color', color);
  //   }
  //   if (value >= 7 && value <= 8) {
  //     color = '#f79009';
  //     document.documentElement.style.setProperty('--yield-color', color);
  //   }
  //   if (value >= 9 && value <= 11) {
  //     color = '#039855';
  //     document.documentElement.style.setProperty('--yield-color', color);
  //   }
  //   if (value >= 12 && value <= 20) {
  //     color = '#155eef';
  //     document.documentElement.style.setProperty('--yield-color', color);
  //   }
  //   return 'Invalid value'; // For values outside the 1-20 range
  // }

  // const updateTextOnTab = function (value) {
  //   let text;
  //   if (value >= 1 && value <= 6) {
  //     text = 'Bad';
  //     textYield.textContent = text;
  //   }
  //   if (value >= 7 && value <= 8) {
  //     text = 'OK';
  //     textYield.textContent = text;
  //   }
  //   if (value >= 9 && value <= 11) {
  //     text = 'Good';
  //     textYield.textContent = text;
  //   }
  //   if (value >= 12 && value <= 20) {
  //     text = 'Excellent';
  //     textYield.textContent = text;
  //   }
  //   return 'Invalid value'; // For values outside the 1-20 range
  // };

  // /// detect mobile screen size
  // function isMobile() {
  //   return window.innerWidth < 423;
  // }
  // //tab screen
  // function isTab() {
  //   return window.innerWidth < 767;
  // }

  // ///tab mobile functions
  // const changeUITab = function () {
  //   text1.textContent = '1%';
  //   text2.textContent = '20%';
  // };

  // if (isTab()) {
  //   changeUITab();
  // }

  // if (isMobile()) {
  //   maxValue = 21;
  // }

  // const updatePercentValue = function (val) {
  //   percentAdj.forEach((item) => {
  //     item.textContent = `${val}`;
  //   });
  // };

  // //initialize gsap draggable
  // const draggable = Draggable.create(handle, {
  //   type: 'x',
  //   bounds: container,
  //   onDrag: function () {
  //     const value = Math.round((this.x / container.offsetWidth) * maxValue) + 1; // Scale to 1-20
  //     if (isTab()) {
  //       updateTextOnTab(value);
  //       getColorForValue(value);
  //       updatePercentValue(value);
  //     } else {
  //       getColorForValue(value);
  //       updatePercentValue(value);
  //     }
  //   },
  // })[0];

  // container.addEventListener('click', function (e) {
  //   // Calculate the click position relative to the container
  //   const clickX = e.clientX - container.getBoundingClientRect().left;
  //   // Calculate the target position for the handle
  //   // We snap the click position to the nearest step
  //   const targetX = Math.round(clickX / stepSize) * stepSize;
  //   // Animate the handle to the clicked position using GSAP
  //   gsap.to(handle, { x: targetX, duration: 0.3, onUpdate: updateValue });

  //   function updateValue() {
  //     const value = Math.round(gsap.getProperty(handle, 'x') / stepSize) + 1;
  //     if (isTab()) {
  //       updateTextOnTab(value);
  //       getColorForValue(value);
  //       updatePercentValue(value);
  //     } else {
  //       updatePercentValue(value);
  //       getColorForValue(value);
  //     }
  //   }
  // });
});
