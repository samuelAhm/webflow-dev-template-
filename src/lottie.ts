import { DotLottie } from '@lottiefiles/dotlottie-web';

window.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    console.log('enter');
    ScrollTrigger.refresh();
  }, 500);
});

window.Webflow ||= [];
window.Webflow.push(() => {
  const dotLottie1 = new DotLottie({
    autoplay: false,
    loop: true,
    canvas: document.querySelector('#lottieCanvas1'),
    //speed: 1.5,
    src: 'https://uploads-ssl.webflow.com/66599e57dce755fa4d35ed57/6683f14edbc29e578fb857be_4-product-1.json',
  });

  const dotLottie2 = new DotLottie({
    autoplay: false,
    loop: true,
    canvas: document.querySelector('#lottieCanvas2'),
    //speed: 1.5,
    src: 'https://uploads-ssl.webflow.com/66599e57dce755fa4d35ed57/66827487e9c467b2ba671f04_4-product-2.json',
  });

  const dotLottie3 = new DotLottie({
    autoplay: false,
    loop: true,
    canvas: document.querySelector('#lottieCanvas3'),
    // speed: 1.5,
    src: 'https://uploads-ssl.webflow.com/66599e57dce755fa4d35ed57/6682ad6acf0d89e0ee7716c9_4-product-3.json',
  });

  const dotLottie4 = new DotLottie({
    autoplay: false,
    loop: true,
    canvas: document.querySelector('#lottieCanvas4'),
    //  speed: 2,
    src: 'https://uploads-ssl.webflow.com/66599e57dce755fa4d35ed57/6683fec13665df187c0c3d93_4-product-4.json',
  });

  const lottieArr = [dotLottie1, dotLottie2, dotLottie3, dotLottie4];

  function isMobile() {
    return window.innerWidth < 768; // Example breakpoint, adjust as necessary
  }

  const ease = 'expo.out';
  const allInvImg = document.querySelectorAll('[inv]');
  console.log(allInvImg);

  gsap.set(allInvImg, { opacity: 0 });

  const allInvItem = document.querySelectorAll('.div-block-11');

  allInvItem.forEach((item, i) => {
    const activeLottie = lottieArr[i];
    console.log(i);
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: item,
        start: 'top 55%',
        end: 'bottom 45%',
        //  markers: true,
        // scrub: true,
        onEnter: () => {
          const activeEl = allInvImg[i];
          activeEl.style.opacity = '1';
          activeLottie.play();
          // activeEl.classList.add(`anim-in${i}`);
        },
        onLeave: () => {
          const activeEl = allInvImg[i];
          activeEl.style.opacity = '0';
          activeLottie.stop();
          // activeEl.classList.remove(`anim-in${i}`);
        },
        onLeaveBack: () => {
          const activeEl = allInvImg[i];
          activeEl.style.opacity = '0';
          activeLottie.stop();
          // activeEl.classList.remove(`anim-in${i}`);
        },
        onEnterBack: () => {
          const activeEl = allInvImg[i];
          activeEl.style.opacity = '1';
          activeLottie.play();
          // activeEl.classList.add(`anim-in${i}`);
        },
      },
    });
  });
});

/// product lottie 1 src = 'https://uploads-ssl.webflow.com/66599e57dce755fa4d35ed57/66805fff64deb06bc4bda3af_4-product-1.json'
/// product lottie 3 src = 'https://uploads-ssl.webflow.com/66599e57dce755fa4d35ed57/66805fff877a76c39d37e2d9_4-product-3.json'
/// product lottie 2 src = 'https://uploads-ssl.webflow.com/66599e57dce755fa4d35ed57/66805fff96ab0d941c1df534_4-product-2.json'
/// product lottie 4 src = 'https://uploads-ssl.webflow.com/66599e57dce755fa4d35ed57/66805ffff40907b4f280740f_4-product-4.json'
