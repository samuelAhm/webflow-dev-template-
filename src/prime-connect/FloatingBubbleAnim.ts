document.addEventListener('DOMContentLoaded', () => {
  const bubblsections = document.querySelectorAll('[bubble-section]');

  if (!bubblsections) return;

  bubblsections.forEach((bub) => {
    const bubElements = bub.querySelectorAll('[float-icon]');

    bubElements.forEach((bubEl) => {
      //get the data-speed value
      const speed = Number(bubEl.getAttribute('data-speed')) * 25;

      const bubAnim = gsap.from(bubEl, {
        yPercent: speed,
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: bub,
        start: 'top 95%',
        end: '+=135%',
        // markers: true,
        scrub: 1,
        animation: bubAnim,
      });
    });
  });
});
