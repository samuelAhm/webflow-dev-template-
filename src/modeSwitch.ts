window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('playbook');

  const darkMode = 'Dark';
  const lightMode = 'Light';
  let actualMode: string;

  let onLightMode: boolean;

  // Button toggle of classes
  const toggleButton = document.querySelector('[mode-button]') as HTMLButtonElement;
  const pageWrapper = document.querySelector('.page-wrapper') as HTMLElement;
  const pageDocument = document.documentElement;

  toggleButton?.addEventListener('click', () => {
    toggleButton.classList.toggle('light');
    pageWrapper.classList.toggle('lightmode');
    pageDocument.classList.toggle('lightmode');

    onLightMode = toggleButton.classList.contains('light');

    actualMode = onLightMode ? lightMode : darkMode;
    localStorage.setItem('Mode', actualMode);
  });

  // Check OS mode default
  function detectOsMode() {
    const preferredOsMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return preferredOsMode ? darkMode : lightMode;
  }

  const setLightMode = () => {
    toggleButton.classList.add('light');
    pageWrapper.classList.add('lightmode');
    pageDocument.classList.add('lightmode');
  };

  // Function to detect user OS and set it on page load
  function setMode() {
    const storedMode = localStorage.getItem('Mode');
    const defaultOsMode = detectOsMode();

    actualMode = storedMode || defaultOsMode;
    onLightMode = actualMode === lightMode;

    if (actualMode === lightMode) {
      setLightMode();
    }
  }

  setMode();
});
