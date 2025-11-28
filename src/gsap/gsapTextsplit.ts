import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const typeSplit = new SplitType('[text-scrub]', {
  types: 'lines, words, chars',
  tagName: 'span',
});

$('[text-scrub]').each(function (index, element) {
  const animateElement = $(element).find('.word');

  gsap.from(animateElement, {
    opacity: 0.3,
    delay: 1,
    duration: 0.5,
    ease: 'sine.out',
    stagger: 0.1,
    scrollTrigger: {
      trigger: element,
      start: 'top 60%', // Adjust the start point as needed
      end: 'bottom 40%',
      scrub: true,
    },
  });
});
