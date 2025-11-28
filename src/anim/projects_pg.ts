import { gsap } from 'gsap';
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { lenisScroll } from 'src/gsap/smoothScroll';

// Constants for reusable values
const EASE_SCROLL_INTO = 'elastic.out(1, 0.9)';
const DEFAULT_DURATION = 1.5;
const STAGGER_DELAY = 0.2;

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);

  //htmlelements
  const projectsItems = gsap.utils.toArray('[slide-up--container]') as HTMLElement[];

  const cateTrigger = document.querySelector('[cate-trigger]') as HTMLElement;
  const cateItems = gsap.utils.toArray('[cate-slide]') as HTMLElement[];

  const cateTl = gsap.timeline({
    scrollTrigger: {
      trigger: cateTrigger,
      start: 'top 75%',
      end: '+=100%',
    },
  });

  cateTl.from(cateItems, {
    xPercent: 100,
    autoAlpha: 0,
    duration: 1.5,
    stagger: 0.25,
    ease: EASE_SCROLL_INTO,
  });

  projectsItems.forEach((item, index) => {
    //get the first element
    const firstElement = item.querySelector('[slide-col]') as HTMLElement;
    const secondElement = item.querySelector('[slide-col-2]') as HTMLElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 75%',
        // markers: true,
        toggleActions: 'play none none reverse',
      },
    });

    tl.from(firstElement, {
      yPercent: 100,
      autoAlpha: 0,
      duration: 2,
      ease: EASE_SCROLL_INTO,
    }).from(
      secondElement,
      { yPercent: 100, autoAlpha: 0, duration: 1.2, ease: EASE_SCROLL_INTO },
      0.1
    );
  });

  console.log('projects');

  footerAnimation(gsap);
  function footerAnimation(gsap: any) {
    const footerSection = document.querySelector('[footer--sect]') as HTMLElement;
    const footerIcon = document.querySelector('[footer--icon]');
    const footerLinksWrapper = document.querySelector('[footer--linkswrap]');
    const footerArrow = document.querySelector('[footer--arrow]');

    const footerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: footerSection,
        start: 'top 45%',
        toggleActions: 'play none none reverse',
      },
    });

    footerTimeline
      .from(footerIcon, {
        yPercent: -100,
        autoAlpha: 0,
        stagger: STAGGER_DELAY,
        duration: DEFAULT_DURATION,
        ease: EASE_SCROLL_INTO,
      })
      .from(
        footerLinksWrapper,
        { yPercent: 100, autoAlpha: 0, duration: DEFAULT_DURATION, ease: EASE_SCROLL_INTO },
        0.3
      )
      .from(
        footerArrow,
        { xPercent: -200, autoAlpha: 0, duration: 2.5, ease: EASE_SCROLL_INTO },
        0.3
      );
  }
});
