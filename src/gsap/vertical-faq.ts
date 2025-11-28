//v-tab--wrap
export const verticalFaq = function (gsap) {
  function isMobile() {
    return window.innerWidth < 768; // Example breakpoint, adjust as necessary
  }

  const checkActive = function (el): boolean {
    return el.classList.contains('active');
  };

  const ease = 'power2.out';

  const all_v_tab = document.querySelectorAll('[v-tab--wrap]');

  playTabAnimation(all_v_tab[0]);
  all_v_tab[0].classList.add('active');

  all_v_tab.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      all_v_tab.forEach((el) => {
        if (el !== tab) {
          reverseTabAniamtion(el);
          el.classList.remove('active');
        }
      });
      const activeEl = checkActive(tab);

      if (activeEl) {
        return;
      }
      playTabAnimation(tab);
      tab.classList.add('active');
    });
  });

  function playTabAnimation(el) {
    const widthEl = el.querySelector('.pop-detailss');
    const slideEl = el.querySelectorAll('[pop-slide]');
    const tabTitl = el.querySelector('.v-pop-title--wrap');

    gsap.set(slideEl, { yPercent: 10, autoAlpha: 0 });
    //gsap.set(slideEl, { display: 'none' });

    const tbtl = gsap.timeline({ ease });

    tbtl
      .to(el, { flexBasis: isMobile() ? '38rem' : '70%', duration: 0.5, ease })
      .to(
        tabTitl,
        {
          borderWidth: 0,
          width: function () {
            if (isMobile()) {
              return 'auto';
            }
            return 0;
          },
          height: function () {
            if (isMobile()) {
              return 0;
            }
            return 'auto';
          },
          duration: 0.5,
          ease,
        },
        '<'
      )
      .to(slideEl, { yPercent: 0, autoAlpha: 1, duration: 1, stagger: 0.1, ease }, 0);
  }

  function reverseTabAniamtion(el) {
    const widthEl = el.querySelector('.pop-detailss');
    const slideEl = el.querySelectorAll('[pop-slide]');
    const tabTitl = el.querySelector('.v-pop-title--wrap');

    const tbtl = gsap.timeline({ ease });

    tbtl
      .to(el, { flexBasis: isMobile() ? '5rem' : '8.5rem', duration: 0 })
      .to(
        tabTitl,
        {
          borderWidth: 4,
          width: function () {
            if (isMobile()) {
              return 'auto';
            }
            return '8.5rem';
          },
          height: function () {
            if (isMobile()) {
              return '5rem';
            }
            return 'auto';
          },
          duration: 0,
        },
        '<'
      )
      .to(slideEl, { yPercent: 20, autoAlpha: 0, duration: 0 }, '<');
  }
};

//.to(tabTitl, { borderWidth: 4, width: '8.5rem', duration: 0 }, '<')
