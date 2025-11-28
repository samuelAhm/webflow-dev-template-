// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

document.addEventListener('DOMContentLoaded', () => {
  // gsap.registerPlugin(ScrollTrigger);

  const RATIO_AMOUNT = 0.8;

  //html element
  const pageWrapper = document.querySelector('.page-wrapper');
  const heroSection = document.querySelector('[hero--section]');
  const logoIcon = document.querySelector('[logo-icon]');
  const navPadding = document.querySelector('[nav-padding]');

  const heroHome = document.getElementById('homeHero');
  const navBg = document.querySelector('[bg="transparent"]');

  //intersection obersever
  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio <= RATIO_AMOUNT) {
          navBg?.classList.add('nav--active');
        } else {
          navBg?.classList.remove('nav--active');
        }
      });
    },
    {
      threshold: RATIO_AMOUNT,
    }
  );

  if (heroHome) {
    heroObserver.observe(heroHome);
  }

  const navTl = gsap.timeline({
    scrollTrigger: {
      trigger: pageWrapper,
      start: 'top top',
      end: '10%',
      scrub: true,
    },
  });

  navTl
    .to(logoIcon, {
      duration: 2,
      scale: 0.7,
    })
    .to(
      navPadding,
      {
        duration: 2,
        padding: '1.25rem',
        fontSize: '0.875rem',
      },
      0
    );
});
