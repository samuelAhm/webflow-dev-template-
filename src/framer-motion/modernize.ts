import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Lenis from 'lenis';
import { animate, inView, scroll, stagger } from 'motion';
import { tr } from 'motion/react-client';

document.addEventListener('DOMContentLoaded', function () {
  // Initialize Lenis
  // Initialize Lenis
  const lenis = new Lenis({
    lerp: 0.15,
    wheelMultiplier: 0.85,
    gestureOrientation: 'vertical',
    anchors: false,
  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  //counter up animation
  const allCounters = [...document.querySelectorAll('[counter]')] as HTMLElement[];
  const marqWrapper = document.querySelector('#marquee') as HTMLElement;
  const bannerSect = document.querySelector('#bannerSect') as HTMLElement;
  const growSect = document.querySelector('#growthSect') as HTMLElement;

  const createOdometer = (el: HTMLElement) => {
    const value = el.getAttribute('count-uptext');

    const odometer = new Odometer({
      el: el,
      value: 0,
    });
    odometer.update(value);
  };

  if (allCounters.length > 0) {
    inView(
      '#numWrap',
      (el) => {
        const allNumcards = [...el.querySelectorAll('[count-uptext]')] as HTMLElement[];
        createOdometer(allNumcards[0]);
        createOdometer(allNumcards[1]);
        createOdometer(allNumcards[2]);
        createOdometer(allNumcards[3]);
      },
      { amount: 'all', margin: '200px 100px 0px 0px' }
    );
  }

  if (bannerSect) {
    inView(
      bannerSect,
      (el) => {
        const numCard = el.querySelector('[count-uptext]') as HTMLElement;
        console.log(el);
        createOdometer(numCard);
      },
      { amount: 'all', margin: '200px 100px 0px 0px' }
    );
  }

  if (growSect) {
    inView(
      growSect,
      (el) => {
        const widthEl = el.querySelector('[width-adj]') as HTMLElement;
        animate(widthEl, { width: ['0', '100%'] }, { duration: 2 });
      },
      { amount: 0.5, margin: '200px 100px 0px 0px' }
    );
  }

  const testiSLide1 = new Splide(marqWrapper, {
    type: 'loop',
    autoWidth: true,
    direction: 'rtl',
    // height: 'auto',
    // gap: '1rem',
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: 0.5,
    },
  });
  testiSLide1.mount({ AutoScroll });
});
