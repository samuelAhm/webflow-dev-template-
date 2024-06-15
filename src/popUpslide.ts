window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(Draggable);

  function isMobile() {
    return window.innerWidth < 479;
  }
  //const bodyEl = document.querySelector('body') as HTMLElement;

  //Rnge Element Hotel elements
  const rangeNobHtel = document.querySelector('[range-nob-hotel]');
  const containerHtel = document.querySelector('[hotel-range-container]');
  const bgValue1 = document.querySelector('.bg-value');
  //close btn
  const closeHtel = document.querySelector('.close-slid');
  //wrapper
  const hotelOpeningSect = document.getElementById('hotelOpening') as HTMLElement;

  const hotelCards = [...document.querySelectorAll('[hotel-card]')];

  //////change Req elements
  ///range elements
  const reqnob = document.querySelector('[req-nob]') as HTMLElement;
  const reqRangeContainer = document.querySelector('[req-range-container]') as HTMLElement;
  const reqRangeBg = document.querySelector('[req-range-bg]') as HTMLElement;

  // req pop Wrapper
  const changeReqSect = document.getElementById('changeRes') as HTMLElement;

  //req cards
  const allReqCards = [...document.querySelectorAll('[req-cards]')];
  const reqCardWrapper = document.querySelector('[req-slide-wrap]') as HTMLElement;

  //req close btn
  const changeReqClose = document.querySelector('[changeReq-close]') as HTMLElement;

  //req cta
  const changeReqBtn = document.querySelector('[request-cta]') as HTMLElement;

  const maxValue = 100;
  //let maxValue: number;

  const hotelBtn = document.querySelector('[hotel-cta]');
  const htelSlideItemWrap = document.querySelector('[hotel-slidewrap]') as HTMLElement;
  //  const htolTrack = document.querySelector('[htel-track]') as HTMLElement;

  //open close function
  const popOpenCloseFunction = function (openBtn, closeBtn, wrapper) {
    openBtn?.addEventListener('click', (e) => {
      wrapper.style.display = `flex`;
      lenis.stop();
    });

    closeBtn?.addEventListener('click', (e) => {
      wrapper.style.display = `none`;
      lenis.start();
    });
  };

  popOpenCloseFunction(hotelBtn, closeHtel, hotelOpeningSect);
  popOpenCloseFunction(changeReqBtn, changeReqClose, changeReqSect);

  //const hotelSlideTl = gsap.timeline();

  //initialize gsap draggable
  const draggable = Draggable.create(rangeNobHtel, {
    type: 'x',
    bounds: containerHtel,
    onDrag: function (e) {
      // Calculate the value from 1 to 100
      const value = Math.round((this.x / containerHtel.offsetWidth) * (maxValue - 1)) + 1;

      const widthPercent = isMobile() ? (value / maxValue) * 100 - 8 : (value / maxValue) * 100;

      // Animate the hotel cards wrapper based on the calculated percentage
      gsap.to(htelSlideItemWrap, {
        xPercent: isMobile()
          ? -widthPercent * (hotelCards.length + 2)
          : -widthPercent * (hotelCards.length - 6),
      });

      // Set the background width based on the percentage
      gsap.set(bgValue1, {
        width: isMobile() ? `${widthPercent + 8}%` : `${widthPercent}%`,
      });
    },
  });

  function initializeDraggableSlider(
    rangeNob: HTMLElement,
    container: HTMLElement,
    htelSlideItemWrap: HTMLElement,
    bgValue1: HTMLElement,
    maxValue: number,
    hotelCards: any,
    widthAdjvalueMb: number,
    widthAdjvaluedesk: number
  ) {
    // Check if the device is mobile
    function isMobile() {
      return window.innerWidth <= 768; // Adjust this value based on your responsive design
    }

    // Draggable setup
    Draggable.create(rangeNob, {
      type: 'x',
      bounds: container,
      onDrag: function (e) {
        // Calculate the value from 1 to 100
        const value = Math.round((this.x / container.offsetWidth) * (maxValue - 1)) + 1;

        const widthPercent = isMobile() ? (value / maxValue) * 100 - 8 : (value / maxValue) * 100;

        // Animate the hotel cards wrapper based on the calculated percentage
        gsap.to(htelSlideItemWrap, {
          xPercent: isMobile()
            ? -widthPercent * (hotelCards.length + widthAdjvalueMb)
            : -widthPercent * (hotelCards.length - widthAdjvaluedesk),
        });

        // Set the background width based on the percentage
        gsap.set(bgValue1, {
          width: isMobile() ? `${widthPercent + 8}%` : `${widthPercent}%`,
        });
      },
    });
  }

  initializeDraggableSlider(
    reqnob,
    reqRangeContainer,
    reqCardWrapper,
    reqRangeBg,
    100,
    allReqCards,
    1.3,
    5
  );
});
