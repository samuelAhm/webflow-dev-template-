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
  if (!isMobile()) {
    horizontal_Scroll();
  }

  cardAbsSlide(gsap, isMobile);

  //logo section
  createScrollAnimation('pipecrm--sect', 'pipecrm-item', {});
  //businees section
  createScrollAnimation('benefit--sect', 'benefit-item', {});

  //pipes section
  createScrollAnimation('pipescroll--sect', 'pipescroll-item', {});

  //fl section
  createScrollAnimation('fl--sect', 'fl-item', {});

  //roi section
  createScrollAnimation('roi--sect', 'roi-item', {});
  //pricing section
  createScrollAnimation('pricing--sect', 'pricing-item', {});
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

function horizontal_Scroll() {
  const horizontalScroll_trigger = document.querySelector('[hori-scroll--sect]');
  const scrollDivs = document.querySelectorAll('[scroll-div]');
  const scrollDivs_container = document.querySelector('[scroll-el="container"]');
  const scrollImgWrap = document.querySelector('[img-icon--scroll]');
  const imageScroll_div = document.querySelector('[img-scroller-div]') as HTMLElement;

  function getScrollAmount() {
    const { scrollWidth } = imageScroll_div;
    return -(scrollWidth - window.innerWidth);
  }

  ///horizonal scroll
  const hscrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: horizontalScroll_trigger,
      start: 'top 1%',
      //make the end longer
      end: () => `+=${getScrollAmount() * -1}`,
      scrub: true,
      //markers: true,
      pin: true,
      pinSpacing: true,
    },
  });

  hscrollTl
    .to(scrollDivs, {
      x: getScrollAmount,
    })
    .to(
      scrollImgWrap,
      {
        x: getScrollAmount,
      },
      0
    );
}
