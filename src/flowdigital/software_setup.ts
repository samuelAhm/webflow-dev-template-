import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenisScroll } from 'src/gsap/smoothScroll';

function isMobile(): boolean {
  return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
}

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);

  //section scroll base animation
  //hero section
  createScrollAnimation('hero--sect', 'hero-item', {});
  //section sect
  createScrollAnimation('section--sect', 'section-item', {});
  //better section
  createScrollAnimation('better--sect', 'better-item', {});
  //company section
  createScrollAnimation('company--sect', 'company-item', {});
  //what we do section
  createScrollAnimation('what-we-do--sect', 'what-we-do-item', {});
  //client section
  createScrollAnimation('client--sect', 'client-item', {});
  //pricing section
  createScrollAnimation('pricing--sect', 'pricing-item', {});
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
}
