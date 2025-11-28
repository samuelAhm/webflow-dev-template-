//
window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('agudah');

  const showMoreBtn = document.querySelector('[show-morebtn]');
  const newsContainer = document.querySelector('.news-blk-wrap');

  const cateItems = document.querySelectorAll('[glide-in]');

  cateItems.forEach((cate) => {
    cate.addEventListener('click', (e) => {
      newsContainer.style.height = `auto`;
      showMoreBtn.style.display = `none`;
    });
  });

  showMoreBtn?.addEventListener('click', function () {
    newsContainer.style.height = `auto`;
    this.style.display = `none`;
  });

  // ScrollTrigger.refresh();

  // const triggetBtn = [...document.querySelectorAll('[btn-trigger]')];

  // triggetBtn.forEach((btn) => {
  //   btn.addEventListener('click', () => {
  //     //get the parent el of the clicked button
  //     const parentEl = btn.parentElement;
  //     parentEl?.classList.toggle('active');
  //   });
  // });

  // const slideTrigger = document.querySelector('.legacy--section');
  // const mbTrigger = document.querySelector('.img-slide-wrap');
  // const impactCardWrap = document.querySelector('.financials--section');
  // const bannerImg = document.querySelector('[ds-img="background"]');
  // const footerTrigger = document.querySelector('.footer');
  // //image slide selector
  // const sectionSlide = gsap.utils.toArray('.slide-img');

  // //paragraph slide selector
  // const paraSlide = gsap.utils.toArray('[text-change]');

  // const impactCard = gsap.utils.toArray('[impact-el]');
  // const gridAbt = gsap.utils.toArray('[abt-grid]');

  // const imgGLideLeft = document.querySelector('[glide-left]');
  // const imgGlideRIght = document.querySelector('[glide-right]');

  // console.log(imgGlideRIght);
  // const formSLideIn = document.querySelector('[form-slideIn]');
  // console.log(formSLideIn);

  // function isMobile() {
  //   return window.innerWidth < 479;
  // }

  // // SCROLL SMOOTHER
  // //split text
  // const typeSplit = new SplitType('[text-split]', {
  //   types: 'lines, words',
  //   tagName: 'span',
  // });

  // gsap.set('[text-split]', { autoAlpha: 1, delay: 0.1 });

  // //PAGE LOAD ANIMATIONS
  // const tl = gsap.timeline();
  // function init() {
  //   tl.from($('[page-top-text]').find('.word'), {
  //     autoAlpha: 0,
  //     yPercent: 100,
  //     duration: 3,
  //     ease: 'expo.out',
  //     stagger: { amount: 0.1 },
  //   }).from(div

  //     '[hero-video]',
  //     {
  //       autoAlpha: 0,
  //       yPercent: 100,
  //       duration: 2,
  //       ease: 'expo.out',
  //     },
  //     '<0.0'
  //   );
  // }
  // init();

  // const slideImgTl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: isMobile() ? '' : slideTrigger,
  //     scrub: 1,
  //     start: 'top, top',
  //     //end: '100% 30%',
  //     // markers: true,
  //     pin: true,
  //     // end: () => '+=' + slideTrigger.offsetWidth,
  //     end: '+=' + sectionSlide[0].offsetWidth,
  //   },
  // });

  // slideImgTl
  //   .to(sectionSlide, {
  //     xPercent: -100 * (sectionSlide.length - 1),
  //     // xPercent: -300,
  //     ease: 'none',
  //   })
  //   .to(paraSlide, { xPercent: -100 }, 0);

  // const slideInAnimation = function (el, triggeEl) {
  //   gsap.from(el, {
  //     yPercent: 100,
  //     autoAlpha: 0,
  //     duration: 2,
  //     stagger: 0.15,
  //     scrollTrigger: {
  //       trigger: triggeEl,
  //       start: 'top 30%',
  //       // markers: true,
  //     },
  //   });
  // };
  // slideInAnimation(impactCard, impactCardWrap);

  // //link timeslines to scroll postion
  // const createScrollTrigger = function (triggerElement, timeline) {
  //   //play tl when scrolled into view (60% from top of screen)
  //   ScrollTrigger.create({
  //     trigger: triggerElement,
  //     start: 'top 80%',
  //     // markers: true,
  //     onEnter: () => timeline.play(),
  //   });
  // };

  // $('[words-slide-up]').each(function (index) {
  //   const tl = gsap.timeline({ paused: true });
  //   tl.from($(this).find('.word'), {
  //     autoAlpha: 0,
  //     yPercent: 100,
  //     duration: 3,
  //     ease: 'expo.out',
  //     stagger: { amount: 0.05 },
  //   });
  //   createScrollTrigger($(this), tl);
  // });

  // gsap.from(gridAbt, {
  //   yPercent: 20,
  //   duration: 2.4,
  //   autoAlpha: 0,
  //   stagger: 0.15,
  //   scrollTrigger: {
  //     trigger: '.about-grid--section',
  //     start: 'top 70%',
  //     // markers: true,
  //   },
  // });

  // /////floating image animation

  // const flImtl = gsap.timeline({
  //   defaults: { duration: 3, ease: 'expo.out', stagger: 0.1 },
  //   scrollTrigger: {
  //     trigger: formSLideIn,
  //     //markers: true,
  //     start: 'top 80%',
  //     // end: '+=100%',
  //     //scrub: true,
  //   },
  // });

  // flImtl.from(imgGLideLeft, { yPercent: 100 }).from(imgGlideRIght, { yPercent: 100 }, 0);

  // gsap.to(bannerImg, {
  //   yPercent: -25,
  //   //duration: 5,
  //   scrollTrigger: {
  //     trigger: footerTrigger,
  //     start: 'top 150%',
  //     ease: 'expo.out',
  //     // end: 'bottom 10%',
  //     // markers: true,
  //     //pin: true,
  //     scrub: true,
  //   },
  // });
  // SCROLL SMOOTHER
  // gsap.registerPlugin(ScrollTrigger);
  // //split text
  // const typeSplit = new SplitType('[text-split]', {
  //   types: 'lines, words',
  //   tagName: 'span',
  // });
  // // const bannerSection = document.querySelector('[ds-section="banner"]');
  // const bannerImg = document.querySelector('[ds-img="background"]');
  // const footerTrigger = document.querySelector('.footer');
  // //link timeslines to scroll postion
  // const createScrollTrigger = function (triggerElement, timeline) {
  //   //play tl when scrolled into view (60% from top of screen)
  //   ScrollTrigger.create({
  //     trigger: triggerElement,
  //     start: 'top 70%',
  //     onEnter: () => timeline.play(),
  //   });
  // };
  // gsap.set('[text-split]', { autoAlpha: 1, delay: 0.1 });
  // gsap.set('.words', { lineHeight: 0.75 });
  // $('[words-slide-up]').each(function (index) {
  //   const tl = gsap.timeline({ paused: true });
  //   tl.from($(this).find('.word'), {
  //     autoAlpha: 0,
  //     yPercent: 100,
  //     duration: 3,
  //     ease: 'expo.out',
  //     stagger: { amount: 0.05 },
  //   });
  //   createScrollTrigger($(this), tl);
  // });
  // //PAGE LOAD ANIMATIONS
  // const tl = gsap.timeline();
  // function init() {
  //   tl.from($('[page-top-text]').find('.word'), {
  //     autoAlpha: 0,
  //     yPercent: 100,
  //     duration: 3,
  //     ease: 'expo.out',
  //     stagger: { amount: 0.1 },
  //   }).from(
  //     '[hero-video]',
  //     {
  //       autoAlpha: 0,
  //       yPercent: 100,
  //       duration: 2,
  //       ease: 'expo.out',
  //     },
  //     '<0.0'
  //   );
  // }
  // init();
  // function isMobile() {
  //   return window.innerWidth < 479;
  // }
  // ////change maker voice
  // const leftBg = document.querySelector('[left-bg]') as HTMLElement;
  // const rightBg = document.querySelector('[right-bg]') as HTMLElement;
  // const bottomBg = document.querySelector('[bottom-img]') as HTMLElement;
  // const bgTrigger = document.querySelector('[bg-imgTrigger]');
  // const tl3 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: bgTrigger,
  //     start: isMobile() ? 'top 95%' : 'top 95%',
  //     end: isMobile() ? '+=200%' : '+=100%',
  //     //markers: true,
  //     //  pin: isMobile() ? false : true,
  //     scrub: true,
  //   },
  // });
  // tl3
  //   .from(leftBg, { yPercent: isMobile() ? 100 : 140 })
  //   .from(rightBg, { yPercent: isMobile() ? 120 : 80 }, '<')
  //   .from(bottomBg, { yPercent: isMobile() ? 150 : 120 }, '<');
  // const cardSlide = gsap.utils.toArray('[slide-card]');
  // const cardTrigger = document.querySelector('[update-section]');
  // const newsTl = gsap.timeline({
  //   defaults: { duration: 3.5, ease: 'expo.out', stagger: 0.1, autoAlpha: 0 },
  //   scrollTrigger: {
  //     trigger: cardTrigger,
  //     // markers: true,
  //     start: 'top 70%',
  //   },
  // });
  // newsTl.from(
  //   cardSlide,
  //   {
  //     yPercent: 50,
  //     delay: 0.5,
  //   },
  //   0
  // );
  // gsap.to(bannerImg, {
  //   yPercent: -50,
  //   //duration: 5,
  //   scrollTrigger: {
  //     trigger: footerTrigger,
  //     start: 'top 150%',
  //     // end: 'bottom 10%',
  //     // markers: true,
  //     //pin: true,
  //     scrub: true,
  //   },
  // });
  // gsap.registerPlugin(ScrollTrigger);
  // ScrollTrigger.refresh();
  // //split text
  // const typeSplit = new SplitType('[text-split]', {
  //   types: 'lines, words',
  //   tagName: 'span',
  // });
  // const allTexts = gsap.utils.toArray('.h-heading');
  // //link timeslines to scroll postion
  // const createScrollTrigger = function (triggerElement, timeline) {
  //   //play tl when scrolled into view (60% from top of screen)
  //   ScrollTrigger.create({
  //     trigger: triggerElement,
  //     start: 'top 70%',
  //     onEnter: () => timeline.play(),
  //   });
  // };
  // gsap.set('[text-split]', { autoAlpha: 1, delay: 0.1 });
  // gsap.set(allTexts[0], { position: 'static', display: 'block' });
  // $('[words-slide-up]').each(function (index) {
  //   const tl = gsap.timeline({ paused: true });
  //   tl.from($(this).find('.word'), {
  //     autoAlpha: 0,
  //     yPercent: 100,
  //     duration: 2.5,
  //     ease: 'expo.out',
  //     stagger: { amount: 0.05 },
  //   });
  //   createScrollTrigger($(this), tl);
  // });
  // const animDurationTime = 2;
  // const animDelay = 3;
  // //PAGE LOAD ANIMATIONS
  // const tl = gsap.timeline();
  // const textTl = gsap.timeline({ paused: true, repeat: -1 });
  // function init() {
  //   allTexts.forEach((word) => {
  //     const slidedWords = [...word.querySelectorAll('.word')].splice(2);
  //     //$(word).find('.word')
  //     const tl = gsap.timeline({});
  //     tl.set(word, { position: 'static', visibility: 'visible', display: 'inline-block' })
  //       .from(slidedWords, {
  //         yPercent: 100,
  //         duration: animDurationTime,
  //         ease: 'expo.out',
  //       })
  //       .to(slidedWords, {
  //         yPercent: -100,
  //         duration: animDurationTime,
  //         delay: animDelay,
  //         ease: 'expo.out',
  //       })
  //       .set(word, { position: 'absolute', visibility: 'hidden' });
  //     textTl.add(tl);
  //   });
  //   const firstParagraph = allTexts[0];
  //   const firsTwoWords = [...firstParagraph.querySelectorAll('.word')].slice(0, 2);
  //   tl.from(firsTwoWords, {
  //     // autoAlpha: 0,
  //     yPercent: 100,
  //     duration: 2.5,
  //     ease: 'expo.out',
  //     stagger: { amount: 0.1 },
  //     onComplete: function () {
  //       console.log('complete');
  //       textTl.play();
  //     },
  //   }).from(
  //     '[hero-video]',
  //     {
  //       autoAlpha: 0,
  //       yPercent: 100,
  //       duration: 3,
  //       ease: 'expo.out',
  //     },
  //     '<0.0'
  //   );
  // }
  // init();
  // addEventListener('resize', (e) => {
  //   textTl.restart();
  //   gsap.set(allTexts[0], { position: 'static', display: 'block' });
  // });
  // const cardSlide = gsap.utils.toArray('[slide-card]');
  // const cardTrigger = document.querySelector('[update-section]');
  // const newsTl = gsap.timeline({
  //   defaults: { duration: 3.5, ease: 'expo.out', stagger: 0.1, autoAlpha: 0 },
  //   scrollTrigger: {
  //     trigger: cardTrigger,
  //     //markers: true,
  //     start: 'top 70%',
  //   },
  // });
  // newsTl.from(
  //   cardSlide,
  //   {
  //     yPercent: 50,
  //     delay: 0.5,
  //   },
  //   0
  // );
  // paymentAPI();
  // multiForm();
  // dropDownFunction();
});

////Agudah script

window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.refresh();

  //split text
  const typeSplit = new SplitType('[text-split]', {
    types: 'lines, words',
    tagName: 'span',
  });

  const allTexts = gsap.utils.toArray('.h-heading');

  //link timeslines to scroll postion
  const createScrollTrigger = function (triggerElement, timeline) {
    //play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top 70%',
      onEnter: () => timeline.play(),
    });
  };

  gsap.set('[text-split]', { autoAlpha: 1, delay: 0.1 });

  gsap.set(allTexts[0], { position: 'static', display: 'block' });

  $('[words-slide-up]').each(function (index) {
    const tl = gsap.timeline({ paused: true });
    tl.from($(this).find('.word'), {
      autoAlpha: 0,
      yPercent: 100,
      duration: 2.5,
      ease: 'expo.out',
      stagger: { amount: 0.05 },
    });
    createScrollTrigger($(this), tl);
  });

  const animDurationTime = 1.5;
  const animDelay = 1.5;

  //PAGE LOAD ANIMATIONS
  const tl = gsap.timeline();
  const textTl = gsap.timeline({ paused: true, repeat: -1 });

  function init() {
    allTexts.forEach((word) => {
      const slidedWords = [...word.querySelectorAll('.word')].splice(2);

      //$(word).find('.word')
      const tl = gsap.timeline({});

      tl.set(word, { position: 'static', visibility: 'visible', display: 'inline-block' })
        .from(slidedWords, {
          yPercent: 100,
          duration: animDurationTime,
          ease: 'expo.out',
        })
        .to(slidedWords, {
          yPercent: -100,
          duration: animDurationTime,
          delay: animDelay,
          ease: 'expo.out',
        })
        .set(word, { position: 'absolute', visibility: 'hidden' });
      textTl.add(tl);
    });

    const firstParagraph = allTexts[0];
    const firsTwoWords = [...firstParagraph.querySelectorAll('.word')].slice(0, 2);

    tl.from(firsTwoWords, {
      // autoAlpha: 0,
      yPercent: 100,
      duration: animDurationTime,
      ease: 'expo.out',
      stagger: { amount: 0.1 },
      onComplete: function () {
        console.log('complete');
        textTl.play();
      },
    }).from(
      '[hero-video]',
      {
        autoAlpha: 0,
        yPercent: 100,
        duration: 3,
        ease: 'expo.out',
      },
      '<0.0'
    );
  }

  init();

  addEventListener('resize', (e) => {
    textTl.restart();
    gsap.set(allTexts[0], { position: 'static', display: 'block' });
  });

  const cardSlide = gsap.utils.toArray('[slide-card]');
  const cardTrigger = document.querySelector('[update-section]');

  const newsTl = gsap.timeline({
    defaults: { duration: 3.5, ease: 'expo.out', stagger: 0.1, autoAlpha: 0 },
    scrollTrigger: {
      trigger: cardTrigger,
      //markers: true,
      start: 'top 70%',
    },
  });

  newsTl.from(
    cardSlide,
    {
      yPercent: 50,
      delay: 0.5,
    },
    0
  );
});

// Initialize Swiper
const testiSlide = new Swiper('#testiSlide', {
  slidesPerView: 1,
  speed: 1000,
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },
});
