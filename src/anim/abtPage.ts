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

  const { chars: abtTextChars, words: abtTextWords } = new SplitType('[abt-split]', {
    types: 'word chars',
    tagName: 'span',
  });

  const { chars: tech_left_chars, words: tech_left_words } = new SplitType('[t-left]', {
    types: 'word chars',
    tagName: 'span',
  });

  const { chars: tech_right_chars, words: tech_right_words } = new SplitType('[t-right]', {
    types: 'word chars',
    tagName: 'span',
  });

  //home html elements
  const homeSection = document.querySelector('[home-section]') as HTMLElement;
  const abt_hm_card_1 = document.querySelector('[abt-card]') as HTMLElement;
  const abt_hm_card_2 = document.querySelector('[abt-card-2]') as HTMLElement;
  const hm_Bg = document.querySelector('[home--bg]') as HTMLElement;

  ///html elements
  const abtSection = document.querySelector('#abttext--section') as HTMLElement;
  const txSlide = document.querySelector('[slide-img]') as HTMLElement;

  //tech stack html elements
  const techStackSection = document.querySelector('#stack--section') as HTMLElement;
  const stack_left = gsap.utils.toArray('[stack-left]');
  const stack_right = gsap.utils.toArray('[stack-right]');

  //float section html
  const floatSection = document.querySelector('#float--section') as HTMLElement;
  const floatAll = document.querySelectorAll('[tech-slide]');

  const tech_right = document.querySelector('[t-right]') as HTMLElement;
  const tech_left = document.querySelector('[t-left]') as HTMLElement;
  const txt_pop = document.querySelector('[tech-text--pop]') as HTMLElement;
  const txAnimation_section = document.querySelector('[tx-anim--section]') as HTMLElement;

  //pageLoad animation
  const tl = gsap.timeline({});

  tl.from(abt_hm_card_1, {
    yPercent: -200,
    autoAlpha: 0,
    duration: 2,
    ease: EASE_SCROLL_INTO,
  })
    .from(
      abt_hm_card_2,
      {
        yPercent: -120,
        autoAlpha: 0,
        duration: 2,
        ease: EASE_SCROLL_INTO,
      },
      0.2
    )
    .from(hm_Bg, { yPercent: 100, autoAlpha: 0, duration: 2, ease: EASE_SCROLL_INTO }, 0.1);

  ScrollTrigger.refresh();

  //home section timeline
  const homeTl = gsap.timeline({
    scrollTrigger: {
      trigger: homeSection,
      start: 'top top',
      end: '+=200%',
      scrub: true,
      //markers: true,
    },
  });

  homeTl
    .to(abt_hm_card_1, { yPercent: -200 })
    .to(abt_hm_card_2, { yPercent: -120 }, 0)
    .to(hm_Bg, { yPercent: -100 }, 0);

  const abt_word_Tl = gsap.timeline({
    scrollTrigger: {
      trigger: abtSection,
      start: 'top 75%',
      //  end: '+=100%',
      // markers: true,
      toggleActions: 'play none none reverse',
    },
  });

  abt_word_Tl
    .from(abtTextWords, {
      filter: 'blur(15px)',
      opacity: 0,
      stagger: 0.1,
      duration: 2,
      ease: EASE_SCROLL_INTO,
    })
    .from(txSlide, { xPercent: 100, opacity: 0, duration: 1.5, ease: EASE_SCROLL_INTO }, 0.2);

  ///tech stack section

  //   const stack_tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: techStackSection,
  //       start: 'top 75',
  //       markers: true,
  //       toggleActions: 'play none none reverse',
  //     },
  //   });

  //   stack_tl
  //     .from(stack_left, {
  //       xPercent: -100,
  //       autoAlpha: 0,
  //       duration: 1.5,
  //       ease: EASE_SCROLL_INTO,
  //       stagger: 0.1,
  //     })
  //     .from(stack_right, { xPercent: 100, autoAlpha: 0, duration: 1.5, ease: EASE_SCROLL_INTO }, 0.2);

  ///Technology flaot section
  const float_Tx_tl = gsap.timeline({
    scrollTrigger: {
      trigger: txAnimation_section,
      start: 'top 75%',
      //  end: '+=100%',
      // markers: true,
      toggleActions: 'play none none reverse',
    },
  });
  const floatTl = gsap.timeline({
    scrollTrigger: {
      trigger: floatSection,
      start: 'top top',
      //  end: '+=100%',

      scrub: true,
      pin: true,
      toggleActions: 'play none none reverse',
    },
  });

  float_Tx_tl
    .from(txt_pop, { yPercent: -50, opacity: 0, duration: 2.5, ease: EASE_SCROLL_INTO })
    .from(
      tech_right_chars,
      {
        xPercent: 100,
        autoAlpha: 0,
        duration: 2,
        stagger: 0.1,
        ease: EASE_SCROLL_INTO,
      },
      0.3
    )
    .from(
      tech_left_chars,
      {
        xPercent: -100,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: EASE_SCROLL_INTO,
      },
      0.4
    );

  floatTl.from(floatAll, { yPercent: 200, stagger: 0.25 }, 0);

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
