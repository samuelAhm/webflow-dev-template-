import { lenisScroll } from 'src/smoothScroll_updated';

import { createOrganicFloatingElements } from './helpers';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);

  function isMobile(): boolean {
    return window.innerWidth <= 767; // Example breakpoint, adjust as necessary
  }

  const EASE = 'back.out';
  const BOUNCE_EASE = 'elastic.out(1, 0.5)';
  const POWER_EASE = 'power2.out';

  //HTML elements
  //testimonial section
  const test_trigger = document.getElementById('client-testimonials') as HTMLElement;
  const img_Slide = test_trigger.querySelector('[img-slide]') as HTMLElement;
  const testimonial_el = [...test_trigger.querySelectorAll('[slideup]')] as HTMLElement[];

  //counter up animation
  const allCounters = gsap.utils.toArray('[counter]') as HTMLElement[];
  const counterBox = [...document.querySelectorAll('[counter-box]')] as HTMLElement[];
  //drop section animation elements
  const drop_sect_trigger = document.querySelector('[drop--section]') as HTMLElement;
  const drop_items = [...drop_sect_trigger.querySelectorAll('[drop-item]')] as HTMLElement[];
  const tp_items = [...drop_sect_trigger.querySelectorAll('[drop-tp]')] as HTMLElement[];
  const md_items = [...drop_sect_trigger.querySelectorAll('[drop-md]')] as HTMLElement[];
  const btm_items = [...drop_sect_trigger.querySelectorAll('[drop-btm]')] as HTMLElement[];

  //testimonial section animation
  const test_tl = gsap.timeline({
    scrollTrigger: {
      trigger: test_trigger,
      start: 'top 70%',
      //   markers: true,
    },
  });

  test_tl.from(
    testimonial_el,
    { yPercent: 100, autoAlpha: 0, stagger: 0.1, ease: EASE, duration: 1 },
    0.25
  );

  //logo section animation
  createScrollAnimation('logo--section', 'logo-slide', {});
  //faq section animation
  createScrollAnimation('faq-section', 'faq-slide', {});
  //metric section animation
  // createScrollAnimation('metric-sect', 'metric-slide', {});

  const createOdometer = (el: HTMLElement) => {
    //get the value of the text from the el
    const value = el.getAttribute('count-uptext');
    const odometer = new Odometer({
      el: el,
      value: 0,
      duration: 250,
    });
    odometer.update(value);
  };

  if (allCounters.length > 0) {
    counterBox.forEach((el, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          // end: 'bottom 50%',
          //markers: true,
          scrub: true,
          onEnter: function () {
            createOdometer(allCounters[i]);
          },
        },
        defaults: { duration: 0.5, ease: 'power2.out' },
      });
    });
  }

  //drop section animation
  createScrollAnimation('drop-text-sect', 'drop-slide', {});

  const drop_tl = gsap.timeline({
    // toggleActions: 'play none none play',
    scrollTrigger: {
      trigger: drop_sect_trigger,
      start: isMobile() ? 'top 20%' : 'top 30%',
      // markers: true,
    },
    // toggleActions: 'play none none play',
  });

  drop_tl
    .from(btm_items, {
      yPercent: -100,
      autoAlpha: 0,
      stagger: 0.1,
      ease: BOUNCE_EASE,
      duration: 0.8,
    })
    .from(
      md_items,
      {
        yPercent: -100,
        autoAlpha: 0,
        stagger: 0.1,
        ease: BOUNCE_EASE,
        duration: 1,
      },
      0.5
    )
    .from(
      tp_items,
      {
        yPercent: -100,
        autoAlpha: 0,
        stagger: 0.1,
        ease: BOUNCE_EASE,
        duration: 1.5,
      },
      0.1
    );

  //press section animation
  createScrollAnimation('press-section', 'press-slide', {});

  //banner section animation
  createScrollAnimation('banner-section', 'banner-slide', {});

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
