// Default theme
import '@splidejs/splide/css';

import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function setSlideEl(splideELement: HTMLElement, speed: number) {
  const resSlide = new Splide(splideELement, {
    type: 'loop',
    direction: 'ttb',
    height: 'auto',
    // gap: '1rem',
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: speed,
    },
  });
  resSlide.mount({ AutoScroll });
}

// //check if device width is mobile
// function isMobileMobile(): boolean {
//   return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
// }

document.addEventListener('DOMContentLoaded', () => {
  //register plugin
  gsap.registerPlugin(ScrollTrigger);

  const splideEl = document.querySelector('#splide1') as HTMLElement;
  const splideEl2 = document.querySelector('#splide2') as HTMLElement;
  const splideEl3 = document.querySelector('#splide3') as HTMLElement;

  // const countdown_wrapper = document.querySelector('#countdown-Wrapper') as HTMLElement;

  setSlideEl(splideEl, 0.2);
  setSlideEl(splideEl2, -0.3);
  setSlideEl(splideEl3, 0.2);

  ///scroll trigger
  const trigger = document.querySelector('#step-trigger');
  const curriculumSect = [...document.querySelectorAll('[section-view]')] as HTMLElement[];
  const dotMove = document.querySelector('[dot-move]') as HTMLElement;
  //get the height of the dot move
  const svg_line = document.querySelector('[line-svg]') as HTMLElement;
  const svg_line_height = svg_line.getBoundingClientRect().height;

  const scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: 'top 55%',
      // end: 'bottom 45%',
      scrub: true,
      // markers: true,
    },
  });

  scrollTl.to(dotMove, { y: svg_line_height });

  curriculumSect.forEach((el) => {
    const activeTl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 55%',
        // end: 'bottom 75%',
        scrub: true,
        // markers: true,

        onEnter: function () {
          el?.classList.add('active');
          //  imgwrap?.classList.add('active');
        },
        onLeaveBack: function () {
          el?.classList.remove('active');
          //  imgwrap?.classList.remove('active');
        },
      },
    });
  });

  //date display
  // Function to get the dates for Monday through Friday of next week
  // Function to get the ordinal suffix for a day (e.g., 1st, 2nd, 3rd, 4th)
  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th'; // Covers 11th - 13th
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  // Function to get and format next week's Monday to Friday range
  function getNextWeekDateRange() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 is Sunday, 1 is Monday, etc.
    const numberOfDays = 8;

    const daysUntilNextMonday = (8 - dayOfWeek) % numberOfDays; // Days until next Monday

    const daysSinceMonday = (dayOfWeek + 6) % 7; // How many days have passed since Monday

    // // Calculate next Monday and Friday
    // const nextMonday = new Date(today);
    // nextMonday.setDate(today.getDate() + daysUntilNextMonday);

    // const nextFriday = new Date(nextMonday);
    // nextFriday.setDate(nextMonday.getDate() + 4); // Friday is 4 days after Monday

    // Calculate this week's Monday and Friday
    const thisMonday = new Date(today);
    thisMonday.setDate(today.getDate() - daysSinceMonday);

    const thisFriday = new Date(thisMonday);
    thisFriday.setDate(thisMonday.getDate() + 4); // Friday is 4 days after Monday

    // Format the dates
    const options = { month: 'short' } as Intl.DateTimeFormatOptions;
    const secOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    } as Intl.DateTimeFormatOptions;
    const monthFormatted = thisMonday.toLocaleDateString('en-US', options);

    // Add ordinal suffixes to the days
    const mondayDay = thisMonday.getDate();
    const fridayDay = thisFriday.getDate();
    const mondayWithSuffix = `${mondayDay}${getOrdinalSuffix(mondayDay)}`;
    const fridayWithSuffix = `${fridayDay}${getOrdinalSuffix(fridayDay)}`;

    // Display the formatted date range with time
    const dateRangeText = `${monthFormatted} ${mondayWithSuffix} - ${fridayWithSuffix}, 18:00 CET`;
    const mainDateDisplay = document.getElementById('dateDisplay') as HTMLElement;
    const ctaMainDateDisplay = document.getElementById('cta-dateDisplay') as HTMLElement;
    mainDateDisplay.textContent = dateRangeText;
    ctaMainDateDisplay.textContent = dateRangeText;

    const thisWeekDates = [] as string[];
    // Loop to get and format dates for Monday through Friday
    for (let i = 0; i < 8; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + daysSinceMonday + i);
      thisWeekDates.push(date.toLocaleDateString('en-US', secOptions)); // Format date as "Wed, 28 Sep 2024"
    }

    //select the last date
    const lastDate = thisWeekDates.pop();

    countdownToEvent(`${lastDate} 00:00:00`);
    console.log(thisWeekDates);

    // Display each date on a new line
    const formattedDates = thisWeekDates.join('<b>'); // Join with line breakse

    //all date display html
    const allDateDisplay = [...document.querySelectorAll('[dynamic-date]')] as HTMLElement[];

    allDateDisplay.forEach((el, i) => {
      el.innerHTML = thisWeekDates[i];
    });
  }

  // Call the function initially
  getNextWeekDateRange();

  // Optional: if this needs to auto-update at midnight each week
  setInterval(() => {
    const now = new Date();
    if (now.getDay() === 0 && now.getHours() === 0 && now.getMinutes() === 1) {
      getNextWeekDateRange();
    }
  }, 60000); // Check every minute

  // ///countdown
  function countdownToEvent(targetDate: string) {
    const countdownWrapper = [...document.querySelectorAll('[countdown-Wrapper]')] as HTMLElement[];
    const daysEL = [...document.querySelectorAll('[days]')] as HTMLElement[];
    const hoursEL = [...document.querySelectorAll('[hours]')] as HTMLElement[];
    const minutesEl = [...document.querySelectorAll('[minutes]')] as HTMLElement[];
    const secondsEl = [...document.querySelectorAll('[seconds]')] as HTMLElement[];

    // Get the target date and time
    const target = new Date(targetDate).getTime();

    // Function to update the countdown every second
    const interval = setInterval(() => {
      // Get current date and time
      const now = new Date().getTime();

      // Calculate the time remaining
      const timeRemaining = target - now;

      // Check if the countdown is finished
      if (timeRemaining < 0) {
        clearInterval(interval);
        countdownWrapper.forEach((el) => {
          el.textContent = `The Course has started!`;
        });
        return;
      }

      // Calculate the remaining days, hours, minutes, and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // console.log(days);
      // daysEL.textContent = `${days}`;

      daysEL.forEach((el) => {
        el.textContent = `${days}`;
      });

      hoursEL.forEach((el) => {
        el.textContent = `${hours}`;
      });
      minutesEl.forEach((el) => {
        el.textContent = `${minutes}`;
      });
      secondsEl.forEach((el) => {
        el.textContent = `${seconds}`;
      });
    }, 1000);
  }
});
