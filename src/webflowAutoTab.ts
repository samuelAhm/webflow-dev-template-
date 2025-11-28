function initializeTabRotation(
  tabWrapSelector: string,
  tabMenuContainerSelector: string,
  rotationInterval: number,
  sectionSelector: string
) {
  window.Webflow ||= [];
  Webflow.push(function () {
    const isMenuOpen = false;
    let tabTimeout;
    let observer;

    // Function to handle tab rotation
    function tabLoop() {
      tabTimeout = setTimeout(function () {
        // Check if an input is focused or if the mobile menu is open
        if (!document.activeElement || document.activeElement.tagName !== 'INPUT') {
          const $next = $(tabMenuContainerSelector).children('.w--current:first').next();
          if ($next.length) {
            $next.click();
          } else {
            $(tabWrapSelector + ':first').click();
          }
        } else {
          tabLoop(); // Retry tab rotation after a delay if an input is focused or menu is open
        }
      }, rotationInterval); // Rotate tabs every rotationInterval milliseconds
    }

    // Reset and restart the tab rotation on tab click
    $(tabWrapSelector).click(function (event) {
      event.stopPropagation(); // Prevent event from affecting other elements
      if (!$(this).find('input').is(':focus')) {
        clearTimeout(tabTimeout);
        tabLoop();
      }
    });

    // Safari scroll fix
    if (navigator.userAgent.includes('Safari')) {
      document.querySelectorAll(tabWrapSelector).forEach((tab) => {
        tab.focus = function () {
          const x = window.scrollX;
          const y = window.scrollY;
          const restoreScroll = () => {
            setTimeout(() => window.scrollTo(x, y), 1);
            tab.removeEventListener('focus', restoreScroll);
          };
          tab.addEventListener('focus', restoreScroll);
          HTMLElement.prototype.focus.apply(this, arguments);
        };
      });
    }

    // Intersection Observer callback
    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start tab rotation when the section comes into the viewport
          tabLoop();
          // Unobserve the section after the animation starts
          observer.unobserve(entry.target);
        }
      });
    }

    // Initialize Intersection Observer
    observer = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      threshold: 0.3, // Trigger when at least 40% of the section is visible
    });

    // Observe the target section
    const targetSection = document.querySelector(sectionSelector);
    if (targetSection) {
      observer.observe(targetSection);
    }
  });
}

initializeTabRotation('.solutions_tab-item-title', '.solutions_tab-menu', 15000, '#solutionSect');
