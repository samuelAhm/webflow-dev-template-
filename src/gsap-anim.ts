window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('Master solution');
  const ease = 'expo.out';
  const duration = 1;
  const stagger = 0.3;
  const autoAlpha = 0;

  function isMobile() {
    return window.innerWidth < 423;
  }

  const allSLides = document.querySelectorAll('[slide-in]');
  const numSlides = document.querySelectorAll('[num-slide]');
  gsap.set(allSLides, { visibility: 'hidden' });
  //gsap.set(numSlides, { visibility: 'hidden' });
  const heroTl = gsap.timeline({ ease: ease });

  heroTl
    .from(allSLides, { yPercent: 120, autoAlpha: 0, stagger: 0.2, duration: 1.5, ease })
    .from('[slide-img]', { xPercent: 100, autoAlpha: 0, duration: 1.5, ease }, '<');

  //num sec
  const trigger = document.querySelector('[numb-sect]') as HTMLElement;

  const numTl = gsap.timeline({
    ease,
    scrollTrigger: {
      trigger: trigger,
      start: 'top, 80%',
      // markers: true,
    },
  });

  numTl
    .from(numSlides, { yPercent: -100, autoAlpha: 0, stagger, duration: 1 })
    .from('[line-slide]', { autoAlpha: 0, opacity: 0, ease }, 0.5);

  /////activities section
  const actiTl = gsap.timeline({
    ease,
    scrollTrigger: {
      trigger: '[acti-sect]',
      start: 'top, 60%',
      // markers: true,
    },
  });

  actiTl
    .from('[acti-heading]', { yPercent: 100, autoAlpha: 0, duration })
    .from('[acti-slide]', { yPercent: 100, autoAlpha: 0, stagger, duration: 1.5 }, '<')
    .from('[acti-border]', { opacity: 0, autoAlpha: 0, ease, duration: 1 }, 0.45)
    .from('[acti-img]', { xPercent: 100, autoAlpha: 0, duration: 1 }, '<');

  //why choose use section
  const whyChooseTl = gsap.timeline({
    ease,
    scrollTrigger: {
      trigger: '#whyChooseUs',
      start: 'top, 80%',
      //markers: true,
      end: '=+450',
      scrub: true,
    },
  });

  ///
  //major obj
  const headingAnim = { yPercent: 100, autoAlpha, duration };
  const animObj2 = { yPercent: 100, autoAlpha, duration: 1.5, ease, stagger };
  const scrollTObj = {
    trigger: '#outsourceSect',
    start: 'top, 80%',
    markers: false,
    //end: '=+450',
    //scrub: true,
  };
  ////
  whyChooseTl
    .from('[sup-heading]', { yPercent: 100, autoAlpha, duration })
    .from('[sup-slide]', { yPercent: 100, autoAlpha, duration: 1.5, ease, stagger }, 0.5);

  ///Outsource section
  const outTl = gsap.timeline({
    ease,
    scrollTrigger: { ...scrollTObj, start: 'top, 80%' },
  });

  outTl
    .from('[out-heading]', { ...headingAnim })
    .from('[out-slide-r]', { xPercent: 100, autoAlpha: 0, duration: 1.5, stagger }, 0.5)
    .from('[out-slide]', { ...animObj2, duration: 1 }, '<');

  function TestiCardAnim(sect: string, headingSect: string, textSlide: string, numSlide: string) {
    ///Master solution sect
    const masterTl = gsap.timeline({
      ease,
      scrollTrigger: {
        ...scrollTObj,
        trigger: sect,
        start: 'top, 80%',
      },
    });
    masterTl
      .from(headingSect, { ...headingAnim })
      .from(textSlide, { ...animObj2 }, 0.5)
      .from(numSlide, { xPercent: 100, duration, autoAlpha }, 0.25);
  }

  TestiCardAnim('#masterSolutionSect', '[master-heading]', '[master-slide]', '[master-num-slide]');
  TestiCardAnim('#crestSect', '[cres-heading]', '[cres-slide]', '[cres-num-slide]');

  ///Reliable solution Sect
  const relTl = gsap.timeline({
    ease,
    scrollTrigger: {
      ...scrollTObj,
      trigger: '#reliableSolutionSect',
    },
  });

  relTl.from('[rel-heading]', { ...headingAnim }).from('[rel-slide]', { ...animObj2 }, 0.25);

  /////Banner section
  const bannerTl = gsap.timeline({
    ease,
    scrollTrigger: {
      ...scrollTObj,
      trigger: '#bannerSect',
      start: 'top, 70%',
    },
  });

  bannerTl
    .from('[banner-brder-slide]', { xPercent: -100, ease, duration: 1.5, autoAlpha })
    .from('[banner-slide-r]', { xPercent: 100, ease, duration: 2, autoAlpha, stagger: 0.05 }, 0.25);

  ////Faq section
  const faqTl = gsap.timeline({
    ease,
    scrollTrigger: {
      ...scrollTObj,
      trigger: '#faqSect',
    },
  });

  faqTl.from('[faq-heading]', { ...headingAnim }).from('[faq-slide]', { ...animObj2 }, '<');

  /////NUMB box section
  const numSlideTl = gsap.timeline({
    scrollTrigger: {
      ...scrollTObj,
      trigger: '[smoothTech--sect]',
      start: isMobile() ? 'top, 40%' : 'top, 70%',
      // markers: true,
      scrub: true,
      end: '+=800',
    },
  });

  // const lineTl = gsap.timeline({
  //   scrollTrigger: {
  //     ...scrollTObj,
  //     trigger: '[smoothTech--sect]',
  //     start: isMobile() ? 'top, 40%' : 'top, 70%',
  //     scrub: true,
  //     end: '+=1000',
  //   },
  // });

  // lineTl.to('.cover-div', { height: 0 });

  numSlideTl
    .from('[slide-right-1]', { scale: 0, ease: 'none', autoAlpha })
    .from('[slide-left-1]', { scale: 0, ease: 'none', autoAlpha })
    .from('[slide-right-2]', { scale: 0, ease: 'none', autoAlpha })
    .from('[slide-left-2]', { scale: 0, ease: 'none', autoAlpha });
});
