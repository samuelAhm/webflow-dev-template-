import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { lenisScroll } from 'src/gsap/smoothScroll';

const TEXT_ANIM_DURATION = 1.6;
const ELASTIC_EASE = 'elastic.out(1, 0.9)';
const DEFAULT_DURATION = 1.25;
const STAGGER_DELAY = 0.2;

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);

  // Split Text section split text
  const { chars: heroText } = new SplitType('[hero-split]', {
    types: 'word chars',
    tagName: 'span',
  });
  const { chars: designText } = new SplitType('[design-split]', {
    types: 'word chars',
    tagName: 'span',
  });

  const { chars: abtText } = new SplitType('[abt-split]', {
    types: 'word chars',
    tagName: 'span',
  });

  //htmlelements
  const work_Section = document.querySelector('#work-section');
  const work_slides = gsap.utils.toArray('[slide-up]');

  //abt section
  const abtSection = document.querySelector('#abt-section');
  const abtItems = gsap.utils.toArray('[img-slide]');
  const line_abt = document.querySelector('[line-width]');

  //comment section
  const commentSection = document.querySelector('#commit-section');
  const parallax_img = document.querySelector('[parallax-img]');

  //footer html
  const footerSection = document.querySelector('[footer--sect]') as HTMLElement;
  const footerLinksWrapper = document.querySelector('[footer--linkswrap]');
  const footerArrow = document.querySelector('[footer--arrow]');

  const hmTl = gsap.timeline();

  hmTl
    .from(heroText, { xPercent: 50, autoAlpha: 0, duration: 0.5, stagger: 0.1 })
    .from('[left-slide]', { xPercent: -50, autoAlpha: 0, duration: 0.5, stagger: 0.1 }, 0.5)
    .from(
      '[slide-right]',
      {
        filter: 'blur(10px)',
        autoAlpha: 0,
        xPercent: 50,
        duration: 0.5,
        stagger: 0.1,
      },
      0.5
    )
    .from('[q-mark]', { yPercent: -100, autoAlpha: 0, duration: 1.5, ease: ELASTIC_EASE }, 1);

  //work tl
  const workTl = gsap.timeline({
    scrollTrigger: {
      trigger: work_Section,
      start: 'top 50%',
      // markers: true,
    },
  });

  workTl.from(work_slides, {
    yPercent: 100,
    autoAlpha: 0,
    duration: 0.5,
    stagger: 0.3,
  });

  ///abt section
  const abtTl = gsap.timeline({
    scrollTrigger: {
      trigger: abtSection,
      start: 'top 50%',
      toggleActions: 'play none none reverse',
    },
  });

  abtTl
    .from(abtText, { xPercent: 50, autoAlpha: 0, duration: 0.5, stagger: 0.1 })
    .from(line_abt, { width: '0px' }, 0.1)
    .from(
      abtItems,
      {
        yPercent: 100,
        autoAlpha: 0,
        duration: 1.5,
        ease: ELASTIC_EASE,
        stagger: 0.15,
      },
      0.2
    );

  //commect section
  const commentTl = gsap.timeline({
    scrollTrigger: {
      trigger: commentSection,
      start: 'top 50%',
      // end: '+=200%',
      //  markers: true,
      scrub: true,
      //   pin: true,
      //   pinSpacing: true,
      toggleActions: 'play none none reverse',
    },
  });

  commentTl.fromTo(parallax_img, { yPercent: 100 }, { yPercent: -200 });

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
