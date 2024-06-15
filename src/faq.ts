window.Webflow ||= [];
window.Webflow.push(() => {
  //faq auto close and open
  const faqs = [...document.querySelectorAll('.faq--border')];
  //function that check if element has active class
  const checkActive = function (el): boolean {
    return el.classList.contains('is-open');
  };

  faqs.forEach((el) => {
    el.addEventListener('click', (e) => {
      faqs.forEach((otherEl) => {
        if (otherEl !== el) {
          otherEl.classList.remove('is-open');
        }
      });
      //add active class to clicked element
      !checkActive(el) ? el.classList.add('is-open') : el.classList.remove('is-open');
    });
  });
});
