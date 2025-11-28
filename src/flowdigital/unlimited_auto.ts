import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenisScroll } from 'src/gsap/smoothScroll';

function isMobile(): boolean {
  return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
}

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);

  //reset scrollTrigger

  cardAbsSlide(gsap, isMobile);

  //logo section
  createScrollAnimation('logo--sect', 'logo-scroll', {});
  //businees section
  createScrollAnimation('business--sect', 'business-item', {});
  //auto-monthly section
  createScrollAnimation('auto-monthly--sect', 'auto-monthly-item', {});
  //unlimited section
  createScrollAnimation('unlimited--sect', 'unlimited-item', {});
  //grid section
  createScrollAnimation('grid--sect', 'grid-item', {});
  //pricing section
  createScrollAnimation('pricing--sect', 'pricing-item', {});
  //auto section
  createScrollAnimation('auto--sect', 'auto-item', {});
  //service section
  createScrollAnimation('services--sect', 'services-item', {});
  //faq section
  createScrollAnimation('faq--sect', 'faq-item', {});
  //banner section
  createScrollAnimation('banner--sect', 'banner-item', {});
});

function createScrollAnimation(section_trigger: string, logo: string, options: any = {}) {
  // Default options
  const { start = 'top 75%', y = 50, stagger = 0.15, autoAlpha = 0, markers = false } = options;
  // Create the timeline with ScrollTrigger
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: `[${section_trigger}]`,
      start: start,
      markers: markers,
    },
  });
  // Add the animation to the timeline
  tl.from(`[${logo}]`, { y: y, stagger: stagger, autoAlpha: autoAlpha }, 0);

  ScrollTrigger.refresh();
}

function cardAbsSlide(gsap: any, isMobile: any) {
  const section_trigger = document.querySelector('[float-sect]');
  const cardAbsSlide = document.querySelectorAll('[sticky-element="show"]');

  const cardTl = gsap.timeline({
    scrollTrigger: {
      trigger: section_trigger,
      start: isMobile() ? 'top 3%' : 'top 15%',
      //   end: 'bottom 70%',
      scrub: true,
      pin: true,
      pinSpacing: true,
      // markers: true,
    },
  });

  cardTl.from(cardAbsSlide, { yPercent: 200, stagger: 0.2 }, 0);
}
