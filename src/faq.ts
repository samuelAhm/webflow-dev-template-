window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('accordion');
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

  ////
  ///Truncate paragraph
  const allParagraph = document.querySelectorAll('[truncate-paragraph]');
  allParagraph.forEach((richText) => {
    const paraTx = richText.querySelectorAll('p');
    console.log(paraTx);
    console.log(richText);
  });
  console.log(allParagraph);

  ////

  const careerAccord = document.querySelectorAll('[career-open]');
  const allParentEl = document.querySelectorAll('.career--accord');

  const checkActive = function (el): boolean {
    return el.classList.contains('is-open');
  };
  console.log(careerAccord);

  careerAccord.forEach((el) => {
    const parentEl = el.parentElement;
    console.log(parentEl);

    el.addEventListener('click', (e) => {
      allParentEl.forEach((otherEl) => {
        if (otherEl !== parentEl) {
          otherEl.classList.remove('is-open');
        }
      });

      //add active class to clicked element
      !checkActive(parentEl)
        ? parentEl.classList.add('is-open')
        : parentEl.classList.remove('is-open');
    });
  });
});
