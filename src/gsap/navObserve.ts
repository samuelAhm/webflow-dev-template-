document.addEventListener('DOMContentLoaded', function () {
  const nav_shadow = document.querySelector('#navShadow') as HTMLElement;

  const nav = document.querySelector('.nav') as HTMLElement;

  const observe_function = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        nav.classList.remove('bg-cons');
      } else {
        nav.classList.add('bg-cons');
      }
    });
  };

  const options = {
    root: null, // Use the viewport as the root
    threshold: 0.5, // Trigger when at least 50% of the section is visible
  };

  const nav_observer = new IntersectionObserver(observe_function, options);
  nav_observer.observe(nav_shadow);
});
