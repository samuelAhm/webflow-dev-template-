import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenisScroll } from 'src/gsap/smoothScroll';

function isMobile(): boolean {
  return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
}

function isTablet(): boolean {
  return window.innerWidth <= 991; // Example breakpoint, adjust as necessary
}

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);

  //logo section
  createScrollAnimation('logo--sect', 'logo-scroll', {});
  //line through a section
  const lineTrigger = document.querySelector('[line-through--sect]');
  const lineTl = gsap.timeline({
    scrollTrigger: {
      trigger: lineTrigger,
      start: 'top 75%',
    },
  });
  lineTl.to('[line-through--items]', {
    '--line-width': '100%',
    duration: 1.25,
    ease: 'power2.inOut',
  });

  createScrollAnimation('below-logo-sect', 'below-item', {});
  createScrollAnimation('test--sect', 'testi-el', {});
  createScrollAnimation('grid-sect', 'grid-item', {});
  createScrollAnimation('record-sect', 'record-item', {});
  createScrollAnimation('team-sect', 'team-item', {});
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
