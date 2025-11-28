document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  const allSpliteTextSection = document.querySelectorAll('[split-text-wrap]');

  const EASE = 'back.out';
  const BOUNCE_EASE = 'elastic.out(1, 0.5)';
  const POWER_EASE = 'power2.out';

  document.fonts.ready.then(() => {
    const split = SplitText.create('[split-text]', {
      type: ' words',
      wordsClass: 'words',
    });

    //
    gsap.set('[hero-hide]', { visibility: 'visible' });

    allSpliteTextSection.forEach((section) => {
      const section_text = section.querySelector('[split-text]');
      //get the split text from the parent
      const allWords = section.querySelectorAll('[split-text] .words');

      const txTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          //markers: true,
          toggleActions: 'play none none reverse',
        },
      });

      txTl.from(allWords, {
        duration: 1.5,
        yPercent: 80,
        autoAlpha: 0,
        ease: EASE,
        stagger: 0.08,
      });
    });
  });
});
