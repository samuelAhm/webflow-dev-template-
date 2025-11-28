window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('playbook loval');

  gsap.registerPlugin(ScrollTrigger);

  function isMobile() {
    return window.innerWidth < 479;
  }

  const customTab1 = document.querySelector('[custom-tab1]');
  const customTab2 = document.querySelector('[custom_tab2]');

  const tabFunction = function (tabCompWrap) {
    const tabs = [...tabCompWrap.querySelectorAll('[tab-panel]')];
    const tabsContent = [...tabCompWrap.querySelectorAll('[tab-content]')];

    ///mb
    const tabWrap = tabCompWrap?.querySelector('[tab-menuwrap]');
    const textValue = tabCompWrap?.querySelector('[tab-text]');

    tabs.forEach((activeTab, i) => {
      activeTab.addEventListener('click', () => {
        ///add active class to clicked tab
        const restTab = tabs.filter((tab) => tab !== activeTab);
        restTab.forEach((a) => {
          a.classList.remove('tab-active');
        });
        activeTab.classList.add('tab-active');

        tabsContent.forEach((content) => {
          content.classList.remove('tab-active');
        });

        //get tab attribute
        const activeTabAtt = activeTab.getAttribute('tab-panel');
        const matchContent = tabsContent.find(
          (content) => content.getAttribute('tab-content') === activeTabAtt
        );

        const tabTl = gsap.timeline();

        if (matchContent) {
          matchContent.classList.add('tab-active');

          tabTl.to(tabsContent, { opacity: 0, duration: 0 });
          tabTl.to(matchContent, { opacity: 1, duration: 0, ease: 'expo.out' });
        }

        ///check if click happen on mobile
        if (isMobile()) {
          console.log('mobile click');
          if (tabWrap.classList.contains('mb-show')) {
            //get the text el
            const tabText = activeTab.querySelector('div')?.textContent;
            textValue.textContent = tabText;
            tabWrap?.classList.remove('mb-show');
          }
        }
      });
    });

    if (isMobile()) {
      const mbTabTrigger = tabCompWrap?.querySelector('[mb-tabTrigger]');
      //check mb-show class
      const checkActive = function (el) {
        return el.classList.contains('mb-show');
      };
      mbTabTrigger?.addEventListener('click', () => {
        !checkActive(tabWrap)
          ? tabWrap?.classList.add('mb-show')
          : tabWrap?.classList.remove('mb-show');
      });
    }
    //get the index of the activeTab
    const indexofActive = tabs.findIndex((tab) => tab.classList.contains('tab-active'));
    tabs[indexofActive].click();
  };

  tabFunction(customTab1);
  tabFunction(customTab2);

  // const langTrigger = document.querySelector('.lang-port--section');
  // const mbTrigger = document.querySelector('[mobile-trigger]');
  // const scrollTrack = document.querySelector('[scroll-track]');
  // const langWrapper = document.querySelector('[lang-wrap]');

  // const allSlides = gsap.utils.toArray('[slide-el]');
  // console.log(allSlides.length);

  // gsap.set(scrollTrack, { width: '0%' });

  // function isMobile() {
  //   return window.innerWidth < 479;
  // }

  // const slideLanTl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: isMobile() ? langTrigger : langTrigger,
  //     scrub: 1,
  //     start: 'top, top',
  //     onUpdate: (e) => {
  //       //convert progress to percent
  //       const percentValue = e.progress * 100;
  //       console.log(percentValue);
  //       scrollTrack.style.width = `${percentValue}%`;
  //     },
  //     end: `=+5000`,
  //     //  markers: true,
  //     pin: true,
  //   },
  // });

  // slideLanTl.to(langWrapper, {
  //   xPercent: isMobile() ? -100 * (allSlides.length + 2.5) : -100 * (allSlides.length - 2.5),
  //   ease: 'none',
  // });
});
