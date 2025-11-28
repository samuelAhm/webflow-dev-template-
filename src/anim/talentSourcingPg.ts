import { gsap } from 'gsap';
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { lenisScroll } from 'src/gsap/smoothScroll';

function isMobile(): boolean {
  return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
}

// Constants for reusable values
const EASE_SCROLL_INTO = 'elastic.out(1, 0.9)';
const DEFAULT_DURATION = 1.5;
const STAGGER_DELAY = 0.2;

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);

  // Split Text
  const { words: headingText, chars: headingChars } = new SplitType('[t-split]', {
    types: 'word chars',
    tagName: 'span',
  });

  const { words: paragraph_words, chars: paaragraph_chars } = new SplitType('[next-split]', {
    types: 'word chars',
    tagName: 'span',
  });

  //html elements

  const hero_cta = document.querySelector('[cta-slide]') as HTMLElement;

  //team sect
  const team_sect = document.querySelector('#team-section') as HTMLElement;

  //talent section
  const talent_category = gsap.utils.toArray('[cate-scroll]') as HTMLElement[];
  const talent_items = gsap.utils.toArray('[talent-scroll]') as HTMLElement[];
  const talent_sect = document.querySelector('#talent--sect') as HTMLElement;

  //parallax scroll
  const parallaxSection = document.querySelector('#parallax-section') as HTMLElement;

  const p_item_1 = document.querySelector('[paralax-item="1"]') as HTMLElement;
  const p_item_2 = document.querySelector('[paralax-item="2"]') as HTMLElement;
  const p_item_3 = document.querySelector('[paralax-item="3"]') as HTMLElement;
  const p_item_4 = document.querySelector('[paralax-item="4"]') as HTMLElement;

  const p_img_1 = document.querySelector('[paralax-img="1"]') as HTMLElement;
  const p_img_2 = document.querySelector('[paralax-img="2"]') as HTMLElement;
  const p_img_3 = document.querySelector('[paralax-img="3"]') as HTMLElement;

  const talentSection = document.querySelector('#talent-category') as HTMLElement;
  const talentItems = gsap.utils.toArray('[h-scroll]') as HTMLElement[];

  //work section
  const workSection = document.querySelector('#work--sect') as HTMLElement;
  const workItems = gsap.utils.toArray('[work-item]') as HTMLElement[];

  ///hero section timeline
  const heroTimeline = gsap.timeline({});

  heroTimeline
    .from(headingChars, {
      xPercent: 200,
      autoAlpha: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: EASE_SCROLL_INTO,
    })
    .from(
      paragraph_words,
      {
        xPercent: -200,
        autoAlpha: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: EASE_SCROLL_INTO,
      },
      0.7
    )
    .from(hero_cta, { yPercent: -200, autoAlpha: 0, duration: 1, ease: EASE_SCROLL_INTO }, 0.9);

  //team tl timeline
  const teamTl = gsap.timeline({
    scrollTrigger: {
      trigger: team_sect,
      start: 'top 80%',
      // markers: true,
      toggleActions: 'play none none reverse',
    },
  });

  teamTl.from('[para-img]', {
    yPercent: 100,
    autoAlpha: 0,
    duration: 2,
    stagger: 0.25,
    ease: EASE_SCROLL_INTO,
  });

  //talent section timeline
  const t_projectTL = gsap.timeline({
    scrollTrigger: {
      trigger: talent_sect,
      start: 'top 90%',
      //  markers: true,
      // end: '+=100%',
      //   scrub: true,
      //   pin: true,
      //   pinSpacing: true,
    },
  });

  t_projectTL.from(talent_category, {
    xPercent: 100,
    autoAlpha: 0,
    duration: 1.5,
    stagger: 0.25,
    ease: EASE_SCROLL_INTO,
  });

  talent_items.forEach((item, index) => {
    //get the first element
    const scroll_item = item.querySelector('[scroll-item]') as HTMLElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        // markers: true,
        toggleActions: 'play none none reverse',
      },
    });

    tl.from(scroll_item, {
      yPercent: 100,
      autoAlpha: 0,
      duration: 2,
      ease: EASE_SCROLL_INTO,
      stagger: 0.5,
    });
  });

  const parallaxTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: parallaxSection,
      start: 'top 98%',
      end: '+=350%',
      scrub: true,
      // markers: true,
      // pin: true,
      //   pinSpacing: true,
    },
  });

  parallaxTimeline
    .fromTo(p_item_1, { yPercent: 250 }, { yPercent: -250, stagger: 0.1 })
    .fromTo(p_item_2, { yPercent: 150 }, { yPercent: -150, stagger: 0.1 }, 0)
    .fromTo(p_item_3, { yPercent: 50 }, { yPercent: -100, stagger: 0.1 }, 0)
    .fromTo(p_item_4, { yPercent: 250 }, { yPercent: -250, stagger: 0.1 }, 0)
    .to(p_img_1, { yPercent: 150 }, 0)
    .to(p_img_2, { yPercent: 50 }, 0)
    .to(p_img_3, { yPercent: -150 }, 0);

  const talentTl = gsap.timeline({
    scrollTrigger: {
      trigger: talentSection,
      start: 'top 3%',
      // end: '+=100%',
      scrub: true,
      pin: true,
      pinSpacing: true,
    },
  });

  isMobile()
    ? talentTl.from(talentItems, {
        yPercent: 300,
        stagger: 0.21,
      })
    : talentTl.from(talentItems, {
        xPercent: 300,
        stagger: 0.21,
      });

  //work section timeline
  const workTl = gsap.timeline({
    scrollTrigger: {
      trigger: workSection,
      start: 'top 80%',
      // markers: true,
      toggleActions: 'play none none reverse',
    },
  });

  workTl.from(workItems, {
    yPercent: 100,
    autoAlpha: 0,
    duration: 2,
    stagger: 0.25,
    ease: EASE_SCROLL_INTO,
  });

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
