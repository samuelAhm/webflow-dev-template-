import { lenisScroll } from 'src/smoothScroll_updated';

// import { createOrganicFloatingElements } from './helpers';

/**
 * Creates organic floating animation for elements
 * @param section - Container element
 * @param selector - Selector for floating elements
 * @param options - Configuration options
 */

// Usage
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);

  function isTablet(): boolean {
    return window.innerWidth <= 767; // Example breakpoint, adjust as necessary
  }

  function isMobile(): boolean {
    return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
  }

  const EASE = 'back.out';
  const BOUNCE_EASE = 'elastic.out(1, 0.5)';

  const bannerSection = document.querySelector('[banner-cta--section]') as HTMLElement;
  const bannerItems = document.querySelectorAll('[ban-text]') as NodeListOf<HTMLElement>;
  const bannerCta = document.querySelectorAll('[ban-cta]') as NodeListOf<HTMLElement>;

  const heroSection = document.querySelector('[hero--section]') as HTMLElement;

  //map html element
  const mapOverSections = document.querySelectorAll('[dot-cover]') as NodeListOf<HTMLElement>;

  const growth_section = document.querySelector('[growth--section]') as HTMLElement;
  const growth_items = document.querySelectorAll('[growth-card]') as NodeListOf<HTMLElement>;

  // createOrganicFloatingElements(heroSection, '[float-icon]', {
  //   baseDistance: 100, // Base movement amount
  //   durationRange: [5, 10], // 5-10 second segments
  //   axisBias: 0.6, // Slight preference for axis-aligned movement
  // });

  createScrollAnimation('logo--section', 'logo-slide', {});
  createScrollAnimation('card--section', 'cards-slide', {});
  // createScrollAnimation('speed--section', 'speed-slide', {});
  ///map section

  mapOverSections.forEach((dotCover) => {
    //tranversr to parent
    const parent = dotCover.parentElement;
    const targetEL = parent?.querySelector('[map-hover-reveal]') as HTMLElement;

    console.log(targetEL);

    const tl = gsap.timeline({
      paused: true,
    });

    tl.from(targetEL, {
      yPercent: 50,
      duration: 0.5,
      ease: EASE,
      autoAlpha: 0,
    });

    dotCover.addEventListener('mouseover', () => {
      tl.play();

      dotCover.addEventListener('mouseout', () => {
        tl.reverse();
      });
    });
  });

  // //growth section
  // const growthTl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: growth_section,
  //     start: 'top 75%',
  //   },
  // });

  // growthTl.from(growth_items, {
  //   yPercent: -50,
  //   stagger: 0.15,
  //   autoAlpha: 0,
  //   ease: BOUNCE_EASE,
  //   reversed: true,
  //   duration: 1.25,
  // });

  // createScrollAnimation('faq--section', 'faq-slide', {});
  createScrollAnimation('media--section', 'media-slide', {});
  // createScrollAnimation('connected--section', 'connected-slide', {});

  //banner drop
  const banTl = gsap.timeline({
    scrollTrigger: {
      trigger: bannerSection,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
      // markers: true,
    },
  });

  banTl
    .from(bannerItems, {
      yPercent: -100,
      stagger: 0.5,
      autoAlpha: 0,
      ease: EASE,
      // reversed: true,
      duration: 1.6,
    })
    .from(
      bannerCta,
      {
        yPercent: -100,
        autoAlpha: 0,
      },
      1
    );

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
    tl.from(
      `[${logo}]`,
      { y: y, stagger: stagger, autoAlpha: autoAlpha, ease: BOUNCE_EASE, duration: 1.5 },
      0
    );
  }
});
