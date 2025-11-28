import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenisScroll } from 'src/gsap/smoothScroll';

function isMobile(): boolean {
  return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
}

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);

  cardAbsSlide(gsap, isMobile);

  //Page smooth scorll In aniamtions
  createScrollAnimation('logo-sect', 'logo-scroll', {});
  //problem solving section
  createScrollAnimation('problem--sect', 'problem-item', {});
  //solution section
  createScrollAnimation('solution--sect', 'solution-item', {});
  //automation section
  createScrollAnimation('automation--sect', 'automation-item', {});
  //scale section
  createScrollAnimation('scale--sect', 'scale-item', {});
  //pricing section
  createScrollAnimation('pricing--sect', 'pricing-item', {});
  //faq section
  createScrollAnimation('faq--sect', 'faq-item', {});
  //banner section
  createScrollAnimation('banner--sect', 'banner-item', {});

  ///FAQ HIeght adjust
  const loadMoreBtn = document.querySelector('[load-more--btn]') as HTMLButtonElement;
  const faqHieght_wrapper = document.querySelector('[faq-height--wrapper]') as HTMLElement;

  const faqHTl = gsap.timeline({ paused: true });

  faqHTl.to(faqHieght_wrapper, { height: 'auto', duration: 0.4, ease: 'power2.out' });

  //check is-height class is added
  //toggle function on click
  function isHeight() {
    const isHeight = faqHieght_wrapper.classList.contains('is-height');
    return isHeight;
  }
  loadMoreBtn.addEventListener('click', function () {
    if (!isHeight()) {
      faqHTl.play();
      faqHieght_wrapper.classList.add('is-height');
      this.classList.add('is-height');
    } else {
      faqHTl.reverse();
      faqHieght_wrapper.classList.remove('is-height');
      this.classList.remove('is-height');
    }
  });
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
    },
  });

  cardTl.from(cardAbsSlide, { yPercent: 200, stagger: 0.2 }, 0);
}
