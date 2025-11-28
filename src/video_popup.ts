import { lenis } from './gsap/smoothScroll';

export const videoPopup = function () {
  ///popup start
  const popWrapper = document.getElementById('videoPop') as HTMLElement;

  const popTrigger = [...document.querySelectorAll('[data-card-name]')] as HTMLElement[];

  const popItems = [...document.querySelectorAll('[video-element]')] as HTMLElement[];

  const popCloseBtn = [...document.querySelectorAll('[pop-close]')] as HTMLElement[];

  //function that show popup item
  const showPopup = function (e: HTMLElement) {
    //stop the page from scrolling
    popWrapper.style.display = 'flex';
    //active the clicked item
    e.style.opacity = '1';
    e.style.zIndex = '10';
    e.classList.add('active_video');
    //get the video element in the clicked item
    const videoElement = e.querySelector('video') as HTMLVideoElement;
    videoElement.controls = true;
    videoElement.muted = false;
    videoElement.play();
    lenis.stop();
  };

  const closePopup = function (e: HTMLElement) {
    //stop the page from scrolling
    popWrapper.style.display = 'none';
    //active the clicked item
    e.style.opacity = '0';
    e.style.zIndex = '-1';
    e.classList.remove('active_video');
    lenis.start();
  };

  popCloseBtn.forEach((el) => {
    el.addEventListener('click', (e) => {
      //get the video Element with an active class
      const [activeVideoEl] = popItems.filter((item) => item.classList.contains('active_video'));

      const videoElement = activeVideoEl.querySelector('video') as HTMLVideoElement;
      videoElement.currentTime = 0;
      videoElement.pause();

      closePopup(activeVideoEl);
    });
  });

  popTrigger.forEach((el) => {
    el.addEventListener('click', (e) => {
      //get the attibute element
      const activeAttr = el.getAttribute('data-card-name');

      const [activePop] = popItems.filter(
        (item) => item.getAttribute('video-element') === activeAttr
      );
      showPopup(activePop);
    });
  });
};
