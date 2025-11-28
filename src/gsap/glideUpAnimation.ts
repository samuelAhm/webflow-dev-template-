import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

import { cardAbsSlide } from './card-abs-slide';
import { popControl } from './pop_control';
import { lenisScroll } from './smoothScroll';
import { verticalFaq } from './vertical-faq';
import { width_adj_autoScroll } from './widthAdj-auto';

gsap.registerPlugin(ScrollTrigger);

function isMobileMobile(): boolean {
  return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
}

window.addEventListener('DOMContentLoaded', (e) => {
  lenisScroll(ScrollTrigger, gsap);

  // verticalFaq(gsap);
  popControl(gsap);
  cardAbsSlide(gsap, isMobileMobile);
  width_adj_autoScroll(gsap, isMobileMobile);

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);

  //slide in

  function isMobile() {
    return window.innerWidth < 768; // Example breakpoint, adjust as necessary
  }

  const typeSplit = new SplitType('[text-scrub]', {
    types: 'lines, words, chars',
    tagName: 'span',
  });

  $('[text-scrub]').each(function (index, element) {
    const animateElement = $(element).find('.word');

    gsap.from(animateElement, {
      opacity: 0.1,
      delay: 1,
      duration: 0.5,
      ease: 'sine.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: element,
        start: 'top 45%', // Adjust the start point as needed
        end: 'bottom 40%',
        // markers: true,
        scrub: true,
      },
    });
  });

  const glideUp = document.querySelectorAll('[glide-trigger]');

  glideUp.forEach((glide, i) => {
    const glide_item = glide.querySelector('[glide-up]') as HTMLElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: glide,
        start: isMobile() ? 'top 70%' : 'top 70%',
        end: isMobile() ? 'bottom 50%' : 'bottom 50%',
        // markers: true,
        scrub: true,
      },
    });

    tl.fromTo(glide_item, { yPercent: -120, opacity: 0 }, { yPercent: 0, opacity: 1 });
  });

  const lineTl = gsap.timeline({
    scrollTrigger: {
      trigger: '[line-sect]',
      start: isMobile() ? 'top 70%' : 'top 50%',
      end: isMobile() ? 'bottom 50%' : 'bottom 30%',
      // markers: true,
      scrub: true,
    },
  });

  lineTl.to('[line-cover]', { height: '0%' });
});

//<script defer src="https://uploads-ssl.webflow.com/66ba06cfef3804cf638e85fe/66beee1e2412b5d6938a0f1f_splitText.txt"></script>

//<script src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
