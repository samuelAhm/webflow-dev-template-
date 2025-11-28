import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function isDesktop() {
  return window.innerWidth > 479; // Example breakpoint, adjust as necessary
}

document.addEventListener('DOMContentLoaded', function () {
  const observeSection = document.getElementById('whatNext-sect') as HTMLElement;

  if (isDesktop()) {
    const toc_Wrapper = document.querySelector('[toc-wrapper]') as HTMLElement;
    const toc_button = document.querySelector('[toc-button]') as HTMLElement;

    const toc_closearea = document.getElementById('toc-Close') as HTMLElement;

    const tocTl = gsap.timeline({ paused: true });
    tocTl.to(toc_Wrapper, { scale: 1, duration: 0.25, ease: 'power1.out' });

    function checkOpen(el: HTMLElement): boolean {
      return el.classList.contains('open');
    }

    function playAnim(el: HTMLElement) {
      tocTl.play();
      el.classList.add('open');
      toc_closearea.style.display = `block`;
    }

    function reverseAnim(el: HTMLElement) {
      tocTl.reverse();
      el.classList.remove('open');
      toc_closearea.style.display = `none`;
    }

    toc_closearea.addEventListener('click', function () {
      reverseAnim(toc_button);
      //      this.style.display = `none`;
    });

    toc_button.addEventListener('click', function () {
      !checkOpen(this) ? playAnim(this) : reverseAnim(this);
    });

    const option: any = {
      root: null, // observing changes to viewport
      rootMargin: '0px',
      threshold: 0.5, // visible amount of content to trigger the observer
    };

    function onScrollFunction(entries: any, observer: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          reverseAnim(toc_button);
        }
      });
    }

    playAnim(toc_button);
    //monitor scroll position
    const nextObserver = new IntersectionObserver(onScrollFunction, option);

    nextObserver.observe(observeSection);
  }
});
