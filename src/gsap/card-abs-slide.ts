export const cardAbsSlide = function (gsap, isMobile) {
  const section_trigger = document.querySelector('[solution-sect]');

  const cardAbsSlide = document.querySelectorAll('[sticky-el]');

  const cardTl = gsap.timeline({
    scrollTrigger: {
      trigger: section_trigger,
      start: isMobile() ? 'top 3%' : 'top 15%',
      //   end: 'bottom 70%',
      scrub: true,
      pin: true,
    },
  });

  cardTl.from(cardAbsSlide, { yPercent: 400, stagger: 0.23 }, 0);
};
