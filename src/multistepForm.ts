const stepFormDefault = function (e) {
  e.preventDefault();
  e.stopPropagation();
};

export const multiForm = function () {
  const allSteps = [...document.querySelectorAll('[step]')];

  const nextButton = document.querySelector('[next-button]');
  nextButton?.addEventListener('click', (e) => {
    stepFormDefault(e);

    const transformValue = (allSteps.length / 2) * 100;

    allSteps.forEach((step) => {
      step.style.transform = `translate3d(-${transformValue}%, 0rem, 0rem)`;
    });
  });
};

export const dropDownFunction = function () {
  console.log('steps');
  ///Query Html elements
  const dropWrapper = document.querySelector('[drop-wrapper]') as HTMLElement;
  const dropTitle = document.querySelector('[drop-title]') as HTMLElement;
  const dropListWrap = document.querySelector('[drop-list]') as HTMLElement;
  const dropText = document.querySelector('[drop-text]') as HTMLElement;

  const hiddenInputField = document.querySelector('#hiddenField') as HTMLInputElement;

  const dropItem = [...document.querySelectorAll('.drop_item')];

  const toggleClass = function () {
    dropTitle.classList.toggle('drop_open');
    dropWrapper.classList.toggle('drop-open');
    dropListWrap.classList.toggle('is-open');
  };

  dropTitle.addEventListener('click', function (e) {
    toggleClass();
  });

  dropItem.forEach((item) => {
    item.addEventListener('click', () => {
      //query the text element
      const text = item.querySelector('div')?.textContent;
      dropText.textContent = `${text}`;
      hiddenInputField.value = `${text}`;
      toggleClass();

      console.log(hiddenInputField.value);
    });
  });

  console.log([dropListWrap, dropTitle, dropWrapper]);

  //classes to add in webflow
  // .drop-open
};

const Webflow = Webflow || [];
Webflow.push(function () {
  // Fix for Safari
  if (navigator.userAgent.includes('Safari')) {
    document.querySelectorAll('.tab-wrap').forEach(
      (t) =>
        (t.focus = function () {
          const x = window.scrollX,
            y = window.scrollY;
          const f = () => {
            setTimeout(() => window.scrollTo(x, y), 1);
            t.removeEventListener('focus', f);
          };
          t.addEventListener('focus', f);
          HTMLElement.prototype.focus.apply(this, arguments);
        })
    );
  }

  // Start Tabs
  let tabTimeout;
  clearTimeout(tabTimeout);
  tabLoop();

  // Connect your class names to elements
  function tabLoop() {
    tabTimeout = setTimeout(function () {
      const $next = $('.tab-menu-container').children('.w--current:first').next();

      if ($next.length) {
        $next.click(); // user click resets timeout
      } else {
        $('.tab-wrap:first').click();
      }
    }, 10000); // 10 Second Rotation
  }

  // Reset Loops
  $('.tab-wrap').click(function () {
    clearTimeout(tabTimeout);
    tabLoop();
  });

  const tabElement = document.querySelector('[tc-element="tabsection"]');
  const tabContainer = document.querySelector('[tc-element="menu"]');

  if (!tabContainer) return;
  const [firstTab] = tabContainer.children;

  const intoview = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        firstTab.click();
        clearTimeout(tabTimeout);
        tabLoop();
      }
    });
  };

  const option = {
    root: null,
    threshold: 0.5,
  };

  const tabObserver = new IntersectionObserver(intoview, option);

  tabObserver.observe(tabElement);
});
