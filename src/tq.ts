window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('techloq');

  const dropAnimationIn = function (el: HTMLElement, displayType: string) {
    el.classList.add('active-drop');
  };

  const dropAnimationOut = function (el: HTMLElement, displayType: string) {
    el.classList.remove('active-drop');
  };

  const allDropMenu = [...document.querySelectorAll('[tq-drop]')];

  allDropMenu.forEach((drop, i) => {
    drop.addEventListener('mouseenter', (e) => {
      drop.style.zIndex = `100`;
      dropAnimationIn(drop, 'block');
    });

    drop.addEventListener('mouseleave', () => {
      drop.style.zIndex = `10`;
      dropAnimationOut(drop, 'none');
    });
  });

  const slideIn = function (el) {
    el.style.display = `block`;
    setTimeout(() => {
      el.style.transform = `translate3d(0, 0% ,0)`;
    }, 200);
  };

  const slideOut = function (el) {
    el.style.transform = `translate3d(0, -120%, 0)`;

    setTimeout(() => {
      el.style.display = `none`;
    }, 200);
  };

  const stickyNav = document.querySelector('[tq-stickynav]');
  const navEl = document.querySelector('.nav_section-wrap') as HTMLElement;

  const optionsHover = {
    root: null, // observing changes to viewport
    rootMargin: '0px',
    threshold: 0.7, // Callback is executed when 70% of the observed element is visible
  };

  const optionsSLide = {
    root: null, // observing changes to viewport
    rootMargin: '0px',
    threshold: 0.3, // Callback is executed when 10% of the observed element is visible
  };

  const HoverRemove = function (entries, observer) {
    entries.forEach(({ isIntersecting }) => {
      if (!isIntersecting) {
        allDropMenu.forEach((drop) => {
          if (drop.classList.contains('active-drop')) {
            drop.classList.remove('active-drop');
          }
        });
      }
    });
  };

  const stickyNavIn = function (entries, observer) {
    entries.forEach(({ isIntersecting }) => {
      if (!isIntersecting) {
        slideIn(stickyNav);
      } else {
        slideOut(stickyNav);
      }
    });
  };
  const navOberver = new IntersectionObserver(stickyNavIn, optionsSLide);
  const hoverObserver = new IntersectionObserver(HoverRemove, optionsHover);

  hoverObserver.observe(navEl);
  navOberver.observe(navEl);

  // allDropMenu.forEach((drop, i) => {
  //   drop.addEventListener('mouseout', (e) => {
  //     const dropWrap = drop.querySelector('[nav-dropwrap]') as HTMLElement;
  //     dropAnimationOut(dropWrap, 'none');
  //   });
  // });

  // const slideIn = function (el) {
  //   el.style.display = `block`;
  //   setTimeout(() => {
  //     el.style.transform = `translate3d(0, 0% ,0)`;
  //   }, 200);
  // };

  // const slideOut = function (el) {
  //   el.style.transform = `translate3d(0, -120%, 0)`;

  //   setTimeout(() => {
  //     el.style.display = `none`;
  //   }, 200);
  // };

  // const stickyNav = document.querySelector('[tq-stickynav]') as HTMLElement;
  // const navEl = document.querySelector('.nav_section-wrap') as HTMLElement;

  // const options = {
  //   root: null, // observing changes to viewport
  //   rootMargin: '0px',
  //   threshold: 0.1, // Callback is executed when 10% of the observed element is visible
  // };
  // const stickyNavIn = function (entries, observer) {
  //   entries.forEach(({ isIntersecting }) => {
  //     if (!isIntersecting) {
  //       console.log('e no enter');
  //       slideIn(stickyNav);
  //     } else {
  //       console.log('e enter');
  //       slideOut(stickyNav);
  //     }
  //   });
  // };
  // const navOberver = new IntersectionObserver(stickyNavIn, options);
  // navOberver.observe(navEl);
});
