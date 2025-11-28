import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenisScroll } from 'src/gsap/smoothScroll';

function isMobile(): boolean {
  return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
}

function isTablet(): boolean {
  return window.innerWidth <= 991; // Example breakpoint, adjust as necessary
}

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const lenisInstance = lenisScroll(ScrollTrigger, gsap);

  //html element
  const pageWrapper = document.querySelector('.page-wrapper');
  const logoIcon = document.querySelector('[logo-icon]');
  const navPadding = document.querySelector('[nav-padding]');

  const body = document.querySelector('body') as HTMLElement;

  //mobile html elements
  const allMobileMegaMenu = [...document.querySelectorAll('[mb-mega]')] as HTMLElement[];
  const megaMenuTriggers = [...document.querySelectorAll('[mega-menu]')] as HTMLButtonElement[];
  const backButton = document.querySelector('[btn="menu-back-btn"]') as HTMLButtonElement;

  const mb_menu_btn = document.querySelector('[btn="mobile-menu"]') as HTMLButtonElement;
  const mobileMenu = document.querySelector('[mb-mobile-menu]') as HTMLElement;

  const checkOpen = function () {
    return mobileMenu.classList.contains('is-open');
  };

  if (!isTablet()) {
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
        scale: 0.6,
      })
      .to(
        navPadding,
        {
          duration: 2,
          padding: '0.5rem',
          // fontSize: '0.875rem',
        },
        0
      );
  }

  if (isTablet()) {
    mb_menu_btn.addEventListener('click', function () {
      //check if menu is open
      if (!checkOpen()) {
        mobileMenu.classList.add('is-open');
        gsap.set(mobileMenu, { height: 0, display: 'block' });
        gsap.to(mobileMenu, { duration: 0.25, height: '100dvh' });
        this.classList.add('is-active');
        lenisInstance.stop();
      } else {
        mobileMenu.classList.remove('is-open');
        gsap.to(mobileMenu, { duration: 0.25, height: '0' });
        this.classList.remove('is-active');
        backButton.style.display = 'none';
        allMobileMegaMenu.forEach((menu) => {
          menu.classList.remove('is-shown');
        });
        lenisInstance.start();
      }
    });

    megaMenuTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        //get the clicked trigger attribute
        const triggerAttr = trigger.getAttribute('mega-menu');
        const [activeMenu] = allMobileMegaMenu.filter(
          (menu) => menu.getAttribute('mb-mega') === triggerAttr
        );
        //on the activeMenu add is_shown class
        activeMenu.classList.add('is-shown');
        //show the back button
        backButton.style.display = 'flex';
      });
    });

    //back button
    backButton.addEventListener('click', () => {
      //hide the back button
      backButton.style.display = 'none';
      //hide the active menu
      allMobileMegaMenu.forEach((menu) => {
        menu.classList.remove('is-shown');
      });
    });
  }
});
