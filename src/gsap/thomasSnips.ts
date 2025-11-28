import '@splidejs/splide/css';

import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export const abs_card_Scroll = function (gsap: any, ease) {
  const sectTrigger = document.getElementById('abs-cards') as HTMLElement;
  const card_abs1 = document.querySelector('[card-abs1]') as HTMLElement;
  const card_abs2 = document.querySelector('[card-abs2]') as HTMLElement;
  const card_abs3 = document.querySelector('[card-abs3]') as HTMLElement;
  const card_abs4 = document.querySelector('[card-abs4]') as HTMLElement;
  const card_abs5 = document.querySelector('[card-abs5]') as HTMLElement;
  //   const allCardAbs = [...document.querySelectorAll('[card-abs]')] as HTMLElement[];

  const duration = 2;
  const abs_tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectTrigger,
      start: 'top, 55%',
      //   markers: true,
      toggleActions: 'play none none reverse',
      //  scrub: true,
      // pin: true,
    },
  });

  abs_tl
    .from(card_abs1, { bottom: 'auto', ease, duration }, 0)
    .from(card_abs2, { bottom: 'auto', right: 'auto', ease, duration }, 0)
    .from(card_abs3, { top: 'auto', left: 'auto', ease, duration }, 0)
    .from(card_abs4, { top: 'auto', right: 'auto', ease, duration }, 0)
    .from(card_abs5, { left: 'auto', bottom: 'auto', ease, duration }, 0);
};

export const freedom_card = function (gsap: any) {
  const allCards = gsap.utils.toArray('[freedom-card]') as HTMLElement[];

  //progress tracker
  const progress = document.querySelector('[progress-tracker]') as HTMLElement;
  const track_bg = progress.querySelector('.track-bg') as HTMLElement;
  const cardNum = document.querySelector('[card-num]') as HTMLElement;

  //update card Number

  const progressTl = gsap.timeline({
    scrollTrigger: {
      trigger: progress,
      start: 'top 70%',
      end: 'bottom 50%',
      //  markers: true,
      scrub: true,
      onUpdate: function (self) {
        const progressPercent = self.progress * 100;
        track_bg.style.height = `${progressPercent}%`;
      },
    },
  });

  allCards.forEach((card, i) => {
    const img = card.querySelector('.main-phone-img') as HTMLElement;
    const cardWrap = card.querySelector('.card-list') as HTMLElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 60%',
        //    end: 'bottom 50%',
        // markers: true,
        scrub: true,
        onEnter: function () {
          //  imgwrap?.classList.add('active');
        },
      },
    });

    tl.fromTo(img, { yPercent: -30, rotateY: -45 }, { yPercent: 0, rotateY: 0 }).fromTo(
      cardWrap,
      { rotateY: -10 },
      { rotateY: 0 },
      '<'
    );

    //  tl.fromTo(card, { yPercent: -120, opacity: 0 }, { yPercent: 0, opacity: 1 });
  });
};

export const bgTextWrap = function (gsap: any) {
  //all text el
  const allTextEl = gsap.utils.toArray('.bg-spn') as HTMLElement[];
  const secTextEl = gsap.utils.toArray('.bg-light') as HTMLElement[];

  allTextEl.forEach((el) => {
    const animTl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        //end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });

    animTl.to(el, { '--scale-blue-bg': 1, duration: 0.4 });
  });

  secTextEl.forEach((el) => {
    const animTl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        //end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });

    animTl.to(el, { '--scale-light-bg': 1, duration: 0.4 });
  });
};

export const splideScroll = function () {
  function setSlideEl(splideELement: HTMLElement, speed: number) {
    const resSlide = new Splide(splideELement, {
      type: 'loop',
      direction: 'ttb',
      height: 'auto',
      // gap: '1rem',
      pagination: false,
      arrows: false,
      autoScroll: {
        speed: speed,
      },
    });
    resSlide.mount({ AutoScroll });
  }

  const splideEl = document.querySelector('#splide1') as HTMLElement;
  const splideEl2 = document.querySelector('#splide2') as HTMLElement;
  const splideEl3 = document.querySelector('#splide3') as HTMLElement;

  // const countdown_wrapper = document.querySelector('#countdown-Wrapper') as HTMLElement;

  setSlideEl(splideEl, 0.2);
  setSlideEl(splideEl2, -0.3);
  setSlideEl(splideEl3, 0.2);
};

export const other_animation = function (gsap: any) {
  console.log('other_animation');
  const rotateSect = document.querySelector('[image-rotate--sect]') as HTMLElement;
  const rotateImg = document.querySelector('[img-rotate]') as HTMLElement;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: rotateSect,
      start: 'top 70%',
      end: 'bottom 50%',
      //  markers: true,
      scrub: true,
      // pin: true,
    },
  });

  tl.fromTo(rotateImg, { rotateX: 15 }, { rotateX: 0 });
};
