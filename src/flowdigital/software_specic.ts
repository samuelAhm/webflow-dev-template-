import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenisScroll } from 'src/gsap/smoothScroll';

function isMobile(): boolean {
  return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
}
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);

  //businees section
  createScrollAnimation('benefit--sect', 'benefit-item', {});

  //grid section
  createScrollAnimation('grid--sect', 'grid-item', {});

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
