document.addEventListener('DOMContentLoaded', () => {
  const contact_btn = [...document.querySelectorAll('[link="contact"]')] as HTMLButtonElement[];
  const close_pop_btns = [...document.querySelectorAll('[close-pop]')] as HTMLButtonElement[];
  const pop_ctabtn = document.querySelector('[link="pop-btn"]') as HTMLButtonElement;
  const body = document.querySelector('body') as HTMLElement;
  const contact_tl = gsap.timeline({ paused: true });

  contact_tl
    .set('#contact-pop', { display: 'flex' })
    .from('[form-wrap]', { yPercent: 30, autoAlpha: 0, duration: 0.5 }, 0.1);

  contact_btn.forEach((btn) => {
    btn.addEventListener('click', function () {
      //stop tjhe page from scrolling
      body.style.overflow = 'hidden';
      contact_tl.play();
    });
  });

  close_pop_btns.forEach((btn) => {
    btn.addEventListener('click', function () {
      body.style.overflow = 'auto';
      contact_tl.reverse(-0.5);
    });
  });

  pop_ctabtn.addEventListener('click', function () {
    body.style.overflow = 'auto';
    contact_tl.reverse(-0.5);
  });
});
