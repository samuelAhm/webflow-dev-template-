import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenisScroll } from 'src/gsap/smoothScroll';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);

  //counter up animation
  const allCounters = gsap.utils.toArray('[counter]') as HTMLElement[];
  const counterBox = [...document.querySelectorAll('[counter-box]')] as HTMLElement[];

  //scroll opacity
  const allElements = gsap.utils.toArray('[cs-scroll]') as HTMLElement[];
  const scroll_sect = document.querySelector('[progress-section]') as HTMLElement;

  const h_tl = gsap.timeline({
    scrollTrigger: {
      trigger: scroll_sect,
      start: 'top 55%',
      scrub: true,
    },
  });

  h_tl.to('[height-wrap]', {
    height: '100%',
  });

  allElements.forEach((el) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 65%',
        scrub: 0.1,
      },
    });

    tl.to(el, { opacity: 1 });
  });

  const createOdometer = (el: HTMLElement) => {
    //get the value of the text from the el
    const value = el.getAttribute('count-uptext');
    const odometer = new Odometer({
      el: el,
      value: 0,
    });
    odometer.update(value);
  };

  if (allCounters.length > 0) {
    counterBox.forEach((el, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          // end: 'bottom 50%',
          //  markers: true,
          scrub: true,
          onEnter: function () {
            createOdometer(allCounters[i]);
          },
        },
        defaults: { duration: 0.5, ease: 'power2.out' },
      });
    });
  }
});
