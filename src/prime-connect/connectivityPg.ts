import { lenisScroll } from 'src/smoothScroll_updated';
document.addEventListener('DOMContentLoaded', () => {
  const lenis = lenisScroll(ScrollTrigger, gsap);

  function isTablet(): boolean {
    return window.innerWidth <= 767; // Example breakpoint, adjust as necessary
  }

  function isMobile(): boolean {
    return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
  }

  const EASE = 'back.out';
  const BOUNCE_EASE = 'elastic.out(1, 0.5)';
  const POWER_EASE = 'power2.out';

  //html elements
  //testimonial section
  const test_trigger = document.getElementById('client-testimonials') as HTMLElement;
  const img_Slide = test_trigger.querySelector('[img-slide]') as HTMLElement;
  const testimonial_el = [...test_trigger.querySelectorAll('[slideup]')] as HTMLElement[];

  //scroll animation elements
  const scroll_trigger = document.querySelector('[scroll-section]') as HTMLElement;
  const scroll_Container = scroll_trigger.querySelector('[scroll-container]') as HTMLElement;
  const text_Split_trigger = document.querySelector('[text-trigger]') as HTMLElement;

  const cardScrollCont = [...document.querySelectorAll('[scroll-card]')] as HTMLElement[];
  const pin_Wrapper = document.querySelector('[pin-wrapper]') as HTMLElement;

  ///bottom image section
  const bottomImageSection = document.querySelector('[bottom-img-sect]') as HTMLElement;
  const animImage = bottomImageSection.querySelector('[image-wrap]') as HTMLElement;
  const image_cover_height = bottomImageSection.querySelector('[image-cov-height]') as HTMLElement;
  const image_cover_width = bottomImageSection.querySelector('[image-cov-width]') as HTMLElement;

  //const scroll_split
  //testimonial section animation
  const test_tl = gsap.timeline({
    scrollTrigger: {
      trigger: test_trigger,
      start: 'top 70%',
    },
  });

  test_tl.from(
    testimonial_el,
    { yPercent: 100, autoAlpha: 0, stagger: 0.1, ease: EASE, duration: 1 },
    0.25
  );

  createScrollAnimation('logo--section', 'logo-slide', {});

  ///horizontal scroll section
  if (!isTablet()) {
    document.fonts.ready.then(() => {
      const split = SplitText.create('[scroll-split]', {
        type: 'words',
        wordsClass: 'scroll-text',
      });

      const text_tl = gsap.timeline({
        scrollTrigger: {
          trigger: text_Split_trigger,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
      text_tl.from('.scroll-text', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        ease: EASE,
        duration: 0.7,
      });
    });

    function getScrollAmount() {
      const { scrollWidth } = scroll_Container;
      return -(scrollWidth - window.innerWidth / 1);
    }

    const tween = gsap.fromTo(
      scroll_Container,
      { x: () => window.innerWidth / 2 },
      {
        x: getScrollAmount,
        ease: 'none',
      }
    );

    ScrollTrigger.create({
      trigger: pin_Wrapper,
      start: 'top 30%',
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      invalidateOnRefresh: true,
      // markers: true,
      animation: tween,
    });

    cardScrollCont.forEach((card) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'left center',
        containerAnimation: tween,
        scrub: 1,
        animation: gsap.to(card.querySelector('[scroll-el]'), {
          yPercent: 9,
          ease: BOUNCE_EASE,
        }),
      });
    });
  } else {
    createScrollAnimation('mobile-sect', 'mobile-slide', {});
  }

  const btmImgTl = gsap.timeline({
    scrollTrigger: {
      trigger: bottomImageSection,
      start: 'top 95%',
      toggleActions: 'play none none reverse',
    },
  });

  btmImgTl
    .to(image_cover_height, {
      height: '0%',
      duration: 1,
    })
    .to(
      image_cover_width,
      {
        width: '0%',
        duration: 1,
      },
      0
    )
    .from(
      animImage,
      {
        scale: 1.3,
        duration: 1.5,
      },
      0.15
    );

  //banner section animation
  // createScrollAnimation('banner-section', 'banner-slide', {});

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
