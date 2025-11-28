import { DotLottie } from '@lottiefiles/dotlottie-web';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  function setTracking() {
    //the link directory
    const allCta = [...document.querySelectorAll('[app-link]')] as HTMLLinkElement[];
    allCta.forEach((link) => {
      ///facebook tracking on click
      link.addEventListener('click', function () {
        fbq('track', 'Lead');
      });
    });
  }
  // Run the function on page load
  window.onload = setTracking;

  const trackTrigger = document.querySelector('#track-slider') as HTMLElement;
  const trackCover = document.getElementById('track-cover') as HTMLElement;

  const activeTb = [...document.querySelectorAll('[set-active]')];

  const tractTl = gsap.timeline({
    scrollTrigger: {
      trigger: trackTrigger,
      start: 'top 25%',
      end: 'bottom 75%',
      scrub: true,
      // markers: true,
    },
  });

  activeTb.forEach((el) => {
    const capsuleBtn = el.querySelector('.steps-cap');
    const imgwrap = el.querySelector('.steps--img-wrap');

    const activeTl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 55%',
        // end: 'bottom 75%',
        scrub: true,
        //  markers: true,

        onEnter: function () {
          capsuleBtn?.classList.add('active');
          imgwrap?.classList.add('active');
        },
        onLeaveBack: function () {
          capsuleBtn?.classList.remove('active');
          imgwrap?.classList.remove('active');
        },
      },
    });
  });

  tractTl.to(trackCover, {
    height: '100%',
  });
});
