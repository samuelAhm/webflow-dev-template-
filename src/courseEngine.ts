import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

document.addEventListener('DOMContentLoaded', function () {
  //register plugin
  gsap.registerPlugin(ScrollTrigger);

  const ytSwiperId = document.getElementById('ytSwiper') as HTMLElement;

  ///popup start
  const popWrapper = document.querySelector('[pop-wrapper]') as HTMLElement;
  const bodyEl = document.querySelector('body') as HTMLElement;

  const popBtn = [...document.querySelectorAll('[pop-item]')] as HTMLElement[];

  const popItems = [...document.querySelectorAll('[pop-el]')] as HTMLElement[];

  const popClose = [...document.querySelectorAll('.icon-close')] as HTMLElement[];
  const closeDiv = [...document.querySelectorAll('.close--div')] as HTMLElement[];

  //function that show popup item
  const showPopup = function (e: HTMLElement) {
    //stop the page from scrolling
    bodyEl.style.overflow = 'hidden';
    popWrapper.style.display = 'block';

    //active the clicked item
    e.style.opacity = '1';
  };

  const closePopup = function (e: HTMLElement) {
    //stop the page from scrolling
    bodyEl.style.overflow = 'visible';
    popWrapper.style.display = 'none';

    //active the clicked item
    e.style.opacity = '0';
  };

  // popClose.addEventListener('click', (e) => {
  //   console.log('clickc;ps');
  // });

  popClose.forEach((el) => {
    el.addEventListener('click', (e) => {
      //get the parent element with attribute of pop-el
      const activePop = el.parentElement?.parentElement.parentElement as HTMLElement;
      console.log(activePop);
      closePopup(activePop);
    });
  });

  closeDiv.forEach((el) => {
    el.addEventListener('click', (e) => {
      //get the parent element with attribute of pop-el
      const activePop = el.parentElement?.parentElement as HTMLElement;

      closePopup(activePop);
    });
  });

  popBtn.forEach((el) => {
    el.addEventListener('click', (e) => {
      //get the attibute element
      //clicked el att
      const activeAttr = el.getAttribute('pop-item');

      const [activePop] = popItems.filter((item) => item.getAttribute('pop-el') === activeAttr);
      console.log(activePop);
      showPopup(activePop);
    });
  });

  const yt_Swiper = new Swiper(ytSwiperId, {
    slidesPerView: 1.3,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 991px
      991: {
        slidesPerView: 1.5,
        spaceBetween: 16,
      },
    },
    grabCursor: true,
    navigation: {
      nextEl: '.yt-next',
      prevEl: '.yt-prev',
    },
    centeredSlides: false,
  });

  const Ig_Swiper = new Swiper('#ig-Swiper', {
    loop: true,
    slidesPerView: 2.7,
    spaceBetween: 16,
    breakpoints: {
      // when window width is >= 991px
      991: {
        slidesPerView: 3.6,
        spaceBetween: 16,
      },
    },

    grabCursor: true,
    navigation: {
      nextEl: '.ig-next',
      prevEl: '.ig-prev',
    },
    centeredSlides: false,
  });

  //marqueee
  const testiSwiper = new Swiper('#testi-sect', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      // when window width is >= 991px
      991: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
    },
    speed: 20000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
  });

  ///gsap animation testi-sect

  const allSteps = [...document.querySelectorAll('[proven-steps]')] as HTMLElement[];

  allSteps.forEach((el, i) => {
    const line = el.querySelector('[line--height]') as HTMLElement;

    const activeTl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 70%',
        end: 'bottom 50%',
        scrub: true,
        // markers: true,
        onEnter: function () {
          el?.classList.add('active');
          //  imgwrap?.classList.add('active');
        },
        onLeaveBack: function () {
          el?.classList.remove('active');
          //  imgwrap?.classList.remove('active');
        },
      },
    });

    activeTl.to(line, {
      height: i === 5 ? '75%' : '100%',
    });
  });

  ///cta hover animation
  const ctaHover = [...document.querySelectorAll('.cta--anim')] as HTMLElement[];
  const ease = 'power4.out';

  ctaHover.forEach((el) => {
    const innerDiv = el.querySelector('.div-block-13') as HTMLElement;
    const ctaText = el.querySelector('.cta--text') as HTMLElement;

    el.addEventListener('mouseover', (e) => {
      gsap.to(innerDiv, {
        right: '0.4rem',
        duration: 0.5,
        ease,
        overwrite: 'auto',
      });
      gsap.to(ctaText, {
        x: '-2.8rem',
        duration: 0.5,
        ease,
        overwrite: 'auto',
      });
    });

    el.addEventListener('mouseout', (e) => {
      gsap.to(innerDiv, {
        right: 'auto',
        duration: 0.5,
        ease,
        overwrite: 'auto',
      });
      gsap.to(ctaText, { x: '0', duration: 0.5, ease, overwrite: 'auto' });
    });
  });

  //team scroll
  const teamTrigger = document.querySelector('[slide--section]') as HTMLElement;
  const sTl = gsap.timeline({ scrollTrigger: { trigger: teamTrigger, start: 'top 55%' } });
  sTl.from('[slide-up]', { yPercent: 50, autoAlpha: 0, duration: 0.5, stagger: 0.3 });
});
