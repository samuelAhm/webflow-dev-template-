import { gsap } from 'gsap';

import { lenis } from './gsap/smoothScroll';

//body element

export const nav = function () {
  const body = document.querySelector('body') as HTMLElement;

  const navIn = function (el: HTMLElement) {
    const parent = el.parentElement;
    parent?.classList.add('is-open');

    //disable scroll
    lenis.stop();

    // el.style.display = `block`;
    el.classList.add('is-open');
    gsap.to(el, { height: 'auto', duration: 0.3, ease: 'power2.out' });
    // setTimeout(() => {
    //   el.style.height = `auto`;
    // }, 150);
  };

  const navOut = function (el) {
    const parent = el.parentElement;
    parent?.classList.remove('is-open');

    //enable scroll
    lenis.start();

    // el.style.height = `0px`;
    gsap.to(el, { height: '0px', duration: 0.3, ease: 'power2.out' });

    setTimeout(() => {
      el.classList.remove('is-open');
      //  el.style.display = `none`;
    }, 150);
  };

  const screenSize = window.innerWidth;

  if (screenSize < 767) {
    //navigation show and hide
    const mobileNavWrap = document.querySelector('[mb-nv--list]') as HTMLElement;
    const navBtn = document.querySelector('[nav-btntoggle="mb-nav"]') as HTMLElement;
    const allLinks = document.querySelectorAll('[btn="mb-link"]');
    console.log(allLinks);

    navBtn?.addEventListener('click', function () {
      if (mobileNavWrap.classList.contains('is-open')) {
        navOut(mobileNavWrap);
      } else navIn(mobileNavWrap);
    });

    allLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (mobileNavWrap.classList.contains('is-open')) {
          navOut(mobileNavWrap);
        }
      });
    });
  }
};
