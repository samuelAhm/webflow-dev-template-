import 'lenis/dist/lenis.css';

import Lenis from 'lenis';

export const lenis = new Lenis();

// export function lenisScroll(scrollTrigger: any, gsap: any) {
//   lenis.on('scroll', (e) => {});

//   lenis.on('scroll', scrollTrigger.update);

//   gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
//   });

//   gsap.ticker.lagSmoothing();
// }

export function lenisScroll(scrollTrigger: any, gsap: any) {
  const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.95,
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
