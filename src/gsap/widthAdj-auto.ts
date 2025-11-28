//roi-section
export const width_adj_autoScroll = function (gsap: any, isMobile: () => boolean) {
  const sectTrigger = document.getElementById('roi-section') as HTMLElement;
  // const allTabs = [...document.querySelectorAll('[v-tab--wrap]')] as HTMLElement[];

  const tabArr = gsap.utils.toArray('[v-tab--wrap]');
  // const otherTabs = gsap.utils.toArray('[other-tab]');

  const isTablet = () => {
    const tabletRange = 768;
    return window.innerWidth <= tabletRange;
  };
  const isDesktop = () => {
    const desktopRange = 768;
    return window.innerWidth >= desktopRange;
  };
  ///run animtion on scroll from tablet to desktop
  if (isDesktop()) {
    const firstTbActive = tabArr[0];
    const seconTabActive = tabArr[1];
    const thirdTabActive = tabArr[2];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectTrigger,
        start: 'top, 8%',
        // markers: true,
        scrub: true,
        pin: true,
      },
    });

    tl.to(firstTbActive.querySelector('.v-pop-title--wrap'), {
      width: isTablet() ? '5.5rem' : '8.5rem',
    })
      .to(
        firstTbActive.querySelector('.pop-detailss'),
        {
          width: '0rem',
        },
        '<'
      )
      .fromTo(
        seconTabActive.querySelector('.v-pop-title--wrap'),
        { width: isTablet() ? '5.5rem' : '8.5rem' },
        { width: '0rem', stagger: 0.2 },
        '<'
      )
      .fromTo(
        seconTabActive.querySelector('.pop-detailss'),
        { width: '0rem' },
        { width: '42rem', stagger: 0.2 },
        '<'
      )
      .fromTo(
        thirdTabActive.querySelector('.v-pop-title--wrap'),
        { width: isTablet() ? '5.5rem' : '8.5rem' },
        { width: '0rem' },
        '.5'
      )
      .fromTo(
        thirdTabActive.querySelector('.pop-detailss'),
        { width: '0rem' },
        { width: '42rem' },
        '.5'
      )
      .to(
        seconTabActive.querySelector('.v-pop-title--wrap'),
        {
          width: isTablet() ? '5.5rem' : '8.5rem',
        },
        '<'
      )
      .to(
        seconTabActive.querySelector('.pop-detailss'),
        {
          width: '0rem',
        },
        '<'
      );
  } else {
    const mbTabs = gsap.utils.toArray('[v-tab--mb]');
    //get the width of the first tab
    const firstTabWidth = mbTabs[0].offsetWidth;

    function isMobile() {
      const mobileRange = 479;
      return window.innerWidth <= mobileRange;
    }

    //multiply the width of the first tab by the number of tabs

    const xLengthMbPortrait = firstTabWidth * (mbTabs.length - 1);
    const xLengthMb = firstTabWidth * (mbTabs.length - 0.9);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectTrigger,
        start: 'top, 6%',
        // markers: true,
        scrub: true,
        pin: true,
      },
    });

    tl.to(mbTabs, { x: isMobile() ? -xLengthMb : -xLengthMbPortrait, ease: 'none' });
  }
};
