import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', function (e) {
  const filterTitle = document.querySelector('[filter-title]') as HTMLElement;

  const filterTitle2 = document.querySelector('[filter-title2]') as HTMLElement;

  const showmore_btn = document.querySelector('[btn-showmore]') as HTMLButtonElement;
  const collection_wrap = document.querySelector('[collection-wrapper]') as HTMLElement;
  const search_input = document.querySelector('#search-input') as HTMLInputElement;

  const collection_heightTl = gsap.timeline({ paused: true });
  collection_heightTl.to(collection_wrap, { height: 'auto', duration: 0.25, ease: 'power2.out' });

  function heightAutobtnHide(wrap: HTMLElement, showMorebtn: HTMLButtonElement) {
    wrap.style.height = `auto`;
    showMorebtn.style.display = `none`;
  }

  showmore_btn.addEventListener('click', function () {
    heightAutobtnHide(collection_wrap, this);
  });

  search_input.addEventListener('input', () => {
    heightAutobtnHide(collection_wrap, showmore_btn);
  });

  ///
  const closeArea = document.querySelector('[close-area]') as HTMLElement;
  const closeArea2 = document.querySelector('[close-area2]') as HTMLElement;
  ///Filter opening animation
  const filterTl = gsap.timeline({ paused: true });
  const checkOpen = function (el) {
    return el.classList.contains('open');
  };

  function playAniation(parentEl: HTMLElement) {
    parentEl.classList.add('open');
    filterTl.play();
  }

  function reverseAnimation(parentEl: HTMLElement) {
    parentEl.classList.remove('open');
    filterTl.reverse();
  }

  const filterTl2 = gsap.timeline({ paused: true });

  const checkOpen2 = function (el) {
    return el.classList.contains('open');
  };

  function playAniation2(parentEl: HTMLElement) {
    parentEl.classList.add('open');
    filterTl2.play();
  }

  function reverseAnimation2(parentEl: HTMLElement) {
    parentEl.classList.remove('open');
    filterTl2.reverse();
  }

  const titleParentEl = filterTitle.parentElement as HTMLElement;
  const listWrapper = titleParentEl.querySelector('#monthly_filter-wrap');
  const filterItems = titleParentEl.querySelectorAll('[filter-cate]');
  const filterName = titleParentEl.querySelector('#filterText') as HTMLElement;

  ///second filter   filterTitle2
  const titleParentEl2 = filterTitle2.parentElement as HTMLElement;
  const listWrapper2 = titleParentEl2.querySelector('#monthly_filter-wrap');
  const filterItems2 = titleParentEl2.querySelectorAll('[filter-cate]');
  const filterName2 = titleParentEl2.querySelector('#filterText') as HTMLElement;

  //clear btn
  const clearBtn = titleParentEl.querySelector('[fs-cmsfilter-element="clear"]') as HTMLElement;
  //clear btn 2
  const clearBtn2 = titleParentEl2.querySelector('[fs-cmsfilter-element="clear"]') as HTMLElement;

  filterTl
    .set(listWrapper, { display: 'flex' })
    .from(listWrapper, { yPercent: 15, opacity: 0, duration: 0.2 })
    .to('.filter-em', { rotate: 0, duration: 0.2 }, '<');

  filterTl2
    .set(listWrapper2, { display: 'flex' })
    .from(listWrapper2, { yPercent: 15, opacity: 0, duration: 0.2 })
    .to('.filter-em', { rotate: 0, duration: 0.2 }, '<');

  ///open and close the dropdown when clicked
  filterTitle.addEventListener('click', function () {
    !checkOpen(titleParentEl) ? playAniation(titleParentEl) : reverseAnimation(titleParentEl);
    closeArea.style.display = 'block';
    reverseAnimation2(titleParentEl2);
  });

  ///open and close the dropdown when clicked
  filterTitle2.addEventListener('click', function () {
    !checkOpen2(titleParentEl2) ? playAniation2(titleParentEl2) : reverseAnimation2(titleParentEl2);
    closeArea.style.display = 'block';
    reverseAnimation(titleParentEl);
  });

  filterItems.forEach((item) => {
    item.addEventListener('click', function () {
      // const filterTx = this.querySelector('span').textContent;
      const tx = this.textContent;
      filterName.textContent = `${tx}`;
      reverseAnimation(titleParentEl);
      heightAutobtnHide(collection_wrap, showmore_btn);
      //   collection_heightTl.play();
    });
  });

  filterItems2.forEach((item) => {
    item.addEventListener('click', function () {
      // const filterTx = this.querySelector('span').textContent;
      const tx = this.textContent;
      filterName2.textContent = `${tx}`;
      reverseAnimation2(titleParentEl2);
      heightAutobtnHide(collection_wrap, showmore_btn);
      //   collection_heightTl.play();
    });
  });

  closeArea.addEventListener('click', function () {
    reverseAnimation(titleParentEl);
    this.style.display = `none`;
  });

  closeArea2.addEventListener('click', function () {
    reverseAnimation2(titleParentEl);
    this.style.display = `none`;
  });

  clearBtn?.addEventListener('click', function () {
    const tx = this.textContent;
    filterName.textContent = `${tx}`;
    reverseAnimation(titleParentEl);
    // collection_heightTl.reverse();
  });

  clearBtn2?.addEventListener('click', function () {
    const tx = this.textContent;
    filterName2.textContent = `${tx}`;
    reverseAnimation2(titleParentEl2);
    // collection_heightTl.reverse();
  });
});

// document.addEventListener('DOMContentLoaded', function (e) {
//   const allFilterTitle = [...document.querySelectorAll('[filter-title]')];

//   const showmore_btn = document.querySelector('[btn-showmore]') as HTMLButtonElement;
//   const collection_wrap = document.querySelector('[collection-wrapper]') as HTMLElement;
//   const search_input = document.querySelector('#search-input') as HTMLInputElement;

//   //const wrapper_height = collection_wrap.getBoundingClientRect().height;

//   const collection_heightTl = gsap.timeline({ paused: true });
//   collection_heightTl.to(collection_wrap, { height: 'auto', duration: 0.25, ease: 'power2.out' });

//   function heightAutobtnHide(wrap: HTMLElement, showMorebtn: HTMLButtonElement) {
//     wrap.style.height = `auto`;
//     showMorebtn.style.display = `none`;
//   }

//   showmore_btn.addEventListener('click', function () {
//     heightAutobtnHide(collection_wrap, this);
//   });

//   search_input.addEventListener('input', () => {
//     heightAutobtnHide(collection_wrap, showmore_btn);
//   });

//   allFilterTitle.forEach((filterTitle, i) => {
//     ///
//     const closeArea = document.querySelector('[close-area]') as HTMLElement;
//     ///Filter opening animation
//     const filterTl = gsap.timeline({ paused: true });
//     const checkOpen = function (el) {
//       return el.classList.contains('open');
//     };

//     function playAniation(parentEl: HTMLElement) {
//       parentEl.classList.add('open');
//       filterTl.play();
//     }
//     function reverseAnimation(parentEl: HTMLElement) {
//       parentEl.classList.remove('open');
//       filterTl.reverse();
//     }

//     const titleParentEl = filterTitle.parentElement as HTMLElement;
//     const listWrapper = titleParentEl.querySelector('#monthly_filter-wrap');
//     const filterItems = titleParentEl.querySelectorAll('[filter-cate]');
//     const filterName = titleParentEl.querySelector('#filterText') as HTMLElement;
//     //clear btn
//     const clearBtn = titleParentEl.querySelector('[fs-cmsfilter-element="clear"]') as HTMLElement;

//     filterTl
//       .set(listWrapper, { display: 'flex' })
//       .from(listWrapper, { yPercent: 15, opacity: 0, duration: 0.2 })
//       .to('.filter-em', { rotate: 0, duration: 0.2 }, '<');

//     ///open and close the dropdown when clicked
//     filterTitle.addEventListener('click', function () {
//       !checkOpen(titleParentEl) ? playAniation(titleParentEl) : reverseAnimation(titleParentEl);
//       closeArea.style.display = 'block';
//       console.log(playAniation, i);
//     });

//     filterItems.forEach((item) => {
//       item.addEventListener('click', function () {
//         // const filterTx = this.querySelector('span').textContent;
//         const tx = this.textContent;
//         filterName.textContent = `${tx}`;
//         reverseAnimation(titleParentEl);
//         heightAutobtnHide(collection_wrap, showmore_btn);
//         //   collection_heightTl.play();
//       });
//     });

//     closeArea.addEventListener('click', function () {
//       reverseAnimation(titleParentEl);
//       this.style.display = `none`;
//     });

//     clearBtn?.addEventListener('click', function () {
//       const tx = this.textContent;
//       filterName.textContent = `${tx}`;
//       reverseAnimation(titleParentEl);
//       // collection_heightTl.reverse();
//     });
//   });
// });
