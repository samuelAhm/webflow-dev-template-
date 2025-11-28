import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenisScroll } from 'src/smoothScroll_updated';

import { bgMovement } from './animFiles';

const MOBILE_EASE = 'power2.out';
const ELASTIC_EASE = isMobile() ? MOBILE_EASE : 'elastic.out(1, 0.9)';
const TEXT_ANIM_DURATION = 1.6;
const DEFAULT_DURATION = 1.25;
const STAGGER_DELAY = 0.2;

//767px

function isMobile(): boolean {
  return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
}

function isPortrait(): boolean {
  return window.innerWidth <= 767; // Example breakpoint, adjust as necessary
}

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  const lenisInstance = lenisScroll(ScrollTrigger, gsap);

  ScrollTrigger.normalizeScroll(true);

  bgMovement(gsap);
  const bgElement = document.querySelector('[page-bg]') as HTMLElement;
  const bgImage = document.querySelector('[challenge-sec]') as HTMLElement;

  gsap.set(bgImage, { opacity: 0 });
  //html elements
  const heroImage = document.querySelector('[project-hero="img"]') as HTMLElement;
  const paragrah_wrap = document.querySelector('[project-header--wrap]') as HTMLElement;
  //Deliverables html elements
  const deliverables = document.querySelector('[deliverable--section]') as HTMLElement;
  const deliverables_items = gsap.utils.toArray('[deliverable-card]') as HTMLElement[];
  //img
  const imgTrigger = [...document.querySelectorAll('[img-trigger]')] as HTMLElement[];

  //challenges and Solutions section
  const challenges_vertical = document.querySelector('[vertical-scroll--sect]') as HTMLElement;
  const challenges_vertical_items = gsap.utils.toArray('[vertical-scroll]') as HTMLElement[];

  //img grid--section
  const imgGrid = document.querySelector('[img-grid]') as HTMLElement;
  const imgGrid_1 = document.querySelector('[img-grid-1]') as HTMLElement;
  const imgGrid_2 = document.querySelector('[img-grid-2]') as HTMLElement;
  const imgGrid_3 = document.querySelector('[img-grid-3]') as HTMLElement;

  //image grid elements 2
  const imgGrid_2_el = document.querySelector('[img-grid--sect2]') as HTMLElement;
  const imgGrid_2_items_1 = document.querySelector('[grid-sect-img1]') as HTMLElement;
  const imgGrid_2_items_2 = document.querySelector('[grid-sect-img2]') as HTMLElement;

  //client experience section
  const clientExp = document.querySelector('[client-x]') as HTMLElement;
  const client_img = document.querySelector('[client-imgwrap]') as HTMLElement;
  const client_img_height = document.querySelector('[client-img-height]') as HTMLElement;

  //related work section
  const relatedWork = document.querySelector('[relavant_project]') as HTMLElement;
  const relatedWork_items = gsap.utils.toArray('[relevant-slide]') as HTMLElement[];

  //footer html
  const footerSection = document.querySelector('[footer--sect]') as HTMLElement;
  const footerLinksWrapper = document.querySelector('[footer--linkswrap]');
  const footerArrow = document.querySelector('[footer--arrow]');

  gsap.set(client_img, { transformOrigin: 'bottom left' });

  const client_slide_items = gsap.utils.toArray('[client-slide]') as HTMLElement[];

  gsap.set(imgGrid_1, { transformOrigin: 'bottom left' });
  gsap.set(imgGrid_2, { transformOrigin: 'bottom left' });
  gsap.set(imgGrid_3, { transformOrigin: 'bottom left' });

  //all header wrapper
  const heading_paragraphs = gsap.utils.toArray('[h-p-wrap]') as HTMLElement[];

  const p_heroTl = gsap.timeline();
  //animations
  p_heroTl
    .to(paragrah_wrap, {
      duration: TEXT_ANIM_DURATION,
      ease: ELASTIC_EASE,
      y: 0,
    })
    .to(
      heroImage,
      {
        duration: TEXT_ANIM_DURATION,
        ease: ELASTIC_EASE,
        y: 0,
      },
      0.1
    );

  //deliverables
  const dTl = gsap.timeline({
    scrollTrigger: {
      trigger: deliverables,
      start: 'top 70%',
    },
  });
  dTl.from(deliverables_items, {
    yPercent: 100,
    autoAlpha: 0,
    duration: 1.5,
    ease: ELASTIC_EASE,
    stagger: 0.15,
  });

  heading_paragraphs.forEach((item, i) => {
    //paragraph elemeents

    const tx_item = [...item.querySelectorAll('[h-item]')] as HTMLElement[];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 75%',
        //  toggleActions: 'play none none reverse',
      },
    });
    tl.from(tx_item, {
      yPercent: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: ELASTIC_EASE,
    });
  });

  //main image section
  //gsap tl
  imgTrigger.forEach((item, i) => {
    const imgWrapper_height = item.querySelector('[img-height-wrapper]') as HTMLElement;
    const imgWrapper_el = item.querySelector('[img-wrapper]') as HTMLElement;

    const imgTl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 70%',
        // toggleActions: 'play none none reverse',
        // markers: true,
      },
    });

    imgTl
      .to(imgWrapper_height, {
        height: '100%',
        duration: 0.8,
        ease: 'power1.inOut',
      })
      .from(imgWrapper_el, { scale: 1.1, opacity: 0 }, 0.1);
  });

  //  /challenges and solutions section
  const challengesVerticalTl = gsap.timeline({
    scrollTrigger: {
      trigger: challenges_vertical,
      start: 'top 2%',
      end: 'bottom 75%',
      // toggleActions: 'play none none reverse',
      onEnter: () => {
        bgElement.classList.add('metric-sect');
        gsap.to(bgImage, { opacity: 1, duration: 0.5 });
      },
      onEnterBack: () => {
        bgElement.classList.add('metric-sect');
        gsap.to(bgImage, { opacity: 1, duration: 0.5 });
      },
      onLeave: () => {
        bgElement.classList.remove('metric-sect');
        gsap.to(bgImage, { opacity: 0, duration: 0.5 });
      },
      onLeaveBack: () => {
        bgElement.classList.remove('metric-sect');
        gsap.to(bgImage, { opacity: 0, duration: 0.5 });
      },
    },
  });

  challenges_vertical_items.forEach((item, i) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top center',
        end: 'bottom 50%',
        onEnter: function (e) {
          item.classList.add('on-view');
        },
        onEnterBack: function (e) {
          item.classList.add('on-view');
        },
        onLeave: function (e) {
          item.classList.remove('on-view');
        },
        onLeaveBack: function (e) {
          item.classList.remove('on-view');
        },
        //  markers: true,
      },
    });
  });

  ///

  const imgGridTl = gsap.timeline({
    scrollTrigger: {
      trigger: imgGrid,
      start: 'top 70%',
      //  toggleActions: 'play none none reverse',
    },
  });
  imgGridTl
    .from(imgGrid_1, { height: '0%', scale: 1.2, autoAlpha: 0, duration: 1.5, ease: ELASTIC_EASE })
    .from(
      imgGrid_2,
      { height: '0%', scale: 1.2, autoAlpha: 0, duration: 1.5, ease: ELASTIC_EASE },
      0.4
    )
    .from(
      imgGrid_3,
      { height: '0%', scale: 1.2, autoAlpha: 0, duration: 1.5, ease: ELASTIC_EASE },
      0.6
    );

  ////image grid-2
  const imgGrid_2Tl = gsap.timeline({
    scrollTrigger: {
      trigger: imgGrid_2_el,
      start: 'top 70%',
      //   toggleActions: 'play none none reverse',
    },
  });

  imgGrid_2Tl
    .from(imgGrid_2_items_1, {
      height: '0%',
      scale: 1.2,
      autoAlpha: 0,
      duration: 1.5,
      ease: ELASTIC_EASE,
    })
    .from(
      imgGrid_2_items_2,
      {
        height: '0%',
        scale: 1.2,
        autoAlpha: 0,
        duration: 1.5,
        ease: ELASTIC_EASE,
      },
      0.1
    );

  //client experience section
  const clientExpTl = gsap.timeline({
    scrollTrigger: {
      trigger: clientExp,
      start: 'top 70%',
      //  toggleActions: 'play none none reverse',
    },
  });

  clientExpTl
    .to(client_img_height, {
      height: '100%',
      duration: 1,
      ease: 'power1.inOut',
    })
    .from(client_img, { scale: 1.1, autoAlpha: 0 }, 0.2)
    .from(
      client_slide_items,
      { yPercent: 100, stagger: 0.15, duration: 1.5, ease: ELASTIC_EASE, autoAlpha: 0 },
      0
    );

  //related work section
  const relatedWorkTl = gsap.timeline({
    scrollTrigger: {
      trigger: relatedWork,
      start: 'top 70%',
      // toggleActions: 'play none none reverse',
    },
  });

  relatedWorkTl.from(relatedWork_items, {
    xPercent: 100,
    autoAlpha: 0,
    duration: 1.5,
    ease: ELASTIC_EASE,
    stagger: 0.2,
  });

  // Split Text section split text
  //   const { chars: heroText } = new SplitType('[hero-split]', {
  //     types: 'word chars',
  //     tagName: 'span',
  //   });

  // Footer animation
  footerAnimation();

  function footerAnimation() {
    const footerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: footerSection,
        start: 'top 45%',
        //  toggleActions: 'play none none reverse',
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
