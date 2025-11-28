import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { nav } from 'src/nav';
import { videoPopup } from 'src/video_popup';

import { lenisScroll } from './smoothScroll';
import {
  abs_card_Scroll,
  bgTextWrap,
  freedom_card,
  other_animation,
  splideScroll,
} from './thomasSnips';
//generate random rotation value every 1 second

function isMobileMobile(): boolean {
  return window.innerWidth <= 767; // Example breakpoint, adjust as necessary
}

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);

  const ease = `power2.out`;
  // const easeScrollInto = 'back.out(1)';
  const easeScrollInto = 'elastic.out(1, 0.5)';

  abs_card_Scroll(gsap, easeScrollInto);
  freedom_card(gsap);
  bgTextWrap(gsap);
  splideScroll();
  other_animation(gsap);
  videoPopup();

  nav();

  ///cta hover animation
  const ctaHover = [...document.querySelectorAll('.cta--anim')] as HTMLElement[];

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
  ///cta hover the animation end

  if (!isMobileMobile()) {
    const boxElements = [...document.querySelectorAll('[box-item]')] as HTMLElement[];

    boxElements.forEach((div) => {
      const randomRotation = Math.random() * 6 - 3; // Generate a random number between -3 and 3
      div.style.transform = `rotate(${randomRotation}deg)`;
    });

    boxElements.forEach((box) => {
      const playIcon = box.querySelector('.play-btn') as HTMLElement; // Get the text inside the current box

      // Mousemove event to follow cursor
      box.addEventListener('mousemove', (e) => {
        const boxRect = box.getBoundingClientRect(); // Get the bounding rectangle of the box

        //get the video element and play it muted
        const videoEl = box.querySelector('video') as HTMLVideoElement;
        videoEl.muted = true;
        videoEl.play();

        playIcon.style.display = 'flex';
        box.style.zIndex = '10';
        gsap.to(box, {
          scale: 1.2,
          duration: 0.5,
          ease,
        });

        gsap.to(playIcon, {
          x: e.clientX - boxRect.left, // Position relative to the box
          y: e.clientY - boxRect.top, // Position relative to the box
          opacity: 1,
          duration: 0.3,
          ease,
        });
      });

      // Mouseleave event to hide the text
      box.addEventListener('mouseleave', () => {
        //get the video element and play it muted
        const videoEl = box.querySelector('video') as HTMLVideoElement;
        videoEl.currentTime = 0;
        videoEl.pause();

        playIcon.style.opacity = '0';
        playIcon.style.display = 'none';
        box.style.zIndex = '0';
        gsap.to(box, {
          scale: 1,
          duration: 0.5,
          ease,
        });
      });
    });
  }
});
