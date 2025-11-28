import { gsap } from 'gsap';

const ELASTIC_EASE = 'elastic.out(1, 0.9)';

document.addEventListener('DOMContentLoaded', () => {
  function nav_Menu_Animation() {
    const nav = document.querySelector('#navlist-Wrap') as HTMLElement;
    const navItems = gsap.utils.toArray('[nav-list]') as HTMLElement[];
    const nav_btn = document.querySelector('[nav-btn]') as HTMLElement;

    const navTl = gsap.timeline({
      paused: true,
      yoyo: true,
      onComplete: () => {
        console.log('complete');
      },
      onReverseComplete: () => {
        nav_btn.classList.remove('is-open');
        nav.classList.remove('is-open');
      },
    });

    // Function to check if an element has the active class
    const checkActive = (el: HTMLElement) => el.classList.contains('is-open');

    navTl.from(nav, { opacity: 0, duration: 0.3 }).from(
      navItems,
      {
        yPercent: 100,
        opacity: 0,
        duration: 0.75,
        stagger: 0.2,
        ease: ELASTIC_EASE,
      },
      0.2
    );

    nav_btn.addEventListener('click', function () {
      if (!checkActive(this)) {
        gsap.set(nav, { display: 'block', opacity: 1 });
        navTl.play();
        this.classList.add('is-open');
        nav.classList.add('is-open');
      } else {
        navTl.reverse();
      }
    });
  }

  nav_Menu_Animation();
});
