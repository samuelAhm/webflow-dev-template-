import { lenisScroll } from 'src/smoothScroll_updated';

document.addEventListener('DOMContentLoaded', () => {
  function isTablet(): boolean {
    return window.innerWidth <= 767; // Example breakpoint, adjust as necessary
  }

  function isMobile(): boolean {
    return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
  }

  const EASE = 'back.out';
  const BOUNCE_EASE = 'elastic.out(1, 0.5)';

  // gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);

  //html element
  const heroSection = document.querySelector('[hero-section]') as HTMLElement;
  const floatingElements = document.querySelectorAll('[float-icon]') as NodeListOf<HTMLElement>;

  //map html element
  const mapOverSections = document.querySelectorAll('[dot-cover]') as NodeListOf<HTMLElement>;

  //capsule section
  const connect_section = document.querySelector('[capsule--section]') as HTMLElement;
  const capsule_items = document.querySelectorAll('[capsule-item]') as NodeListOf<HTMLElement>;

  const bannerSection = document.querySelector('[banner-cta--section]') as HTMLElement;
  const bannerItems = document.querySelectorAll('[ban-text]') as NodeListOf<HTMLElement>;
  const bannerCta = document.querySelectorAll('[ban-cta]') as NodeListOf<HTMLElement>;

  createScrollAnimation('logo--section', 'logo-slide', {});
  createScrollAnimation('card--section', 'cards-slide', {});
  createScrollAnimation('speed--section', 'speed-slide', {});

  const capsuleTl = gsap.timeline({
    scrollTrigger: {
      trigger: connect_section,
      start: 'top 70%',
      // markers: true,
    },
  });

  capsuleTl.from(capsule_items, {
    yPercent: -100,
    stagger: 0.2,
    autoAlpha: 0,
    ease: BOUNCE_EASE,
    duration: 3,
  });

  mapOverSections.forEach((dotCover) => {
    //tranversr to parent
    const parent = dotCover.parentElement;
    const targetEL = parent?.querySelector('[map-hover-reveal]') as HTMLElement;

    const tl = gsap.timeline({
      paused: true,
    });

    tl.from(targetEL, {
      yPercent: 50,
      duration: 0.5,
      ease: EASE,
      autoAlpha: 0,
    });

    dotCover.addEventListener('mouseover', () => {
      tl.play();

      dotCover.addEventListener('mouseout', () => {
        tl.reverse();
      });
    });
  });

  // createScrollAnimation('comm--section', 'com-card', {});
  createScrollAnimation('faq--section', 'faq-slide', {});

  createScrollAnimation('media--section', 'media-slide', {});
  createScrollAnimation('efficient--section', 'effi-slide', {});

  createScrollAnimation('state-section', 'state-item', {});

  //stack card section
  const stack_card_section = document.querySelector('[card-stack--section]') as HTMLElement;
  const stack_card_items = document.querySelectorAll('[stack-card]') as NodeListOf<HTMLElement>;

  const stack_card_tl = gsap.timeline({
    scrollTrigger: {
      trigger: stack_card_section,
      start: 'top 70%',
      //      markers: true,
    },
  });

  stack_card_tl.from(stack_card_items, {
    yPercent: -50,
    stagger: 0.25,
    autoAlpha: 0,
    ease: BOUNCE_EASE,
    duration: 3,
  });

  if (!isTablet()) {
    //horizontal scroll
    //container animation with gsap
    const horizontalScroll_section = document.querySelector('[h-scroll--section]') as HTMLElement;
    const scroll_item_wrapper = document.querySelector('[scroll-container]') as HTMLElement;
    const item_Wrapper_width = scroll_item_wrapper.offsetWidth;

    const amountToScroll = item_Wrapper_width - window.innerWidth;

    function getScrollAmount() {
      const { scrollWidth } = scroll_item_wrapper;
      return -(scrollWidth - window.innerWidth);
    }

    // const amountoScroll = 300;

    //item_container-wodth = window width

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: horizontalScroll_section,
        start: 'top top',
        end: () => `+=${getScrollAmount() * -1}`,
        //end: `=+300%`,
        //   markers: true,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    scrollTl.to(scroll_item_wrapper, {
      x: getScrollAmount,
    });
  }

  //banner drop
  const banTl = gsap.timeline({
    scrollTrigger: {
      trigger: bannerSection,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
      // markers: true,
    },
  });

  banTl
    .from(bannerItems, {
      yPercent: -100,
      stagger: 0.5,
      autoAlpha: 0,
      ease: EASE,
      // reversed: true,
      duration: 1.6,
    })
    .from(
      bannerCta,
      {
        yPercent: -100,
        autoAlpha: 0,
      },
      1
    );

  function createScrollAnimation(section_trigger: string, logo: string, options: any = {}) {
    // Default options
    const { start = 'top 70%', y = 50, stagger = 0.15, autoAlpha = 0, markers = false } = options;
    // Create the timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `[${section_trigger}]`,
        start: start,
        markers: markers,
        toggleActions: 'play none none reverse',
      },
    });
    // Add the animation to the timeline
    tl.from(
      `[${logo}]`,
      { y: y, stagger: stagger, autoAlpha: autoAlpha, ease: BOUNCE_EASE, duration: 1.5 },
      0
    );
  }
});
