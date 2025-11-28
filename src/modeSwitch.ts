// document.addEventListener('DOMContentLoaded', () => {
//   const darkMode = 'Dark';
//   const lightMode = 'Light';
//   let actualMode: string;

//   let onDarkMode: boolean;

//   // Button toggle of classes
//   const toggleButton = document.querySelector('[mode-button]') as HTMLButtonElement;
//   const pageWrapper = document.querySelector('.page-wrapper') as HTMLElement;
//   const pageDocument = document.documentElement;

//   toggleButton?.addEventListener('click', () => {
//     toggleButton.classList.toggle('dark');
//     pageWrapper.classList.toggle('darkmode');
//     pageDocument.classList.toggle('darkmode');

//     onDarkMode = toggleButton.classList.contains('dark');

//     actualMode = onDarkMode ? darkMode : lightMode;
//     localStorage.setItem('Mode', actualMode);
//   });

//   // Check OS mode default
//   function detectOsMode() {
//     const preferredOsMode = window.matchMedia('(prefers-color-scheme: light)').matches;
//     return preferredOsMode ? lightMode : darkMode;
//   }

//   const setModeFunction = (btnClass: string, modeClass: string) => {
//     toggleButton.classList.add(btnClass);
//     pageWrapper.classList.add(modeClass);
//     pageDocument.classList.add(modeClass);
//   };
//   // Function to detect user OS and set it on page load
//   function setMode() {
//     // let actualMode: string;
//     // let onDarkMode: boolean;

//     const storedMode = localStorage.getItem('Mode');
//     const defaultOsMode = detectOsMode();

//     actualMode = storedMode || defaultOsMode;
//     onDarkMode = actualMode === darkMode;

//     if (actualMode === darkMode) {
//       setModeFunction('dark', 'darkmode');
//     }
//   }

//   // setMode();
// });

document.addEventListener('DOMContentLoaded', () => {
  const darkMode = 'Dark';
  const lightMode = 'Light';
  let actualMode: string;

  let onDarkMode: boolean;

  // Button toggle of classes
  const toggleButton = document.querySelector('[mode-button]') as HTMLButtonElement;
  const pageWrapper = document.querySelector('.page-wrapper') as HTMLElement;
  const pageDocument = document.documentElement;

  //after page load check the local storage for Mode
  function setModeActive() {
    //check the local storage for mode selected
    const darkMode = 'Dark';
    const darkModeClass = 'darkmode';

    const storedMode = localStorage.getItem('Mode');
    if (storedMode === darkMode) {
      document.querySelector('.page-wrapper')?.classList.add(darkModeClass);
      toggleButton.classList.add('dark');
    }
  }
  setModeActive();

  toggleButton?.addEventListener('click', () => {
    toggleButton.classList.toggle('dark');
    pageWrapper.classList.toggle('darkmode');
    pageDocument.classList.toggle('darkmode');

    onDarkMode = toggleButton.classList.contains('dark');

    actualMode = onDarkMode ? darkMode : lightMode;
    localStorage.setItem('Mode', actualMode);
  });

  // Check OS mode default
  function detectOsMode() {
    const preferredOsMode = window.matchMedia('(prefers-color-scheme: light)').matches;
    return preferredOsMode ? lightMode : darkMode;
  }
  const setModeFunction = (btnClass: string, modeClass: string) => {
    toggleButton.classList.add(btnClass);
    pageWrapper.classList.add(modeClass);
    pageDocument.classList.add(modeClass);
  };
});

//   document.querySelector('.page-wrapper')?.classList.add(darkModeClass);
//full mode code without flickering
// <!-- <script src="http://localhost:3000/modeSwitch.js"></script> -->
// <script>
//     (function() {
//       const darkMode = 'Dark';
//       const darkModeClass = 'darkmode';
//       const storedMode = localStorage.getItem('Mode');

//       if (storedMode === darkMode) {
//         document.documentElement.classList.add(darkModeClass);
//       }
//     })();
// </script>

// <script>
// document.addEventListener('DOMContentLoaded', () => {
//   const darkMode = 'Dark';
//   const lightMode = 'Light';

//   let actualMode;
//   let onDarkMode;

//   // Button toggle of classes
//   const toggleButton = document.querySelector('[mode-button]');
//   const pageWrapper = document.querySelector('.page-wrapper');
//   const pageDocument = document.documentElement;

//   //after page load check the local storage for Mode
//   function setModeActive() {
//     //check the local storage for mode selected
//     const darkMode = 'Dark';
//     const darkModeClass = 'darkmode';

//     const storedMode = localStorage.getItem('Mode');
//     if (storedMode === darkMode) {
//       document.querySelector('.page-wrapper')?.classList.add(darkModeClass);
//       toggleButton.classList.add('dark');
//     }
//   }
//   setModeActive();

//   toggleButton?.addEventListener('click', () => {
//     toggleButton.classList.toggle('dark');
//     pageWrapper.classList.toggle('darkmode');
//     pageDocument.classList.toggle('darkmode');

//     onDarkMode = toggleButton.classList.contains('dark');

//     actualMode = onDarkMode ? darkMode : lightMode;
//     localStorage.setItem('Mode', actualMode);
//   });

//   // Check OS mode default
//   function detectOsMode() {
//     const preferredOsMode = window.matchMedia('(prefers-color-scheme: light)').matches;
//     return preferredOsMode ? lightMode : darkMode;
//   }
//   const setModeFunction = (btnClass: string, modeClass: string) => {
//     toggleButton.classList.add(btnClass);
//     pageWrapper.classList.add(modeClass);
//     pageDocument.classList.add(modeClass);
//   };

// });
// </script>
