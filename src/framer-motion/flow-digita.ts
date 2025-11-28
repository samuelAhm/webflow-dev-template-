import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenisScroll } from 'src/gsap/smoothScroll';

function isMobile(): boolean {
  return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
}

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);
  ///logo scroll
  //scrollTrigger
  const section_trigger = document.querySelector('[logo-sect]') as HTMLElement;
  const logo = [...document.querySelectorAll('[logo-scroll]')] as HTMLElement[];

  function createScrollAnimation(
    section_trigger: HTMLElement,
    logo: HTMLElement[],
    options: any = {}
  ) {
    // Default options
    const { start = 'top 75%', y = 50, stagger = 0.15, autoAlpha = 0, markers = false } = options;

    // Create the timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section_trigger,
        start: start,
        markers: markers,
      },
    });
    // Add the animation to the timeline
    tl.from(logo, { y: y, stagger: stagger, autoAlpha: autoAlpha }, 0);
  }
  createScrollAnimation(section_trigger, logo, {});

  //
  const belowLogoSect = document.querySelector('[below-logo-sect]') as HTMLElement;
  const belowLogoAnim = [...document.querySelectorAll('[below-fl]')] as HTMLElement[];
  createScrollAnimation(belowLogoSect, belowLogoAnim, {});

  ///float section
  cardAbsSlide(gsap, isMobile);

  ////
  const autoSect = document.querySelector('[automate-sect]') as HTMLElement;
  const autoAnim = [...document.querySelectorAll('[auto-el]')] as HTMLElement[];

  createScrollAnimation(autoSect, autoAnim, {});

  //banner section
  const bannerSect = document.querySelector('[banner-sect]') as HTMLElement;
  const bannerAnim = [...document.querySelectorAll('[banner-fl]')] as HTMLElement[];
  createScrollAnimation(bannerSect, bannerAnim, {});

  //how we help section
  const howWeSect = document.querySelector('[how-we-help--sect]') as HTMLElement;
  const howWeAnim = [...document.querySelectorAll('[hwe-el]')] as HTMLElement[];
  createScrollAnimation(howWeSect, howWeAnim, {});

  //tools section
  const toolsSect = document.querySelector('[auto-tool--sect]') as HTMLElement;
  const toolsAnim = [...document.querySelectorAll('[auto-tool-el]')] as HTMLElement[];
  createScrollAnimation(toolsSect, toolsAnim, {});

  //hover in animation

  gsap.set('[hover-el]', { scale: 0 });

  //bouncing easing
  const ease = 'power2.out';

  const easeScrollInto = 'elastic.out(1, 0.5)';

  const hoverElements = [...document.querySelectorAll('[grid-col]')] as HTMLElement[];
  hoverElements.forEach((el) => {
    //get the hover element
    const hoverEl = el.querySelector('[hover-el]') as HTMLElement;

    const tl = gsap.timeline({ paused: true });
    tl.to(hoverEl, { scale: 1, duration: 1, ease: easeScrollInto });

    el.addEventListener('mouseenter', (e) => {
      //     gsap.to(hoverEl, { scale: 1, duration: 1, ease: easeScrollInto });
      tl.play();
    });

    el.addEventListener('mouseleave', () => {
      // gsap.to(hoverEl, { scale: 0, duration: 0.2 });

      tl.reverse(-0.2);
    });
  });

  //tab section
  const tabSect = document.querySelector('[tb--section]') as HTMLElement;
  const tabAnim = [...document.querySelectorAll('[tb-el]')] as HTMLElement[];
  createScrollAnimation(tabSect, tabAnim, {});

  //testimonial section
  const testiSect = document.querySelector('[test--sect]') as HTMLElement;
  const testiAnim = [...document.querySelectorAll('[testi-el]')] as HTMLElement[];
  createScrollAnimation(testiSect, testiAnim, {});

  //why us section
  const whyUsSect = document.querySelector('[why-us--sect]') as HTMLElement;
  const whyUsAnim = [...document.querySelectorAll('[why-us-el]')] as HTMLElement[];
  createScrollAnimation(whyUsSect, whyUsAnim, {});

  //case study section
  const caseSect = document.querySelector('[cs--sect]') as HTMLElement;
  const caseAnim = [...document.querySelectorAll('[cs-el]')] as HTMLElement[];
  createScrollAnimation(caseSect, caseAnim, {});

  function cardAbsSlide(gsap: any, isMobile: any) {
    const section_trigger = document.querySelector('[float--section]');
    const cardAbsSlide = document.querySelectorAll('[sticky-element="setsticky"]');

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
});
