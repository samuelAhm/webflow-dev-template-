import { closeDropdown } from '@finsweet/ts-utils';

document.addEventListener('DOMContentLoaded', function (e) {
  const allSelectElementWrapper = document.querySelectorAll('[select-element-wrap]');

  allSelectElementWrapper.forEach((el) => {
    const textEl = el.querySelector('[dropselect-text]') as HTMLElement;
    const inputEl = el.querySelector('input') as HTMLInputElement;
    const dropdownEl = el.querySelector('[dropdown-element]') as HTMLDivElement;

    const allSelectitems = el.querySelectorAll('.service-tx');

    allSelectitems.forEach((item, index) => {
      item.addEventListener('click', () => {
        const text = item.textContent as string;
        textEl.textContent = text;
        inputEl.value = text;
        closeDropdown(dropdownEl);
      });
    });
  });

  //pop up form
  const popupFormWrap = document.querySelector('[popup-form]') as HTMLElement;
  const closeAreas = document.querySelectorAll('[popup-closearea]') as NodeListOf<HTMLElement>;
  const popupFormButton = document.querySelector('#popup-form-trigger') as HTMLElement;

  function openPopup() {
    gsap.set(popupFormWrap, { display: 'flex' });
    gsap.to(popupFormWrap, {
      opacity: 1,
      duration: 0.3,
    });
  }

  function closePopup() {
    gsap.to(popupFormWrap, {
      opacity: 0,
      duration: 0.3,
    });
    gsap.set(popupFormWrap, { display: 'none' });
  }
  if (popupFormButton) {
    popupFormButton.addEventListener('click', () => {
      openPopup();
    });

    closeAreas.forEach((area) => {
      area.addEventListener('click', () => {
        closePopup();
      });
    });
  }
});
