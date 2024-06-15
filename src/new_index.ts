window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('Master solution');

  const allSLides = document.querySelectorAll('[slide-in]');
  gsap.set(allSLides, { visibility: 'hidden' });
  const heroTl = gsap.timeline({ ease: 'power4.out' });

  heroTl
    .from(allSLides, { yPercent: 120, autoAlpha: 0, stagger: 0.2, duration: 1.5 })
    .from('[slide-img]', { xPercent: 100, autoAlpha: 0, duration: 1.5 }, '<');

  // const fullText1 = `Master Solutions streamlined everything for me. Files are no longer getting lost, heavy files are easily transferred, and members of the team are able to instantly access the latest version of documents from a secure cloud. I also think that you can’t find the passion of Master Solutions anywhere else – they clearly love what they do, and it makes all the difference. I see this kind of IT support as an essential need for any business.”`;

  // function initializeReadMore(btnSelector: string, paraSelector: string, fullContent: string) {
  //   const btn = document.querySelector(btnSelector) as HTMLButtonElement;
  //   const paraEl = document.querySelector(paraSelector) as HTMLParagraphElement;
  //   const initialContent = paraEl.textContent as string;
  //   let clicked = false;

  //   function changeText(btn: HTMLElement, paraEl: HTMLElement, fullContent: string) {
  //     const btnTx = btn.querySelector('div') as HTMLElement;
  //     btnTx.textContent = 'Read less';
  //     paraEl.textContent = fullContent;
  //   }

  //   function resetDefault(initialText: string, paraEl: HTMLElement) {
  //     const btnTx = btn.querySelector('div') as HTMLElement;
  //     btnTx.textContent = 'Read more';
  //     paraEl.textContent = initialText;
  //   }

  //   btn.addEventListener('click', () => {
  //     if (!clicked) {
  //       changeText(btn, paraEl, fullContent);
  //     } else {
  //       resetDefault(initialContent, paraEl);
  //     }
  //     clicked = !clicked;
  //   });
  // }
  // // Usage example
  // initializeReadMore('[readBtn]', '[read-more]', fullText1);

  ///
  ///

  //faq auto close and open
  // const faqs = [...document.querySelectorAll('.faq--border')];
  // //function that check if element has active class
  // const checkActive = function (el): boolean {
  //   return el.classList.contains('is-open');
  // };

  // faqs.forEach((el) => {
  //   el.addEventListener('click', (e) => {
  //     faqs.forEach((otherEl) => {
  //       if (otherEl !== el) {
  //         otherEl.classList.remove('is-open');
  //       }
  //     });
  //     //add active class to clicked element
  //     !checkActive(el) ? el.classList.add('is-open') : el.classList.remove('is-open');
  //   });
  // });

  // function isMobile() {
  //   return window.innerWidth < 479;
  // }

  // const mbMenuWrap = document.querySelector('[mb-menu-list]') as HTMLElement;
  // const mbNavBtn = document.querySelector('[mb-btn]');

  // gsap.set(mbMenuWrap, { display: 'none', height: 0 });

  // let clicked = false;

  // const navTl = gsap.timeline({ paused: true });

  // navTl
  //   .set(mbMenuWrap, { display: 'block' })
  //   .to(mbMenuWrap, { height: 'auto', duration: 0.25, ease: 'power2.out' });

  // mbNavBtn?.addEventListener('click', (e) => {
  //   clicked = !clicked;
  //   clicked ? navTl.play() : navTl.reverse();
  // });
});

// const marContainer = document.querySelector('.card-row_card.sb').offsetWidth;

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

// ////tab functions

// const customTab1 = document.querySelector('[custom-tab1]');
// const tabFunction = function (tabCompWrap) {
//   console.log(tabCompWrap);

//   const tabs = [...tabCompWrap.querySelectorAll('[tab-panel]')];
//   const tabsContent = [...tabCompWrap.querySelectorAll('[tab-content]')];

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
//           const tabText = activeTab.querySelector('.tb-text')?.textContent;
//           textValue.textContent = tabText;
//           tabWrap?.classList.remove('mb-show');
//         }
//       }
//     });
//   });

//   //get the index of the activeTab
//   //   const indexofActive = tabs.findIndex((tab) => tab.classList.contains('tab-active'));
//   //   tabs[indexofActive].click();
// };

// tabFunction(customTab1);

// const selBtnWrap = document.querySelector('[lf-element="selBtnWrap"]');
// const slideContainer = document.querySelector('[lf-element="itemSLide"]');

// const selBtnWrap2 = document.querySelector('[lf-element="selBtnWrap2"]');
// const slideContainer2 = document.querySelector('[lf-element="itemSLide2"]');

// const selBtnWrap3 = document.querySelector('[lf-element="selBtnWrap3"]');
// const slideContainer3 = document.querySelector('[lf-element="itemSLide3"]');

// const selBtnWrap4 = document.querySelector('[lf-element="selBtnWrap4"]');
// const slideContainer4 = document.querySelector('[lf-element="itemSLide4"]');

// //function controlling the items slide
// const itemsSlide = function (btnWrap, containerWrap) {
//   btnWrap?.addEventListener('click', (e) => {
//     const [...childArray] = btnWrap.children;
//     const [firstChild, secondChild] = [...btnWrap.children];
//     const clickedItem = e.target;
//     if (clickedItem === firstChild || clickedItem === secondChild) {
//       childArray.forEach((el) => {
//         el.classList.remove('active');
//       });
//       clickedItem.classList.add('active');
//       containerWrap?.classList.toggle('active-slides');
//     }
//   });
// };

// itemsSlide(selBtnWrap, slideContainer);
// itemsSlide(selBtnWrap2, slideContainer2);
// itemsSlide(selBtnWrap3, slideContainer3);
// itemsSlide(selBtnWrap4, slideContainer4);

// const splideTesti = document.getElementById('testiSplide');
// const splideTesti2 = document.getElementById('testiSplide2');

// const testiSLide1 = new Splide(splideTesti, {
//   type: 'loop',
//   direction: 'ttb',
//   height: 'auto',
//   gap: '1.5rem',
//   pagination: false,
//   arrows: false,
//   autoScroll: {
//     speed: 0.5,
//   },
// });
// testiSLide1.mount(window.splide.Extensions);

// const testiSlide2 = new Splide(splideTesti2, {
//   type: 'loop',
//   direction: 'ttb',
//   height: 'auto',
//   gap: '1.5rem',
//   pagination: false,
//   arrows: false,
//   autoScroll: {
//     speed: -0.5,
//   },
// });
// testiSlide2.mount(window.splide.Extensions);
