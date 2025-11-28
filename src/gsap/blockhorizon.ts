// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { lenisScroll } from 'src/gsap/smoothScroll';

function isMobile(): boolean {
  return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
}

function isPort(): boolean {
  return window.innerWidth <= 767; // Example breakpoint, adjust as necessary
}

const link = 'https://zbvrubdalcojapjygbcz.supabase.co/functions/v1/metrics_ticker/metric-ticks';

// http://127.0.0.1:54321/functions/v1/metrics_ticker/metric-ticks

async function loadTickerMetrics() {
  try {
    const response = await fetch(link);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const dataArr = data.metric_function;

    return dataArr.map((item: any) => {
      return `<div class="marq-card swiper-slide swiper-slide-next" role="group" aria-label="5 / 8" data-swiper-slide-index="4" style="width: 280px; margin-right: 10px;"><div class="marq-card--arrow"><div class="marq-icon w-embed"><svg width="1.5rem" height="1.5rem" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7205 6.26814C15.7919 6.08275 15.9339 5.93325 16.1154 5.85244C16.2969 5.77164 16.503 5.76614 16.6885 5.83714L22.6305 8.11714C22.7226 8.15247 22.8068 8.2056 22.8782 8.27349C22.9497 8.34138 23.0071 8.4227 23.0472 8.51279C23.0872 8.60288 23.1091 8.69998 23.1115 8.79853C23.114 8.89709 23.097 8.99516 23.0616 9.08714L20.7815 15.0271C20.7482 15.1216 20.6963 15.2085 20.6288 15.2825C20.5613 15.3566 20.4797 15.4164 20.3887 15.4584C20.2978 15.5004 20.1993 15.5238 20.0992 15.5271C19.9991 15.5304 19.8993 15.5136 19.8057 15.4778C19.7122 15.4419 19.6268 15.3876 19.5545 15.3182C19.4823 15.2487 19.4247 15.1655 19.3852 15.0735C19.3456 14.9814 19.325 14.8824 19.3243 14.7822C19.3237 14.682 19.3432 14.5827 19.3815 14.4901L21.0115 10.2391L19.9255 10.7231C17.5674 11.7684 15.6423 13.5957 14.4755 15.8961C14.4218 16.0017 14.3439 16.093 14.2481 16.1627C14.1524 16.2323 14.0414 16.2783 13.9245 16.2968C13.8075 16.3153 13.6878 16.3059 13.5752 16.2693C13.4626 16.2327 13.3602 16.1699 13.2765 16.0861L9.50055 12.3121L3.28055 18.5321C3.13903 18.6687 2.94955 18.7442 2.7529 18.7424C2.55625 18.7406 2.36818 18.6616 2.22919 18.5225C2.09019 18.3834 2.01141 18.1952 2.00979 17.9986C2.00818 17.8019 2.08386 17.6125 2.22055 17.4711L8.97055 10.7211C9.11117 10.5807 9.3018 10.5018 9.50055 10.5018C9.6993 10.5018 9.88992 10.5807 10.0305 10.7211L13.6365 14.3271C14.9816 12.1315 16.9626 10.3967 19.3165 9.35314L20.4025 8.87014L16.1515 7.23814C16.0594 7.20291 15.9752 7.14985 15.9036 7.082C15.832 7.01416 15.7745 6.93286 15.7343 6.84276C15.6942 6.75265 15.6722 6.65552 15.6697 6.55692C15.6672 6.45832 15.6841 6.36019 15.7195 6.26814H15.7205Z" fill="currentColor"></path>
</svg></div></div><div class="v-fx g-5"><div class="h-fx ch-2"><div class="w_500">${item.chart_name}</div><div class="spn-sm">${item.category_name}</div></div><div class="h-fx g-8"><div>${item.latest_value}</div></div></div></div>`;
    });
  } catch (error) {
    console.error('Error loading ticker metrics:', error);
    return null;
  }
}

const easeScrollInto = 'elastic.out(1, 0.9)';
document.addEventListener('DOMContentLoaded', async () => {
  //  gsap.registerPlugin(ScrollTrigger);
  lenisScroll(ScrollTrigger, gsap);
  ScrollTrigger.refresh();
  const tickers = await loadTickerMetrics();
  //body element
  const bodyEl = document.querySelector('body') as HTMLElement;

  ///float section
  const floatSectionTrigger = document.querySelector('#steps-section') as HTMLElement;
  const floatCards = document.querySelectorAll('[fl-card="float"]');
  const staticCard = document.querySelector('[fl-card="static"]');

  //scroll section Elements
  const scrollSectionTrigger = document.querySelector('#scroll-section') as HTMLElement;
  const scroll_container = document.querySelector('[scroll-container]') as HTMLElement;
  const scrollItems = [...document.querySelectorAll('[scroll-items]')] as HTMLElement[];
  const scrollELement = document.querySelector('#scroll-element') as HTMLElement;
  const card_image_wrap = document.querySelector('[cord-img--wrap]') as HTMLElement;
  const heading_text_style = document.querySelector('.tb-sect--tx') as HTMLElement;

  //swiper wrapper
  const swiperWrapper = document.getElementById('swiper-wrapper') as HTMLElement;

  const numItems = scrollItems.length - 1.2;
  const pinSpacer = scrollSectionTrigger.parentElement;

  //marqueee
  const testiSwiper = new Swiper('#price-slide', {
    init: false,
    loop: true,
    slidesPerView: 1.35,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 991px
      991: {
        slidesPerView: 4.3,
        spaceBetween: 10,
      },
    },
    speed: 10000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
  });

  const loadSwiper = () => {
    //swiper wrapper element
    swiperWrapper.innerHTML = '';
    swiperWrapper.innerHTML = `${tickers?.join('')}`;

    testiSwiper.init();
  };

  loadSwiper();

  //another version
  if (!isPort()) {
    function getScrollAmount() {
      const { scrollWidth } = scroll_container;
      return -(scrollWidth - window.innerWidth / 1.5);
    }

    // const tween = gsap.fromTo(
    //   scroll_container,
    //   { x: () => window.innerWidth },
    //   {
    //     x: getScrollAmount,
    //     ease: 'none',
    //   }
    // );

    const tl = gsap.timeline({ paused: true });
    // heading_text_style

    tl.to(scroll_container, {
      x: getScrollAmount,
      ease: 'none',
    })
      .fromTo(
        pinSpacer,
        {
          background: '#171717',
        },
        {
          background: '#ffffff',
          ease: 'none',
        },
        0
      )
      .fromTo(
        heading_text_style,
        {
          color: '#ffffff',
        },
        {
          color: '#171717',
          ease: 'none',
        },
        0
      );

    // const tween = gsap.to(scroll_container, {
    //   x: getScrollAmount,
    //   ease: 'none',
    // });

    ScrollTrigger.create({
      trigger: scrollSectionTrigger,
      start: 'top 1%',
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      pinSpacing: true,
      scrub: true,
      invalidateOnRefresh: true,
      // markers: true,
      animation: tl,
    });

    scrollItems.forEach((card, i) => {
      const pinSpacer = scrollSectionTrigger.parentElement;

      ScrollTrigger.create({
        trigger: card,
        start: 'left center',
        end: 'right center',
        containerAnimation: tl,
        //    markers: true,
        onEnter: (self) => {
          pinSpacer?.classList.add(`is-active-${i}`);
        },
        onEnterBack: (self) => {
          pinSpacer?.classList.add(`is-active-${i}`);
        },
        onLeave: (self) => {
          pinSpacer?.classList.remove(`is-active-${i}`);
        },
        onLeaveBack: (self) => {
          pinSpacer?.classList.remove(`is-active-${i}`);
        },
      });
    });
  }

  const flTl = gsap.timeline({
    scrollTrigger: {
      trigger: floatSectionTrigger,
      start: 'top 5%',
      scrub: true,
      //   markers: true,
      pin: true,
      pinSpacing: true,
      toggleActions: 'play none none reverse',
    },
  });

  flTl
    .from(floatCards, { yPercent: 150, stagger: 0.2 })
    .to(staticCard, { width: '90%', stagger: 0.2 }, '.3')
    .from(floatCards, { width: '100%', stagger: 0.2 }, '.5');

  ///footer section
  const footerSectionTrigger = document.querySelector('#footer') as HTMLElement;

  const allIcons = document.querySelectorAll('[logo-ic]');

  const footerTl = gsap.timeline({
    scrollTrigger: {
      trigger: footerSectionTrigger,
      start: 'top 70%',
      //   markers: true,
    },
  });

  footerTl.from(allIcons, {
    yPercent: 100,
    duration: 1.5,
    stagger: 0.05,
    ease: easeScrollInto,
  });
});

function createScrollAnimation(section_trigger: string, logo: string, options: any = {}) {
  // Default options
  const { start = 'top 75%', y = 50, stagger = 0.15, autoAlpha = 0, markers = false } = options;
  // Create the timeline with ScrollTrigger
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: `[${section_trigger}]`,
      start: start,
      markers: markers,
    },
  });
  // Add the animation to the timeline
  tl.from(`[${logo}]`, { y: y, stagger: stagger, autoAlpha: autoAlpha }, 0);

  ScrollTrigger.refresh();
}

const metricCardHtml = `<div class="marq-card swiper-slide swiper-slide-next" role="group" aria-label="5 / 8" data-swiper-slide-index="4" style="width: 280px; margin-right: 10px;"><div class="marq-card--arrow"><div class="marq-icon w-embed"><svg width="1.5rem" height="1.5rem" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7205 6.26814C15.7919 6.08275 15.9339 5.93325 16.1154 5.85244C16.2969 5.77164 16.503 5.76614 16.6885 5.83714L22.6305 8.11714C22.7226 8.15247 22.8068 8.2056 22.8782 8.27349C22.9497 8.34138 23.0071 8.4227 23.0472 8.51279C23.0872 8.60288 23.1091 8.69998 23.1115 8.79853C23.114 8.89709 23.097 8.99516 23.0616 9.08714L20.7815 15.0271C20.7482 15.1216 20.6963 15.2085 20.6288 15.2825C20.5613 15.3566 20.4797 15.4164 20.3887 15.4584C20.2978 15.5004 20.1993 15.5238 20.0992 15.5271C19.9991 15.5304 19.8993 15.5136 19.8057 15.4778C19.7122 15.4419 19.6268 15.3876 19.5545 15.3182C19.4823 15.2487 19.4247 15.1655 19.3852 15.0735C19.3456 14.9814 19.325 14.8824 19.3243 14.7822C19.3237 14.682 19.3432 14.5827 19.3815 14.4901L21.0115 10.2391L19.9255 10.7231C17.5674 11.7684 15.6423 13.5957 14.4755 15.8961C14.4218 16.0017 14.3439 16.093 14.2481 16.1627C14.1524 16.2323 14.0414 16.2783 13.9245 16.2968C13.8075 16.3153 13.6878 16.3059 13.5752 16.2693C13.4626 16.2327 13.3602 16.1699 13.2765 16.0861L9.50055 12.3121L3.28055 18.5321C3.13903 18.6687 2.94955 18.7442 2.7529 18.7424C2.55625 18.7406 2.36818 18.6616 2.22919 18.5225C2.09019 18.3834 2.01141 18.1952 2.00979 17.9986C2.00818 17.8019 2.08386 17.6125 2.22055 17.4711L8.97055 10.7211C9.11117 10.5807 9.3018 10.5018 9.50055 10.5018C9.6993 10.5018 9.88992 10.5807 10.0305 10.7211L13.6365 14.3271C14.9816 12.1315 16.9626 10.3967 19.3165 9.35314L20.4025 8.87014L16.1515 7.23814C16.0594 7.20291 15.9752 7.14985 15.9036 7.082C15.832 7.01416 15.7745 6.93286 15.7343 6.84276C15.6942 6.75265 15.6722 6.65552 15.6697 6.55692C15.6672 6.45832 15.6841 6.36019 15.7195 6.26814H15.7205Z" fill="currentColor"></path>
</svg></div></div><div class="v-fx g-5"><div class="h-fx ch-2"><div class="_w-600">Breakdowns</div><div class="spn-sm">Market Cap</div></div><div class="h-fx g-8"><div>1,382,128,927</div><div class="tx-green">+14.81%</div></div></div></div>`;
