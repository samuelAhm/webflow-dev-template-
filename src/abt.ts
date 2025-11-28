import { closeDropdown } from '@finsweet/ts-utils';

window.Webflow ||= [];
window.Webflow.push(() => {
  const allDropList = [...document.querySelectorAll('[impression-price]')] as HTMLElement[];

  allDropList.forEach((el) => {
    el.addEventListener('click', function (e) {
      //get price attribute
      const price_Value = this.getAttribute('impression-price');
      const text = this.textContent;

      //dropdowon parent
      //get the parent parent el
      const toggleDropdown = el.parentElement?.parentElement as HTMLDivElement;

      //get the parent parent el
      const priceCardParent = el.parentElement?.parentElement?.parentElement?.parentElement;

      const dropTitle = priceCardParent?.querySelector('[drop-title]') as HTMLElement;
      const priceCta = priceCardParent?.querySelector('[price-value]') as HTMLElement;

      dropTitle.textContent = text;
      priceCta.textContent = price_Value;
      closeDropdown(toggleDropdown);
    });
  });

  // //form element
  // const optinForm = document.getElementById('optinForm') as HTMLFormElement;
  // console.log(window.dataLayer);
  // function generateUserId(email: string) {
  //   return btoa(email.trim().toLowerCase()); // Base64 encoding as a simple solution
  // }
  // optinForm.addEventListener('submit', function (e) {
  //   const emailInputElement = document.querySelector('[optin-email]') as HTMLInputElement; // Replace with your email input field name
  //   const email = emailInputElement.value;
  //   const userId = generateUserId(email);
  //   // Push to the dataLayer
  //   window.dataLayer = window.dataLayer || [];
  //   window.dataLayer.push({
  //     event: 'formSubmission',
  //     user_id: userId,
  //     email: email,
  //   });
  //   console.log(window.dataLayer);
  //   console.log(userId);
  // });
  // console.log(generateUserId('kbbsammy02@gmail.com'));
  // //no-scroll
  // const bodyEL = document.querySelector('body');
  // const popOpenBtns = [...document.querySelectorAll('[pop-open]')];
  // const popUpElements = [...document.querySelectorAll('[pop]')];
  // const closeBtns = [...document.querySelectorAll('[close-btn]')];
  // const popWrapper = document.querySelector('.team_info-popup');
  // popOpenBtns.forEach((btn) => {
  //   btn.addEventListener('click', (e) => {
  //     //get the attribute
  //     const popName = btn.getAttribute('pop-open');
  //     const [activeEL] = popUpElements.filter((el) => el.getAttribute('pop') === popName);
  //     console.log(activeEL);
  //     popWrapper.style.display = `flex`;
  //     // popTl.play();
  //     activeEL.style.display = 'block';
  //     // gsap.from(activeEL, { yPercent: 20, opacity: 0, duration: 1.5, ease: 'expo.out' });
  //     lenis.stop();
  //     // bodyEL.classList.add('no-scroll');
  //   });
  // });
  // closeBtns.forEach((closebtn, i) => {
  //   closebtn.addEventListener('click', () => {
  //     //get active Element
  //     const openPop = popUpElements[i];
  //     lenis.start();
  //     openPop.style.display = 'none';
  //     popWrapper.style.display = `none`;
  //     //   bodyEL.classList.remove('no-scroll');
  //     // popTl.reverse();
  //   });
  // });
});
