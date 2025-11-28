import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { tr } from 'motion/react-client';
import SplitType from 'split-type';
import { lenisScroll } from 'src/gsap/smoothScroll';

import { resultSection } from './animFiles';
import { footerAnimation } from './animFiles';
const TEXT_ANIM_DURATION = 1.6;
const ELASTIC_EASE = 'elastic.out(1, 0.9)';

function isMobile(): boolean {
  return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
}

window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(ScrollTrigger, Flip);
  lenisScroll(ScrollTrigger, gsap);

  // Split Text section split text
  const { chars: webText } = new SplitType('[web-split]', { types: 'word chars', tagName: 'span' });
  const { chars: designText } = new SplitType('[design-split]', {
    types: 'word chars',
    tagName: 'span',
  });

  ///all the html elements
  //hero section elementes
  const heroSvg = document.querySelector('[svg-web]') as HTMLElement;
  const heroParagraph = document.querySelector('[hero-paragraph]') as HTMLElement;

  const responsiveSection = document.querySelector('[responsive--section]') as HTMLElement;
  const responsiveItem = document.querySelector('[first-box]') as HTMLElement;
  const responsiveItem2 = document.querySelector('[second-box]') as HTMLElement;
  const responsiveItem3 = document.querySelector('[third-box]') as HTMLElement;
  const responsiveItem4 = document.querySelector('[fourth-box]') as HTMLElement;

  //journey section horizontal background scroll scroll elements

  const bgScroll_trigger = document.querySelector('[scroll-section]') as HTMLElement;
  const scroll_container = document.querySelector('[scroll-element="container"]') as HTMLElement;
  const scroll_Items = gsap.utils.toArray('[scroll-item]');

  //service section
  const serviceSection = document.querySelector('[service--section]') as HTMLElement;
  const serviceItems = gsap.utils.toArray('[service-item]');

  //faq section
  const faqSection = document.querySelector('[faq-section]') as HTMLElement;
  const faqItems = gsap.utils.toArray('[faq-slide]');

  //res text items
  const res_1 = document.querySelector('[res-1]') as HTMLElement;
  const res_2 = document.querySelector('[res-2]') as HTMLElement;
  const res_3 = document.querySelector('[res-3]') as HTMLElement;
  const res_4 = document.querySelector('[res-4]') as HTMLElement;
  const res_5 = document.querySelector('[res-5]') as HTMLElement;
  const res_6 = document.querySelector('[res-6]') as HTMLElement;

  ///tools section elements
  const toolsSection = document.querySelector('#tools--section') as HTMLElement;
  const toolsItems = gsap.utils.toArray('[tools-icon]') as HTMLElement[];

  const allFloat_item = gsap.utils.toArray('[res-float-item]');

  ///cards elements
  const allCards = gsap.utils.toArray('[card]');
  const sectionTrigger = document.querySelector('[card-slide--section]') as HTMLElement;
  //horizontal scroll elements
  const xPercentAnimOptions = {
    xPercent: 100,
    autoAlpha: 0,
    duration: TEXT_ANIM_DURATION,
    stagger: 0.1,
    ease: ELASTIC_EASE,
  };

  const yPercentAnimOptions = {
    yPercent: 50,
    autoAlpha: 0,
    duration: TEXT_ANIM_DURATION,
    stagger: 0.1,
    ease: ELASTIC_EASE,
  };

  const heroSectionTimeline = gsap.timeline({ autoAlpha: 0 });

  heroSectionTimeline
    .from(webText, { ...xPercentAnimOptions, xPercent: -100 })
    .from(designText, xPercentAnimOptions, 0.4)
    .from(heroParagraph, yPercentAnimOptions, 0.5)
    .from(heroSvg, { ...yPercentAnimOptions, yPercent: -100 }, 0.6)
    .from('[web--img]', { opacity: 0, duration: 1.5 }, 1);

  //cards scroll animation
  const cardScrollTimeline = gsap.timeline({
    ease: ELASTIC_EASE,
    scrollTrigger: {
      trigger: sectionTrigger,
      start: isMobile() ? 'top 15%' : 'top 25%',
      pin: isMobile() ? true : false,
      //markers: true,
      toggleActions: 'play none none reverse',
    },
  });

  isMobile()
    ? cardScrollTimeline.from(allCards, {
        yPercent: 200,
        autoAlpha: 0,
        stagger: 0.23,
      })
    : cardScrollTimeline.to(allCards, {
        x: 0,
        stagger: 0.053,
        duration: TEXT_ANIM_DURATION,
        ease: ELASTIC_EASE,
        background: '#edf1f9',
      });

  ///journey section timeline
  //check the width of the scroll container

  const journeyTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: bgScroll_trigger,
      start: 'top 2%',
      end: '+=200%',
      pin: isMobile() ? false : true,
      // markers: true,
      scrub: true,
      toggleActions: 'play none none reverse',
    },
  });

  journeyTimeline
    .to(scroll_container, {
      xPercent: isMobile() ? '' : -60,
    })
    .to(bgScroll_trigger, { backgroundPositionX: '100%' }, 0)
    .to(bgScroll_trigger, { backgroundPositionY: '50%' }, 0);

  resultSection(gsap, SplitType);

  ///responsive section timeline
  const responsiveTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: responsiveSection,
      start: 'top 2%',
      end: '+=200%',
      pin: true,
      // markers: true,
      scrub: true,
      toggleActions: 'play none none reverse',
    },
  });

  responsiveTimeline
    .to(responsiveItem, { opacity: 0 }, 0) // Fade out responsiveItem
    .to(responsiveItem2, { opacity: 1 }, 0) // Fade in responsiveItem2
    .to(responsiveItem2, { opacity: 0 }, 1) // Fade out responsiveItem2
    .to(responsiveItem3, { opacity: 1 }, 1) // Fade in responsiveItem3
    .to(responsiveItem3, { opacity: 0 }, 2) // Fade out responsiveItem3
    .to(responsiveItem4, { opacity: 1 }, 2)
    .fromTo(res_1, { yPercent: 400, opacity: 0.5 }, { yPercent: -50, opacity: 1 }, 0)
    .to(res_1, { opacity: 0 }, 0.5)
    .fromTo(res_4, { yPercent: 400 }, { yPercent: -50 }, 0)
    .to(res_4, { opacity: 0 }, 0.5)
    .fromTo(res_2, { yPercent: 350 }, { yPercent: -400 }, 1)
    .to(res_2, { opacity: 0 }, 1.5)
    .fromTo(res_5, { yPercent: 400 }, { yPercent: -450 }, 1)
    .to(res_5, { opacity: 0 }, 1.5)
    .fromTo(res_3, { yPercent: 300 }, { yPercent: -600 }, 2)
    .to(res_3, { opacity: 0 }, 2.5)
    .fromTo(res_6, { yPercent: 300 }, { yPercent: -650 }, 2)
    .to(res_6, { opacity: 0 }, 2.5);

  ///tools section
  const toolsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: toolsSection,
      start: 'top 75%',
      // markers: true,
      toggleActions: 'play none none reverse',
    },
  });

  //service section
  const serviceTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: serviceSection,
      start: 'top 75%',
      // markers: true,
      toggleActions: 'play none none reverse',
    },
  });

  serviceTimeline.from(serviceItems, { yPercent: 100, opacity: 0, stagger: 0.24, duration: 1.5 });

  toolsTimeline.from(toolsItems, { opacity: 0, stagger: 0.24, duration: 1.5 });

  //faq section
  const faqTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: faqSection,
      start: 'top 75%',
      // markers: true,
      toggleActions: 'play none none reverse',
    },
  });

  faqTimeline.from(faqItems, {
    yPercent: 100,
    opacity: 0,
    stagger: 0.24,
    duration: 1.5,
    ease: ELASTIC_EASE,
  });

  footerAnimation(gsap);
});
