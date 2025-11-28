import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { lenisScroll } from 'src/gsap/smoothScroll';

const TEXT_ANIM_DURATION = 1.6;
const ELASTIC_EASE = 'elastic.out(1, 0.9)';
const DEFAULT_DURATION = 1.25;
const STAGGER_DELAY = 0.2;

// window.Webflow ||= [];
// window.Webflow.push(() => {
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);
  // Split Text section split text
  const { chars: heroText, words: headingWord } = new SplitType('[hero-split]', {
    types: 'word chars',
    tagName: 'span',
  });

  //hero elements
  const article_section = document.querySelector('[article-section]') as HTMLElement;
  const article_items = gsap.utils.toArray('[article-slide]') as HTMLElement[];

  //footer html
  const footerSection = document.querySelector('[footer--sect]') as HTMLElement;
  const footerLinksWrapper = document.querySelector('[footer--linkswrap]');
  const footerArrow = document.querySelector('[footer--arrow]');

  const hmTl = gsap.timeline();

  hmTl
    .from(headingWord, {
      xPercent: 50,
      autoAlpha: 0,
      duration: 2,
      stagger: 0.1,
      ease: ELASTIC_EASE,
    })
    .from(
      '[featured-slide-right]',
      { xPercent: -100, autoAlpha: 0, duration: 2, ease: ELASTIC_EASE },
      0.5
    )
    .from(
      '[featured-slide-left]',
      {
        filter: 'blur(10px)',
        autoAlpha: 0,
        xPercent: 50,
        duration: 1.5,
        ease: ELASTIC_EASE,
      },
      0
    )
    .from('[slide-right]', { xPercent: 100, autoAlpha: 0, duration: 1.5, ease: ELASTIC_EASE }, 0.1);

  article_items.forEach((item, i) => {
    //get the article element
    const article = item.querySelector('[slide-item]') as HTMLElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        // end: '+=500',
        // scrub: true,
        // pin: true,
        // invalidateOnRefresh: true,
      },
    });

    tl.from(article, {
      yPercent: 100,
      autoAlpha: 0,
      duration: 2,
      stagger: 0.5,
      ease: ELASTIC_EASE,
    });
  });

  // Footer animation
  footerAnimation();

  function footerAnimation() {
    const footerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: footerSection,
        start: 'top 45%',
        toggleActions: 'play none none reverse',
      },
    });

    footerTimeline
      .from(
        footerLinksWrapper,
        { yPercent: 100, autoAlpha: 0, duration: DEFAULT_DURATION, ease: ELASTIC_EASE },
        0.3
      )
      .from(footerArrow, { xPercent: -200, autoAlpha: 0, duration: 2.5, ease: ELASTIC_EASE }, 0.3);
  }
});
