import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { lenisScroll } from 'src/smoothScroll_updated';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = lenisScroll(ScrollTrigger, gsap);

  function isTablet(): boolean {
    return window.innerWidth <= 767; // Example breakpoint, adjust as necessary
  }

  function isMobile(): boolean {
    return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
  }

  const EASE = 'back.out';
  const BOUNCE_EASE = 'elastic.out(1, 0.5)';
  const POWER_EASE = 'power2.out';

  //html elements
  //testimonial section
  const test_trigger = document.getElementById('client-testimonials') as HTMLElement;
  const img_Slide = test_trigger.querySelector('[img-slide]') as HTMLElement;
  const testimonial_el = [...test_trigger.querySelectorAll('[slideup]')] as HTMLElement[];
  //testimonial section animation
  const test_tl = gsap.timeline({
    scrollTrigger: {
      trigger: test_trigger,
      start: 'top 70%',
      //   markers: true,
    },
  });

  test_tl
    .from(
      img_Slide,
      { opacity: 0, yPercent: -100, stagger: 0.1, ease: POWER_EASE, duration: 1.5 },
      0
    )
    .from(
      testimonial_el,
      { yPercent: 100, autoAlpha: 0, stagger: 0.1, ease: EASE, duration: 1 },
      0.25
    );

  createScrollAnimation('solution-section', 'sol-slide', {});

  createScrollAnimation('before-section', 'before-slide', {});

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
