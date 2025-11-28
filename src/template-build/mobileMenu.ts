document.addEventListener('DOMContentLoaded', () => {
  const isMobile = () => window.innerWidth <= 768;

  if (isMobile()) {
    const mbButton = document.querySelector('[mobile-menu-button]');
    const navWrapper = document.querySelector('.nav') as HTMLElement;
    const bodyEl = document.querySelector('body') as HTMLElement;
    const mbListItemWrap = document.querySelector('#mb-nav-list') as HTMLElement;

    gsap.set(mbListItemWrap, { display: 'none', height: 0 });

    function openMobileMenu() {
      gsap.set(mbListItemWrap, { display: 'block' });
      gsap.to(mbListItemWrap, {
        height: 'auto',
        duration: 0.35,
      });
      navWrapper.classList.add('mb-open');
      lenis.stop();
    }

    function closeMobileMenu() {
      gsap.to(mbListItemWrap, {
        height: '0',
        duration: 0.35,
      });
      gsap.set(mbListItemWrap, { display: 'none' });
      navWrapper.classList.remove('mb-open');
      lenis.start();
    }
    //check active class on a menu
    const checkActive = (el: HTMLElement) => el.classList.contains('mb-open');

    mbButton?.addEventListener('click', function () {
      if (!checkActive(navWrapper)) {
        openMobileMenu();
      } else {
        closeMobileMenu();
      }
    });
  }
});
