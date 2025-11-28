import { gsap } from 'gsap';

import { lenis } from './gsap/smoothScroll';

export const nav = function () {
  const body = document.querySelector('body') as HTMLElement;

  const navIn = function (navListEl: HTMLElement) {
    const parent = navListEl.parentElement;
    parent?.classList.add('is-open');

    //disable scroll
    body.style.overflow = 'hidden';

    // el.style.display = `block`;
    navListEl.classList.add('is-open');
    gsap.to(navListEl, { height: '100svh', duration: 0.3, ease: 'power2.out' });
  };

  const navOut = function (navListEl: HTMLElement) {
    const parent = navListEl.parentElement;
    parent?.classList.remove('is-open');

    //enable scroll
    body.style.overflow = 'visible';
    // lenis.start();

    // el.style.height = `0px`;
    gsap.to(navListEl, { height: '0', duration: 0.3, ease: 'power2.out' });

    setTimeout(() => {
      navListEl.classList.remove('is-open');
      //  el.style.display = `none`;
    }, 150);
  };

  const screenSize = window.innerWidth;

  if (screenSize < 767) {
    //navigation show and hide
    // const mobileNavWrap = document.querySelector('[mb-nv--list]') as HTMLElement;
    const navBtn = document.querySelector('[nav-btntoggle="mb-nav"]') as HTMLElement;
    const allLinks = document.querySelectorAll('[btn="mb-link"]');
    const navList = document.querySelector('[mb-nvlist]') as HTMLElement;

    navBtn?.addEventListener('click', function () {
      if (navList.classList.contains('is-open')) {
        navOut(navList);
      } else navIn(navList);
    });

    allLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navList.classList.contains('is-open')) {
          navOut(navList);
        }
      });
    });
  }
};
