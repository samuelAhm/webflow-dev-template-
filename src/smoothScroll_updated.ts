import 'lenis/dist/lenis.css';

import Lenis from 'lenis';

function isMobile(): boolean {
  return window.innerWidth <= 479; // Adjust as needed
}

export function lenisScroll(scrollTrigger: any, gsap: any) {
  const mb = isMobile();

  const lenis = new Lenis({
    // On desktop keep smooth feeling; on mobile, minimize the smoothing effect
    lerp: mb ? 0.2 : 0.1, // higher = snappier; 0.2 on mobile reduces long easing tails
    wheelMultiplier: mb ? 0.7 : 0.9, // reduce wheel momentum
    touchMultiplier: mb ? 0.6 : 1, // tone down touch momentum on mobile
    gestureOrientation: 'vertical',
    smoothWheel: true,
    // smoothTouch: false, // use more native-like scrolling on touch devices
    syncTouch: true, // keeps touch and wheel in sync with ScrollTrigger
  });

  // Keep ScrollTrigger in sync with Lenis
  lenis.on('scroll', scrollTrigger.update);

  // Drive Lenis with GSAP's ticker
  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing();

  // Optional: refresh ScrollTrigger after a short delay for layout stability
  setTimeout(() => {
    scrollTrigger.refresh();
  }, 300);

  return lenis;
}

/*
*
* import 'lenis/dist/lenis.css';

import Lenis from 'lenis';

// const lenis = new Lenis({
//   lerp: 0.1,
//   wheelMultiplier: 0.85,
//   gestureOrientation: 'vertical',
// });

function isMobile(): boolean {
  return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
}

export function lenisScroll(scrollTrigger: any, gsap: any) {
  const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.8,
    gestureOrientation: 'vertical',
  });

  lenis.on('scroll', (e) => {});
  lenis.on('scroll', scrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing();

  return lenis;
}

* */
