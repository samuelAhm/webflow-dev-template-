window.Webflow ||= [];
window.Webflow.push(() => {
  // gsap.registerPlugin(Draggable);

  function isMobile() {
    return window.innerWidth < 479;
  }

  //slide 1

  const duration = 0.3;

  const ppWrapper = document.querySelector('[pp-pop]');
  const ppMain = document.querySelector('[pp-slide-main]');
  const ppSlide = document.querySelector('[pp-slide]');
  const ppCloseBtn = document.querySelector('[pp-close]');

  //slide 2
  const bcWrapper = document.querySelector('[bc-pop]');
  const bcMain = document.querySelector('[bc-main]');
  const bcSlide = document.querySelector('[bc-slide]');
  const bcCloseBtn = document.querySelector('[bc-close]');
  console.log(bcSlide);

  //Pop Trigger
  const ppTrigger = document.querySelector('[pp-cta]');
  const bcTrigger = document.querySelector('[bc-cta]');

  const setDefaultState = function (slideWrap, mainSlide, slideItems) {
    gsap.set(slideWrap, { display: 'none', opacity: 0 });
    gsap.set(mainSlide, { visibility: 'hidden' });
    gsap.set(slideItems, { visibility: 'hidden' });
  };

  setDefaultState(ppWrapper, ppMain, ppSlide);
  setDefaultState(bcWrapper, bcMain, bcSlide);

  ///asnimation
  const ppTL = gsap.timeline({ paused: true, ease: 'elastic.out(1,0.3)' });
  const bcTl = gsap.timeline({ paused: true });

  ppTL
    .set(ppWrapper, { display: 'flex', opacity: 1 })
    .from(ppMain, { yPercent: -50, autoAlpha: 0, duration })
    .from(ppSlide, { yPercent: 50, autoAlpha: 0, duration }, '<');

  bcTl
    .set(bcWrapper, { display: 'flex', opacity: 1 })
    .from(bcMain, { yPercent: -50, autoAlpha: 0, duration })
    .from(bcSlide, { yPercent: 50, autoAlpha: 0, duration }, '<');

  const openCloseFunction = function (btnTrigger, tl, closeBtn) {
    btnTrigger.addEventListener('click', () => {
      tl.play();
    });

    closeBtn.addEventListener('click', () => {
      tl.reverse();
      console.log('click');
    });
  };

  openCloseFunction(ppTrigger, ppTL, ppCloseBtn);
  openCloseFunction(bcTrigger, bcTl, bcCloseBtn);

  //const bodyEl = document.querySelector('body') as HTMLElement;

  // //Rnge Element Hotel elements
  // const rangeNobHtel = document.querySelector('[range-nob-hotel]');
  // const containerHtel = document.querySelector('[hotel-range-container]');
  // const bgValue1 = document.querySelector('.bg-value');
  // //close btn
  // const closeHtel = document.querySelector('.close-slid');
  // //wrapper
  // const hotelOpeningSect = document.getElementById('hotelOpening') as HTMLElement;

  // const hotelCards = [...document.querySelectorAll('[hotel-card]')];

  // //////change Req elements
  // ///range elements
  // const reqnob = document.querySelector('[req-nob]') as HTMLElement;
  // const reqRangeContainer = document.querySelector('[req-range-container]') as HTMLElement;
  // const reqRangeBg = document.querySelector('[req-range-bg]') as HTMLElement;

  // // req pop Wrapper
  // const changeReqSect = document.getElementById('changeRes') as HTMLElement;

  // //req cards
  // const allReqCards = [...document.querySelectorAll('[req-cards]')];
  // const reqCardWrapper = document.querySelector('[req-slide-wrap]') as HTMLElement;

  // //req close btn
  // const changeReqClose = document.querySelector('[changeReq-close]') as HTMLElement;

  // //req cta
  // const changeReqBtn = document.querySelector('[request-cta]') as HTMLElement;

  // const maxValue = 100;
  // //let maxValue: number;

  // const hotelBtn = document.querySelector('[hotel-cta]');
  // const htelSlideItemWrap = document.querySelector('[hotel-slidewrap]') as HTMLElement;
  // //  const htolTrack = document.querySelector('[htel-track]') as HTMLElement;

  // //open close function
  // const popOpenCloseFunction = function (openBtn, closeBtn, wrapper) {
  //   openBtn?.addEventListener('click', (e) => {
  //     wrapper.style.display = `flex`;
  //     lenis.stop();
  //   });

  //   closeBtn?.addEventListener('click', (e) => {
  //     wrapper.style.display = `none`;
  //     lenis.start();
  //   });
  // };

  // popOpenCloseFunction(hotelBtn, closeHtel, hotelOpeningSect);
  // popOpenCloseFunction(changeReqBtn, changeReqClose, changeReqSect);

  // //const hotelSlideTl = gsap.timeline();

  // //initialize gsap draggable
  // const draggable = Draggable.create(rangeNobHtel, {
  //   type: 'x',
  //   bounds: containerHtel,
  //   onDrag: function (e) {
  //     // Calculate the value from 1 to 100
  //     const value = Math.round((this.x / containerHtel.offsetWidth) * (maxValue - 1)) + 1;

  //     const widthPercent = isMobile() ? (value / maxValue) * 100 - 8 : (value / maxValue) * 100;

  //     // Animate the hotel cards wrapper based on the calculated percentage
  //     gsap.to(htelSlideItemWrap, {
  //       xPercent: isMobile()
  //         ? -widthPercent * (hotelCards.length + 2)
  //         : -widthPercent * (hotelCards.length - 6),
  //     });

  //     // Set the background width based on the percentage
  //     gsap.set(bgValue1, {
  //       width: isMobile() ? `${widthPercent + 8}%` : `${widthPercent}%`,
  //     });
  //   },
  // });

  // function initializeDraggableSlider(
  //   rangeNob: HTMLElement,
  //   container: HTMLElement,
  //   htelSlideItemWrap: HTMLElement,
  //   bgValue1: HTMLElement,
  //   maxValue: number,
  //   hotelCards: any,
  //   widthAdjvalueMb: number,
  //   widthAdjvaluedesk: number
  // ) {
  //   // Check if the device is mobile
  //   function isMobile() {
  //     return window.innerWidth <= 768; // Adjust this value based on your responsive design
  //   }

  //   // Draggable setup
  //   Draggable.create(rangeNob, {
  //     type: 'x',
  //     bounds: container,
  //     onDrag: function (e) {
  //       // Calculate the value from 1 to 100
  //       const value = Math.round((this.x / container.offsetWidth) * (maxValue - 1)) + 1;

  //       const widthPercent = isMobile() ? (value / maxValue) * 100 - 8 : (value / maxValue) * 100;

  //       // Animate the hotel cards wrapper based on the calculated percentage
  //       gsap.to(htelSlideItemWrap, {
  //         xPercent: isMobile()
  //           ? -widthPercent * (hotelCards.length + widthAdjvalueMb)
  //           : -widthPercent * (hotelCards.length - widthAdjvaluedesk),
  //       });

  //       // Set the background width based on the percentage
  //       gsap.set(bgValue1, {
  //         width: isMobile() ? `${widthPercent + 8}%` : `${widthPercent}%`,
  //       });
  //     },
  //   });
  // }

  // initializeDraggableSlider(
  //   reqnob,
  //   reqRangeContainer,
  //   reqCardWrapper,
  //   reqRangeBg,
  //   100,
  //   allReqCards,
  //   1.3,
  //   5
  // );

  // const hotelCards = [...document.querySelectorAll('.hotel-card')];

  // console.log(hotelCards[0].offsetWidth);

  // const hotelSlideTl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: isMobile() ? hotelOpeningSect : hotelOpeningSect,
  //     scrub: 1,
  //     start: 'top, top',
  //     end: () => `+=10000`,
  //     onUpdate: (e) => {
  //       //convert progress to percent
  //       const percentValue = e.progress * 100;
  //       console.log(percentValue);

  //       htolTrack.style.width = `${percentValue + 11}%`;
  //     },
  //     markers: true,
  //     pin: true,
  //     pinSpacing: true,
  //     invalideOnRefresh: true,
  //   },
  // });
  // hotelSlideTl.to(htelSlideItemWrap, {
  //   xPercent: isMobile() ? -117 * hotelCards.length : -300,
  //   ease: 'none',
  // });

  // xPercent: isMobile() ? -117 * hotelCards.length : -100 * (hotelCards.length - 1),
  // const tabSticky = document.querySelectorAll('.stick-tb-item');
  // const imgWrap = document.querySelectorAll('.img-wrap');
  // function showImage(i: number): void {
  //   imgWrap.forEach((imgW, e) => {
  //     if (i !== e) {
  //       imgW.classList.remove('active');
  //     }
  //   });
  //   const activeImgEl = imgWrap[i];
  //   activeImgEl.classList.add('active');
  // }
  // tabSticky.forEach((tab, i) => {
  //   tab.addEventListener('mouseenter', (e) => {
  //     tabSticky.forEach((e, x) => {
  //       if (i !== x) {
  //         e.classList.remove('active');
  //       }
  //     });
  //     tab.classList.add('active');
  //     const activeTab = i;
  //     showImage(activeTab);
  //   });
  // });
  //auto slider with gsap
  // // wait for DOM and scripts to load
  // window.addEventListener('load', () => {
  //   const slider = document.querySelector('.home-hero_slider-wrapper')

  //   const slides = document.querySelectorAll('.home-hero_slide')
  //   const totalTime = 60
  //   const modifier = window.innerWidth < 480 ? 1 : 1.3; // this controls the spacing between each image by making the "circle" smaller

  //   gsap.set(slider, { opacity: 0 })
  //   gsap.to(slider, { opacity: 1 })

  //   // timeline that controls the slides' rotation
  //   let tl = gsap
  //     .timeline({
  //       onReverseComplete: reverseRepeat,
  //     })
  //     .set(slides, {
  //       // apply transform rotations to each image
  //       rotateY: (i) => (i * -360) / slides.length,
  //       transformOrigin: '50% 50% ' + (slides.length / 2) * 100 * modifier + 'px',
  //       backfaceVisibility: 'hidden',
  //     })
  //     .to(slides, {
  //       rotationY: '-=' + 360,
  //       repeat: -1,
  //       duration: totalTime,
  //       ease: 'none',
  //     })

  //   // gsap stops repeating if you reverse a timeline, this is a workaround
  //   function reverseRepeat() {
  //     tl.time(tl.time() + totalTime * 100)
  //   }

  //   // on scroll, change direction of rotation accordingly
  //   gsap.to(slider, {
  //     scrollTrigger: {
  //       trigger: '.section.cc-home-hero',
  //       start: 'top top',
  //       end: 'bottom top',
  //       scrub: true,
  //     },
  //     onUpdate: function () {
  //       const direction = this.scrollTrigger.direction
  //       if (direction === -1) {
  //         tl.reverse()
  //       } else {
  //         tl.play()
  //       }
  //     },
  //   })
  // })

  // console.log('hel');
  // //slide 1
  // const slideMain = document.querySelector('[slide-main-1]') as HTMLElement;
  // const slideWrapper = document.querySelector('[pop-1]') as HTMLElement;
  // const slideItems = document.querySelectorAll('[slide-in-1]');
  // const closeBtn1 = document.querySelector('[close-pop-1]') as HTMLElement;
  // //slide 2
  // const slideMain2 = document.querySelector('[slide-main-2]') as HTMLElement;
  // const slideWrapper2 = document.querySelector('[pop-2]') as HTMLElement;
  // const slideItems2 = document.querySelectorAll('[slide-in-2]');
  // const closeBtn2 = document.querySelector('[close-pop-2]') as HTMLElement;
  // //slide 3
  // const slideMain3 = document.querySelector('[slide-main-3]') as HTMLElement;
  // const slideWrapper3 = document.querySelector('[pop-3]') as HTMLElement;
  // const slideItems3 = document.querySelectorAll('[slide-in-3]');
  // const closeBtn3 = document.querySelector('[close-btn-3]') as HTMLElement;
  // const pop1Trigger = document.querySelector('[pop-1-trigger]') as HTMLElement;
  // const pop2Trigger = document.querySelector('[pop-2-trigger]') as HTMLElement;
  // const pop3Trigger = document.querySelector('[pop-3-trigger]') as HTMLElement;
  // const setDefaultState = function (slideWrap, mainSlide, slideItems): void {
  //   gsap.set(slideWrap, { display: 'none', opacity: 0 });
  //   gsap.set(mainSlide, { opacity: 0 });
  //   gsap.set(slideItems, { visibility: 'hidden' });
  // };
  // setDefaultState(slideWrapper, slideMain, slideItems);
  // setDefaultState(slideWrapper2, slideMain2, slideItems2);
  // setDefaultState(slideWrapper3, slideMain3, slideItems3);
  // const popTl = gsap.timeline({ paused: true });
  // const popTl2 = gsap.timeline({ paused: true });
  // const popTl3 = gsap.timeline({ paused: true });
  // popTl
  //   .set(slideWrapper, { display: 'flex', opacity: 1 })
  //   .to(slideMain, { opacity: 1, duration: 1 })
  //   .from(slideItems, { xPercent: 100, stagger: 0.2, autoAlpha: 0 }, '<');
  // popTl2
  //   .set(slideWrapper2, { display: 'flex', opacity: 1 })
  //   .to(slideMain2, { opacity: 1, duration: 1 })
  //   .from(slideItems2, { xPercent: 100, stagger: 0.2, autoAlpha: 0 }, '<');
  // popTl3
  //   .set(slideWrapper3, { display: 'flex', opacity: 1 })
  //   .to(slideMain3, { opacity: 1, duration: 1 })
  //   .from(slideItems3, { xPercent: 100, stagger: 0.2, autoAlpha: 0 }, '<');
  // const openCloseFunction = function (btnTrigger, tl, closeBtn) {
  //   btnTrigger.addEventListener('click', () => {
  //     tl.play();
  //   });
  //   closeBtn.addEventListener('click', () => {
  //     tl.reverse();
  //     console.log('click');
  //   });
  // };
  // openCloseFunction(pop1Trigger, popTl, closeBtn1);
  // openCloseFunction(pop2Trigger, popTl2, closeBtn2);
  // openCloseFunction(pop3Trigger, popTl3, closeBtn3);
  // const allContentSlide = [...document.querySelectorAll('.content-tab-item')];
  // const contentSlideContent = new Swiper('#contentTabSlideDetails', {
  //   speed: 500,
  //   effect: 'fade',
  // });
  // const contentTabSlide = new Swiper('#contentTabSlide', {
  //   slidesPerView: 5.5,
  //   freeMode: true,
  //   navigation: {
  //     nextEl: '.next--btn',
  //     prevEl: '.prev--btn',
  //   },
  // });
  // allContentSlide.forEach((tab, i) => {
  //   tab.addEventListener('click', () => {
  //     const clickedTab = tab;
  //     allContentSlide.forEach((el) => {
  //       if (el !== clickedTab) el.classList.remove('active');
  //     });
  //     tab.classList.add('active');
  //     //get the index of the clicked slide
  //     const slideIndex = i;
  //     contentSlideContent.slideTo(i);
  //   });
  // });
  // allContentSlide[0].click();
  // contentTabSlide.update('enable');
  // const prevBtn = document.querySelector('.prev--btn') as HTMLButtonElement;
  // const nextBtn = document.querySelector('.next--btn') as HTMLButtonElement;
  // nextBtn.addEventListener('click', (e) => {
  //   //check the element with the active class
  //   const [activeEl] = allContentSlide.filter((el) => el.classList.contains('swiper-slide-active'));
  //   //get the next element
  //   const nextEl = activeEl.nextElementSibling;
  //   //get the index of the next el
  //   console.log(nextEl);
  //   //remove active class from other Element and adjust
  //   // allContentSlide.forEach((el) => el.classList.remove('swiper-slide-active'));
  //   // if (nextEl) {
  //   //   nextEl?.classList.add('swiper-slide-active');
  //   // }
  // });
  // function convertFormattedNumberToNumber(formattedNumber) {
  //   // Remove commas and convert the result to a number
  //   return parseFloat(formattedNumber.replace(/,/g, ''));
  // }
  // const numValue = document.querySelector('[num-count]');
  // //convert initial value removing the comma
  // const htmlValue = numValue?.textContent;
  // //convert the value to number removing the comma
  // const initialValue = convertFormattedNumberToNumber(htmlValue);
  // let value = initialValue;
  // // Function to increase the value by 1
  // function increaseValue() {
  //   value += 1;
  //   const formatedValue = value.toLocaleString();
  //   numValue.textContent = formatedValue;
  // }
  // // Set an interval to run the increaseValue function every 10 seconds
  // setInterval(increaseValue, 10000); // 10000 milliseconds = 10 seconds
  // console.log('playbook');
  // const darkMode = 'Dark';
  // const lightMode = 'Light';
  // let actualMode: string;
  // let onLightMode: boolean;
  // // Button toggle of classes
  // const toggleButton = document.querySelector('[mode-button]') as HTMLButtonElement;
  // const pageWrapper = document.querySelector('.page-wrapper') as HTMLElement;
  // const pageDocument = document.documentElement;
  // console.log(pageDocument);
  // toggleButton?.addEventListener('click', () => {
  //   toggleButton.classList.toggle('light');
  //   pageWrapper.classList.toggle('lightmode');
  //   pageDocument.classList.toggle('lightmode');
  //   onLightMode = toggleButton.classList.contains('light');
  //   console.log(onLightMode);
  //   actualMode = onLightMode ? lightMode : darkMode;
  //   localStorage.setItem('Mode', actualMode);
  // });
  // // Check OS mode default
  // function detectOsMode() {
  //   const preferredOsMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   return preferredOsMode ? darkMode : lightMode;
  // }
  // const setLightMode = () => {
  //   toggleButton.classList.add('light');
  //   pageWrapper.classList.add('lightmode');
  //   pageDocument.classList.add('lightmode');
  // };
  // // Function to apply dark mode
  // // const applyLightMode = () => {
  // //   document.documentElement.classList.add('lightmode');
  // // };
  // // const applyDarkMode = () => {
  // //   document.documentElement.classList.remove('lightmode');
  // // };
  // // Function to detect user OS and set it on page load
  // function setMode() {
  //   const storedMode = localStorage.getItem('Mode');
  //   const defaultOsMode = detectOsMode();
  //   actualMode = storedMode || defaultOsMode;
  //   onLightMode = actualMode === lightMode;
  //   if (actualMode === lightMode) {
  //     setLightMode();
  //   }
  // }
  // setMode();
  // const darkMode = 'Dark';
  // const lightMode = 'Light';
  // let actualMode: string;
  // let onLightMode: boolean;
  // //night mode code
  // //button toggle of classes
  // const toggleButton = document.querySelector('[mode-button]') as HTMLButtonElement;
  // const pageWrapper = document.querySelector('.page-wrapper') as HTMLElement;
  // toggleButton?.addEventListener('click', function () {
  //   this.classList.toggle('light');
  //   pageWrapper.classList.toggle('lightmode');
  //   if (!onLightMode) {
  //     actualMode = lightMode;
  //     localStorage.setItem('Mode', actualMode);
  //     onLightMode = true;
  //   } else {
  //     actualMode = darkMode;
  //     localStorage.setItem('Mode', actualMode);
  //     onLightMode = false;
  //   }
  // });
  // //check OS mode Default
  // function detectOsMode() {
  //   let Osmode: string;
  //   const preferredOsMode = window.matchMedia('(prefers-color-scheme: dark').matches;
  //   preferredOsMode ? (Osmode = darkMode) : (Osmode = lightMode);
  //   return Osmode;
  // }
  // detectOsMode();
  // const setLightMode = function () {
  //   toggleButton.classList.add('light');
  //   pageWrapper.classList.add('lightmode');
  // };
  // //function that detect user OS and set it On pageLoad
  // function setMode() {
  //   const storedMode = localStorage.getItem('Mode');
  //   const defaultOsMode = detectOsMode();
  //   storedMode ? (actualMode = storedMode) : (actualMode = defaultOsMode);
  //   actualMode === darkMode ? (onLightMode = false) : (onLightMode = true);
  //   if (actualMode === darkMode) return;
  //   setLightMode();
  // }
  // setMode();
  // ///end
  // ////
  // ///
  // ///
  // function isMobile() {
  //   return window.innerWidth < 479;
  // }
  // //aniamtion
  // const immerseTrigger = document.querySelector('[immerse-Trigger]');
  // const slideItemWrap = document.querySelector('[slide-item="wrapper"]');
  // const scrollTrack = document.querySelector('[slide-track]');
  // const immerseSlideItems = [...document.querySelectorAll('[immerse-slide]')];
  // console.log(immerseSlideItems.length);
  // const immerseTl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: isMobile() ? immerseTrigger : immerseTrigger,
  //     scrub: 1,
  //     start: '50%, center',
  //     // end: () => `+=${immerseSlideItems[0].offsetWidth * immerseSlideItems.length}`,
  //     onUpdate: (e) => {
  //       //convert progress to percent
  //       const percentValue = e.progress * 100;
  //       scrollTrack.style.width = `${percentValue}%`;
  //     },
  //     markers: true,
  //     pin: true,
  //     pinSpacing: true,
  //     invalideOnRefresh: true,
  //   },
  // });
  // immerseTl.to(slideItemWrap, {
  //   xPercent: isMobile() ? -117 * immerseSlideItems.length : -100 * (immerseSlideItems.length - 4),
  //   ease: 'none',
  // });
  // Function to determine if the device is mobile based on screen width
  // function isMobile() {
  //   return window.innerWidth < 768; // Example breakpoint, adjust as necessary
  // }
  // const marContainer = document.querySelector('.card-row_card.sb')?.offsetWidth;
  // const marqImgsLeft = document.querySelectorAll('[marque-left]');
  // const marqImgsRight = document.querySelectorAll('[marque-right]');
  // //textmare
  // const txtElementop = document.querySelectorAll('[top-textmarq]');
  // const txtElemenMiddle = document.querySelectorAll('[middle-text="right"]');
  // const txtElemenLast = document.querySelectorAll('[middle-text="last"]');
  // const floatingImgs = document.querySelectorAll('[pop-img]');
  // const deskDuration = 50;
  // const mobileDuration = 40;
  // gsap.from(floatingImgs, {
  //   scale: 0,
  //   duration: 1.2,
  //   ease: 'elastic.out(1,0.3)',
  //   repeat: -1,
  //   repeatDelay: 0.5,
  //   stagger: 0.5,
  //   yoyo: true,
  // });
  // const marqSlide = function (marqContentWrap, marqContainer) {
  //   // GSAP animation with dynamic duration
  //   gsap.to(marqContentWrap, {
  //     x: marqContainer,
  //     ease: 'none',
  //     repeat: -1, // Infinite loop
  //     modifiers: {
  //       x: gsap.utils.unitize((x) => parseFloat(x) % (window.innerWidth * 2)), // Resets the position to create an infinite loop
  //     },
  //     onResize: function () {
  //       this.duration(isMobile() ? mobileDuration : deskDuration); // Adjust duration on window resize
  //     },
  //   });
  // };
  // marqSlide(marqImgsLeft, -marContainer);
  // marqSlide(marqImgsRight, marContainer);
  // marqSlide(txtElementop, -marContainer);
  // marqSlide(txtElemenMiddle, marContainer);
  // marqSlide(txtElemenLast, -marContainer);
  // // Optional: Listen for window resize events to adjust the animation dynamically
  // window.addEventListener('resize', function () {
  //   // Re-initialize or adjust existing GSAP animation based on new conditions
  //   gsap.to('.marquee-content', {
  //     duration: isMobile() ? 5 : 10, // Adjust the duration based on the current device width
  //   });
  // });
  // gsap.registerPlugin(ScrollTrigger);
  // function isMobile() {
  //   return window.innerWidth < 479;
  // }
  // const customTab1 = document.querySelector('[custom-tab1]');
  // const customTab2 = document.querySelector('[custom_tab2]');
  // const tabFunction = function (tabCompWrap) {
  //   console.log(tabCompWrap);
  //   const tabs = [...tabCompWrap.querySelectorAll('[tab-panel]')];
  //   const tabsContent = [...tabCompWrap.querySelectorAll('[tab-content]')];
  //   console.log(tabs);
  //   console.log(tabsContent);
  //   tabs.forEach((activeTab, i) => {
  //     activeTab.addEventListener('click', () => {
  //       ///add active class to clicked tab
  //       const restTab = tabs.filter((tab) => tab !== activeTab);
  //       restTab.forEach((a) => {
  //         a.classList.remove('tab-active');
  //       });
  //       activeTab.classList.add('tab-active');
  //       tabsContent.forEach((content) => {
  //         content.classList.remove('tab-active');
  //       });
  //       //get tab attribute
  //       const activeTabAtt = activeTab.getAttribute('tab-panel');
  //       const matchContent = tabsContent.find(
  //         (content) => content.getAttribute('tab-content') === activeTabAtt
  //       );
  //       const tabTl = gsap.timeline();
  //       if (matchContent) {
  //         matchContent.classList.add('tab-active');
  //         tabTl.to(tabsContent, { opacity: 0, duration: 0 });
  //         tabTl.to(matchContent, { opacity: 1, duration: 0, ease: 'expo.out' });
  //       }
  //       if (isMobile()) {
  //         const tabWrap = tabCompWrap?.querySelector('[tab-menuwrap]');
  //         const mbTabTrigger = tabCompWrap?.querySelector('[mb-tabTrigger]');
  //         const textValue = tabCompWrap?.querySelector('[tab-text]');
  //         mbTabTrigger?.addEventListener('click', () => {
  //           tabWrap?.classList.add('mb-show');
  //         });
  //         if (tabWrap.classList.contains('mb-show')) {
  //           //get the text el
  //           const tabText = activeTab.querySelector('div')?.textContent;
  //           textValue.textContent = tabText;
  //           tabWrap?.classList.remove('mb-show');
  //         }
  //       }
  //     });
  //   });
  //   //get the index of the activeTab
  //   const indexofActive = tabs.findIndex((tab) => tab.classList.contains('tab-active'));
  //   tabs[indexofActive].click();
  // };
  // tabFunction(customTab1);
  // tabFunction(customTab2);
  //console.log(indexofActive);
  //tabs[1].click();
  // const tabs = [...document.querySelectorAll('[tab-panel]')];
  // const tabsContent = [...document.querySelectorAll('[tab-content]')];
  // //check the tav with the active class and show it's content
  // //tab with the active class
  // const setActiveTabOnload = function () {
  //   const [activeTab] = tabs.filter((tab) => tab.classList.contains('tab-active'));
  //   const activeTabAttr = activeTab.getAttribute('tab-panel');
  //   const [activeTabContent] = tabsContent.filter(
  //     (content) => content.getAttribute('tab-content') === activeTabAttr
  //   );
  //   gsap.to(activeTabContent, { opacity: 1, ease: 'expo.out' });
  // };
  // setActiveTabOnload();
  // tabs.forEach((activeT, i) => {
  //   activeT.addEventListener('click', () => {
  //     ///add active class to clicked tab
  //     const restTab = tabs.filter((tab) => tab !== activeT);
  //     restTab.forEach((a) => {
  //       a.classList.remove('tab-active');
  //     });
  //     activeT.classList.add('tab-active');
  //     //get tab attribute
  //     const activeTab = activeT.getAttribute('tab-panel');
  //     const activeTabContent = tabsContent[i];
  //     const restContent = tabsContent.filter((content) => content !== activeTabContent);
  //     restContent.forEach((a) => {
  //       a.classList.remove('tab-active');
  //     });
  //     activeTabContent.classList.add('tab-active');
  //     const tabTl = gsap.timeline();
  //     tabTl.set(restContent, { opacity: 0 });
  //     tabTl.to(activeTabContent, { opacity: 1, duration: 0.5, ease: 'expo.out' });
  //   });
  // });
  //tab end
  // console.log(tabsContent);
  ///tab function
  // const immerseTrigger = document.querySelector('[immerse-Trigger]');
  // const slideItemWrap = document.querySelector('[slide-item="wrapper"]') as HTMLElement;
  // const scrollTrack = document.querySelector('[slide-track]') as HTMLElement;
  // const immerseSlideItems = [...document.querySelectorAll('[immerse-slide]')];
  // console.log(immerseSlideItems);
  // const immerseTl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: isMobile() ? immerseTrigger : immerseTrigger,
  //     scrub: 1,
  //     start: '50%, center',
  //     end: () => `+=${immerseSlideItems[0].offsetWidth * immerseSlideItems.length}`,
  //     onUpdate: (e) => {
  //       //convert progress to percent
  //       const percentValue = e.progress * 100;
  //       scrollTrack.style.width = `${percentValue}%`;
  //     },
  //     markers: true,
  //     pin: true,
  //     invalideOnRefresh: true,
  //   },
  // });
  // immerseTl.to(slideItemWrap, {
  //   xPercent: isMobile() ? -110 * immerseSlideItems.length : -100 * (immerseSlideItems.length - 3),
  //   ease: 'none',
  // });
  // const scaleObjTrigger = document.querySelector('[video-scale]');
  // const videoElScale = document.querySelector('.video_wrapper');
  // gsap.set(videoElScale, { scale: 0.7 });
  // gsap.to(videoElScale, {
  //   scale: 1,
  //   scrollTrigger: {
  //     trigger: scaleObjTrigger,
  //     start: 'top 90%',
  //     end: 'top 15%',
  //     scrub: true,
  //     markers: true,
  //   },
  // });
  // const langTrigger = document.querySelector('.lang-port--section');
  // const scrollTrack = document.querySelector('[scroll-track]');
  // const allSlides = gsap.utils.toArray('[slide-el]');
  // gsap.set(scrollTrack, { width: '0%' });
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
  //     markers: true,
  //     pin: true,
  //   },
  // });
  // slideLanTl.to(allSlides, {
  //   xPercent: isMobile() ? -100 * (allSlides.length - 1) : -100 * (allSlides.length - 2),
  //   ease: 'none',
  // });
  // const imgSlide = document.querySelector('#slideImg');
  // const swiper = new Swiper(imgSlide, {
  //   effect: 'coverflow',
  //   grabCursor: true,
  //   //freeMode: true,
  //   centeredSlides: true,
  //   slidesPerView: 'auto',
  //   navigation: {
  //     nextEl: '.next-btn',
  //     prevEl: '.prev-btn',
  //   },
  //   pagination: {
  //     el: '.pagi-wrap',
  //     type: 'bullets',
  //   },
  //   enabled: true,
  //   coverflowEffect: {
  //     rotate: 3,
  //     stretch: 0,
  //     depth: 160,
  //     modifier: 1.5,
  //     slideShadows: false,
  //   },
  //   //loop: true,
  // });
  // const swiper = new Swiper('.app-imgwrapper', {
  //   effect: 'coverflow',
  //   grabCursor: true,
  //   freeMode: true,
  //   centeredSlides: true,
  //   slidesPerView: 'auto',
  //   navigation: {
  //     nextEl: '.next--btn',
  //     prevEl: '.prev--btn',
  //   },
  //   pagination: {
  //     el: '.app-img-slider-pagination',
  //     type: 'bullets',
  //   },
  //   enabled: true,
  //   coverflowEffect: {
  //     rotate: 10,
  //     stretch: 0,
  //     depth: 120,
  //     modifier: 1.5,
  //     slideShadows: false,
  //   },
  //   //loop: true,
  // });
  // const budgetFields = document.querySelectorAll('[lf-element="budgetamount"]');
  // console.log('brandfirm');
  // const allSelectField = document.querySelectorAll('[select-field]');
  // allSelectField.forEach((selectfield, i) => {
  //   // Listen for changes on the select element
  //   selectfield.addEventListener('change', function () {
  //     // Get the currently selected value
  //     const selectedValue = this.value;
  //     if (selectedValue.length > 0) {
  //       budgetFields[i].value = selectedValue;
  //       console.log(budgetFields[i].value);
  //     }
  //   });
  // });
  // budgetFields.forEach((field) => {
  //   field.addEventListener('input', function (e) {
  //     //allow only digits and a single period
  //     e.target.value = e.target.value.replace(/[^0-9]+/g, '').replace(/(\..*?)\..*/g, '$1');
  //   });
  //   field.addEventListener('blur', function (e) {
  //     const numericValue = parseFloat(e.target.value.replace(',', '.'));
  //     if (!isNaN(numericValue)) {
  //       // Check if the value is a valid number
  //       const formattedValue = new Intl.NumberFormat('nl-NL', {
  //         style: 'currency',
  //         currency: 'EUR',
  //         minimumFractionDigits: 2,
  //         maximumFractionDigits: 2,
  //       }).format(numericValue);
  //       // Update the input field with the formatted value
  //       e.target.value = formattedValue;
  //     } else {
  //       // Reset the input if the conversion fails
  //       e.target.value = '';
  //     }
  //   });
  // });
  // const hiddenField = document.querySelectorAll('[lf-element="hidden"]');
  // const pageSlug = window.location.pathname;
  // hiddenField.forEach((hiddenf) => {
  //   hiddenf.value = `${pageSlug}`;
  // });
  // const budgetFields = document.querySelectorAll('[lf-element="budgetamount"]');
  // budgetFields.forEach((field) => {
  //   field.addEventListener('input', function (e) {
  //     //allow only digits and a single period
  //     e.target.value = e.target.value.replace(/[^0-9]+/g, '').replace(/(\..*?)\..*/g, '$1');
  //   });
  //   field.addEventListener('blur', function (e) {
  //     const numericValue = parseFloat(e.target.value.replace(',', '.'));
  //     if (!isNaN(numericValue)) {
  //       // Check if the value is a valid number
  //       const formattedValue = new Intl.NumberFormat('nl-NL', {
  //         style: 'currency',
  //         currency: 'EUR',
  //         minimumFractionDigits: 2,
  //         maximumFractionDigits: 2,
  //       }).format(numericValue);
  //       // Update the input field with the formatted value
  //       e.target.value = formattedValue;
  //     } else {
  //       // Reset the input if the conversion fails
  //       e.target.value = '';
  //     }
  //   });
  // });
  // /gsap.set('.word', { lineHeight: 0.75 });
  // budgetField.addEventListener('input', function (e) {
  //   //allow only digits and a single period
  //   e.target.value = e.target.value.replace(/[^0-9]+/g, '').replace(/(\..*?)\..*/g, '$1');
  // });
  // budgetField.addEventListener('blur', function (e) {
  //   const numericValue = parseFloat(e.target.value.replace(',', '.'));
  //   if (!isNaN(numericValue)) {
  //     // Check if the value is a valid number
  //     const formattedValue = new Intl.NumberFormat('nl-NL', {
  //       style: 'currency',
  //       currency: 'EUR',
  //       minimumFractionDigits: 2,
  //       maximumFractionDigits: 2,
  //     }).format(numericValue);
  //     // Update the input field with the formatted value
  //     e.target.value = formattedValue;
  //   } else {
  //     // Reset the input if the conversion fails
  //     e.target.value = '';
  //   }
  // });
  // const playBtn = document.querySelector('[lf-button="play-vid"]') as HTMLButtonElement;
  // const closeArea = document.querySelectorAll('[lf-button="vid-close"]');
  // const videoElementWrap = document.querySelector('[lf-element="video"]') as HTMLElement;
  // const vidsource = document.querySelector('.video-el') as HTMLVideoElement;
  // ///languge El
  // const langChangeBtn = document.querySelector('[lf-button="lang-change"]');
  // let dutchLang = true;
  // /////language switch
  // langChangeBtn?.addEventListener('click', function () {
  //   // this.classList.toggle('active-ln');
  //   if (dutchLang) {
  //     this.classList.add('active-ln');
  //     const currentUrl = window.location;
  //     currentUrl.href = `fr`;
  //     dutchLang = false;
  //   } else {
  //     this.classList.remove('active-ln');
  //     const currentUrl = window.location;
  //     currentUrl.href = `/`;
  //     dutchLang = true;
  //   }
  // });
  // //video
  // const fadeIn = function (el) {
  //   el.style.display = `flex`;
  //   setTimeout(() => {
  //     el.style.opacity = `100%`;
  //   }, 150);
  // };
  // const fadeOut = function (el) {
  //   el.style.opacity = `0%`;
  //   setTimeout(() => {
  //     el.style.display = `none`;
  //   }, 150);
  // };
  // //video url obj
  // const videoTab = [
  //   {
  //     index: 1,
  //     videoName: 'Bart',
  //     videoLink:
  //       'https://assets.frame.io/encode/54ee55a8-c192-4710-8eab-d0fd684709f9/h264_1080_best.mp4?x-amz-meta-project_id=7139bd69-56a1-47c1-8639-0ffed26dff4b&x-amz-meta-request_id=F7ItYIUghcOT0cIEigUL&x-amz-meta-project_id=7139bd69-56a1-47c1-8639-0ffed26dff4b&x-amz-meta-resource_type=asset&x-amz-meta-resource_id=54ee55a8-c192-4710-8eab-d0fd684709f9&Expires=1707523200&Signature=cTxyLcpFBdoj0lNobAYXggtHseAnxtcZtT7IgFelKsraOQmyqAsvoEpLSoPptg42fUWEVSzgCFOKTiKY74InKVJLX0e0TMIT7X7-iYbxA3SCS20tSHIiuN1hKk-~x3LWA6s8ZsJKP64Itap~q8f3W58wWNeTqHybAGK11U~6x~t91C8pR1kRsLKt-fiTH6oTjx731gN498jtLI8PbqWW~zy-Uk5KniEm7L3U9SvpldXL~yrs3IfJ1HRX0NxYlpu27Vu9Y-qAh3t4Fkf4dCfR~os3IATwW5x~x1MVQdRR9Sfu1UalXGpW-4LfHDg2EFpsm0uKM9-niDdKQ~GpiWPmdg__&Key-Pair-Id=K1XW5DOJMY1ET9',
  //     imgBg: '',
  //   },
  //   {
  //     index: 2,
  //     videoName: 'chris',
  //     videoLink:
  //       'https://assets.frame.io/encode/75b77083-a769-4b88-bf8a-896f7bfe88f1/h264_1080_best.mp4?x-amz-meta-project_id=7139bd69-56a1-47c1-8639-0ffed26dff4b&x-amz-meta-request_id=F7ItYIUghcOT0cIEigUL&x-amz-meta-project_id=7139bd69-56a1-47c1-8639-0ffed26dff4b&x-amz-meta-resource_type=asset&x-amz-meta-resource_id=75b77083-a769-4b88-bf8a-896f7bfe88f1&Expires=1707523200&Signature=M3FI2GMetcLtIFq8QsCwRkXcB8ddqeUI8kHdhkg6EZ8Ln-1U85JgVbX0Ih02V4GzUykC6uvQjgORWyH~4q6xi0ga6xkJkazgf8Xt5wnwFMcNc4WkSqOvjgV4UnCrRaEcYzDqx9Nza9kNZywoC4s1SWmC7SnKClWsyORAe8ebdo3fI2HvxZFPwO8gb13YpWR3rAeqdG2jr73tXmg5r~DuE8rJnRFbcl-Rd~WpZxomaEPkJ1j3oRDB9WWA7UEb5IhkYeFKJm9kinWPxKfCsLgmWkD-pogVgbhOOhrcmQRHfdocHaahc-0bW3N78DHEpeAfwOn~x3qbuZreD6voGSyiBg__&Key-Pair-Id=K1XW5DOJMY1ET9',
  //     imgBg: '',
  //   },
  //   {
  //     index: 3,
  //     videoName: 'daan',
  //     videoLink:
  //       'https://assets.frame.io/encode/34bcbea3-f5c1-49ab-8e67-5498f7a7df0f/h264_1080_best.mp4?x-amz-meta-project_id=7139bd69-56a1-47c1-8639-0ffed26dff4b&x-amz-meta-request_id=F7ItYIUghcOT0cIEigUL&x-amz-meta-project_id=7139bd69-56a1-47c1-8639-0ffed26dff4b&x-amz-meta-resource_type=asset&x-amz-meta-resource_id=34bcbea3-f5c1-49ab-8e67-5498f7a7df0f&Expires=1707523200&Signature=ZkVOGW13Bk-9us1ZwxT~X7RvjkYyo7jT4cYQahr7ebemoXEncZDCOsuUdiSx8XwvXsF~2AYvp4mdu47CUsqtUNmjdQIlaCndZPZPyDLAfkLxhTqXc43Uj7aYUkTA2oRJU5QQ18mCEMxFQkqe7OBsZgUFDm0RpACDxWgistsSlSLKYFz~Vf1o8x7CHLF14VY65m0a0-qJ4xd6YEpkFwShYVXLMMYfCipm4S7~OcI7I8QGKPtb44IRoEEu-uzgorkCBJAQB-G2FgehamcAdwbOe5Ils-UdtsqDfaSIjgejiHwBsFxMIFCtd8vjayMDM1JChdaNW1JS5LFFQGbLA5R1eQ__&Key-Pair-Id=K1XW5DOJMY1ET9',
  //     imgBg: '',
  //   },
  // ];
  // playBtn.addEventListener('click', (e) => {
  //   const activeIndex = playBtn.getAttribute('index');
  //   const [activeVideoDetails] = videoTab.filter((el) => el.index == activeIndex);
  //   if (activeVideoDetails) {
  //     const { videoLink } = activeVideoDetails;
  //     vidsource.src = `${videoLink}`;
  //     vidsource.autoplay = true;
  //     fadeIn(videoElementWrap);
  //   }
  // });
  // closeArea.forEach((button) => {
  //   button.addEventListener('click', () => {
  //     fadeOut(videoElementWrap);
  //     vidsource.pause();
  //   });
  // });
  //vertical text slider textSlide
  // const textVerticalSlide = new Splide('.splide', {
  //   direction: 'ttb',
  //   pagination: false,
  //   arrows: false,
  //   autoplay: true,
  //   interval: 2000,
  //   type: 'loop',
  //   height: '200px',
  //   autoWidth: true,
  //   wheel: true,
  //   releaseWheel: true,
  // });
  // textVerticalSlide.mount();
  //console.log(splide);
  // const ltTrigger = [...document.querySelectorAll('[lh-trigger]')];
  // const lboxVideo = [...document.querySelectorAll('[lbox-video]')];
  // const bodyEl = document.querySelector('body');
  // const closeBtn = [...document.querySelectorAll('[lf-element="close"]')];
  // ltTrigger.forEach((el, i) => {
  //   el.addEventListener('click', (e) => {
  //     const videoNum = el.getAttribute('lh-trigger');
  //     const activeVideo = lboxVideo.find(
  //       (videoel) => videoel.getAttribute('lbox-video') === videoNum
  //     );
  //     //get the video container element
  //     //get the lighbox container
  //     const lightBoxContainer = lboxVideo[i];
  //     //get the iframe container for the video
  //     const videoContainer = lightBoxContainer.querySelector('.vide-iframe');
  //     //get the Video ID
  //     const videoId = el.getAttribute('data-video-id');
  //     const iframe = createYoutubeIframe(videoId);
  //     videoContainer?.appendChild(iframe);
  //     activeVideo.classList.add('active-video');
  //     bodyEl.style.height = '100%';
  //     bodyEl.style.overflow = 'hidden';
  //     ///close btn on click
  //     closeIframe(activeVideo, videoContainer);
  //   });
  // });
  // function createYoutubeIframe(videoId) {
  //   const iframe = document.createElement('iframe');
  //   iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
  //   iframe.classList.add('iframvideo');
  //   iframe.setAttribute('frameborder', '0');
  //   iframe.setAttribute(
  //     'allow',
  //     'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
  //   );
  //   iframe.setAttribute('allowfullscreen', 'true');
  //   iframe.style.width = '100%';
  //   iframe.style.height = '100%';
  //   return iframe;
  // }
  // const closeIframe = function (activeEl, iframeContainer) {
  //   closeBtn.forEach((btnlose) => {
  //     btnlose.addEventListener('click', (e) => {
  //       activeEl.classList.remove('active-video');
  //       bodyEl.style.height = '';
  //       bodyEl.style.overflow = '';
  //       iframeContainer.innerHTML = '';
  //     });
  //   });
  // };
  // console.log('nomad');
  // const formVideos = document.querySelectorAll('[form-video]');
  // const closeAreas = document.querySelectorAll('[lf-element="close-area"]');
  // const submitbtn = document.querySelector('[type="submit"]');
  // const imgArray = [];
  // formVideos.forEach((formv) => {
  //   const imgBg = formv.querySelector('img')?.src;
  //   imgArray.push(imgBg);
  // });
  // const createImgEl = function (videoEl, index) {
  //   videoEl.innerHTML = '';
  //   //create and img element
  //   const imgEl = document.createElement('IMG');
  //   imgEl.classList.add('form-img');
  //   imgEl.src = imgArray[index];
  //   videoEl.appendChild(imgEl);
  // };
  // closeAreas.forEach((closearea) => {
  //   closearea.addEventListener('click', () => {
  //     formVideos.forEach((video, i) => {
  //       //check if any video has an iframe as a child element
  //       const iframeEl = video.querySelector('iframe');
  //       if (iframeEl) {
  //         createImgEl(video, i);
  //       }
  //     });
  //   });
  // });
  // submitbtn?.addEventListener('click', () => {
  //   formVideos.forEach((video, i) => {
  //     //check if any video has an iframe as a child element
  //     const iframeEl = video.querySelector('iframe');
  //     if (iframeEl) {
  //       createImgEl(video, i);
  //     }
  //   });
  // });
  // const navIn = function (el: HTMLElement) {
  //   el.style.display = `block`;
  //   el.classList.add('is-open');
  //   setTimeout(() => {
  //     el.style.opacity = `100%`;
  //     el.style.transform = `translate(0px, 0rem)`;
  //   }, 150);
  // };
  // const navOut = function (el: HTMLElement) {
  //   el.style.transform = `translate(0px, 1.5rem)`;
  //   el.style.opacity = `0%`;
  //   setTimeout(() => {
  //     el.classList.remove('is-open');
  //     el.style.display = `none`;
  //   }, 150);
  // };
  // const screenSize = window.innerWidth;
  // if (screenSize < 992) {
  //   //navigation show and hide
  //   const mobileNavWrap = document.querySelector('[lf-element="mb-navWrap"]') as HTMLElement;
  //   const navBtn = document.querySelector('[lf-button="mb-nav"]');
  //   const allLinks = document.querySelectorAll('[lf-element="nav-link"]');
  //   navBtn?.addEventListener('click', function () {
  //     if (mobileNavWrap.classList.contains('is-open')) {
  //       navOut(mobileNavWrap);
  //     } else navIn(mobileNavWrap);
  //   });
  //   allLinks.forEach((link) => {
  //     link.addEventListener('click', () => {
  //       if (mobileNavWrap.classList.contains('is-open')) {
  //         console.log('oya tipa');
  //         navOut(mobileNavWrap);
  //       }
  //     });
  //   });
  // }
});
