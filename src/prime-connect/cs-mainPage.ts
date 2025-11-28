import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { lenisScroll } from 'src/smoothScroll_updated';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  lenisScroll(ScrollTrigger, gsap);

  createScrollAnimation('cs-section', 'cs-slide', {});

  function createScrollAnimation(section_trigger: string, logo: string, options: any = {}) {
    // Default options
    const { start = 'top 70%', y = 50, stagger = 0.15, autoAlpha = 0, markers = false } = options;
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
});
