import { lenisScroll } from 'src/smoothScroll_updated';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  const lenis = lenisScroll(ScrollTrigger, gsap);

  function isMobile(): boolean {
    return window.innerWidth <= 767; // Example breakpoint, adjust as necessary
  }

  const EASE = 'back.out';
  const BOUNCE_EASE = 'elastic.out(1, 0.5)';
  const POWER_EASE = 'power2.out';

  //HTML elements
  //testimonial section
  const test_trigger = document.getElementById('client-testimonials') as HTMLElement;
  const img_Slide = test_trigger.querySelector('[img-slide]') as HTMLElement;
  const testimonial_el = [...test_trigger.querySelectorAll('[slideup]')] as HTMLElement[];

  //testimonial section animation
  const test_tl = gsap.timeline({
    scrollTrigger: {
      trigger: test_trigger,
      start: 'top 70%',
      //   markers: true,
    },
  });

  test_tl.from(
    testimonial_el,
    { yPercent: 100, autoAlpha: 0, stagger: 0.1, ease: EASE, duration: 1 },
    0.25
  );

  ///cta section slide
  createScrollAnimation('sect-cta', 'sect-slide', {});
  //cards section
  createScrollAnimation('cards-sect', 'cards-slide', {});
  //team section
  createScrollAnimation('team-sect', 'team-slide', {});
  //Team pop up functionality
  ///scrollbar width
  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  function hideBodyScroll() {
    const scrollbarWidth = getScrollbarWidth();
    document.body.style.paddingRight = `${scrollbarWidth - 1}px`;
    document.body.style.overflow = 'hidden';
    // Display the popup
  }

  function showBodyScroll() {
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
    // Hide the popup
  }

  //no-scroll
  const bodyEL = document.querySelector('body');
  const popOpenBtns = [...document.querySelectorAll('[pop-open]')] as HTMLElement[];
  const popUpElements = [...document.querySelectorAll('[pop]')] as HTMLElement[];
  const closeBtns = [...document.querySelectorAll('[close-btn]')] as HTMLElement[];

  const popWrapper = document.querySelector('.team_info-popup');

  const popTl = gsap.timeline({ paused: true });

  popTl.set(popWrapper, { opacity: 0, display: 'none' });

  popTl.set(popWrapper, { display: 'flex' }).to(popWrapper, { opacity: 1, duration: 0.2 }, 0.2);

  popOpenBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      hideBodyScroll();

      //get the attribute
      const popName = btn.getAttribute('pop-open');

      const [activeEL] = popUpElements.filter((el) => el.getAttribute('pop') === popName);

      activeEL.classList.add('active_team');

      activeEL.style.display = 'block';
      popTl.play();
      gsap.from(activeEL, { yPercent: 20, opacity: 0, duration: 1, ease: 'expo.out' });
      lenis.stop();
      // bodyEL.classList.add('no-scroll');
    });
  });

  closeBtns.forEach((closebtn, i) => {
    closebtn.addEventListener('click', () => {
      //llo through pop elemernt and find the active one witht the active_team class
      const activePop = popUpElements.find((el) =>
        el.classList.contains('active_team')
      ) as HTMLElement;
      lenis.start();
      activePop?.classList.remove('active_team');
      activePop.style.display = 'none';
      //   bodyEL.classList.remove('no-scroll');
      popTl.reverse();
      showBodyScroll();
    });
  });

  //banner section animation
  createScrollAnimation('banner-section', 'banner-slide', {});

  function createScrollAnimation(section_trigger: string, logo: string, options: any = {}) {
    // Default options
    const { start = 'top 70%', y = 50, stagger = 0.15, autoAlpha = 0, markers = false } = options;
    // Create the timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `[${section_trigger}]`,
        start: start,
        markers: markers,
      },
    });
    // Add the animation to the timeline
    tl.from(`[${logo}]`, { y: y, stagger: stagger, autoAlpha: autoAlpha }, 0);
  }
});
