window.Webflow ||= [];
window.Webflow.push(() => {
  const showcaseImage = document.getElementById('showcaseImg') as HTMLImageElement;
  const showcaseWrap = document.getElementById('showCaseWrap') as HTMLElement;

  const showcaseTl = gsap.timeline({ paused: true });

  gsap.set(showcaseWrap, { opacity: 0, display: 'none' });

  showcaseTl
    .set(showcaseWrap, { display: 'flex' })
    .to(showcaseWrap, { opacity: 1, duration: 0.25 });

  const closeArea = document.querySelectorAll('[show-case-close]');

  closeArea.forEach((btn) => {
    btn.addEventListener('click', () => {
      showcaseTl.reverse();
    });
  });

  const allFigEl = document.querySelectorAll('.w-richtext figure');

  allFigEl.forEach((fig) => {
    fig.addEventListener('click', function () {
      const imgFigUrl = this.querySelector('img').src;
      //set the url to the showcase url
      showcaseImage.src = imgFigUrl;
      //show the showcase wrapper
      showcaseTl.play();

      console.log(imgFigUrl);
    });
  });
});
