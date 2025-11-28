import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenisScroll } from 'src/gsap/smoothScroll';

function isMobile(): boolean {
  return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
}
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);
  cardAbsSlide();

  function cardAbsSlide() {
    const section_trigger = document.querySelector('[float-sect]');
    const cardAbsSlide = document.querySelectorAll('[sticky-element="show"]');

    const cardTl = gsap.timeline({
      scrollTrigger: {
        trigger: section_trigger,
        start: isMobile() ? 'top 3%' : 'top 8%',
        //   end: 'bottom 70%',
        scrub: true,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });

    cardTl.from(cardAbsSlide, { yPercent: 250, stagger: 0.2 }, 0);
  }
});
