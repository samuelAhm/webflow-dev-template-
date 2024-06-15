window.Webflow ||= [];
window.Webflow.push(() => {
  const allAudio = [...document.querySelectorAll('[audiofile]')];
  const allAudioContainer = [...document.querySelectorAll('[hero-audiowrap]')];

  function initializeAudioPlayback(audioContainers, audios) {
    let currentActiveContainer = null; // Track the currently active container within this function scope

    audioContainers.forEach((container, i) => {
      const activeAudio = audios[i];

      container.addEventListener('click', () => {
        // If the clicked audio is playing, pause it and remove the active class
        if (!activeAudio.paused) {
          activeAudio.pause();
          container.classList.remove('active');
          currentActiveContainer = null;
          return;
        }

        // Pause and reset all other audios
        audios.forEach((audio) => {
          if (audio !== activeAudio) {
            audio.pause();
            audio.currentTime = 0;
          }
        });

        // Remove active class from the previous container and update the current active container
        if (currentActiveContainer) {
          currentActiveContainer.classList.remove('active');
        }
        activeAudio.muted = false;
        activeAudio.play();
        container.classList.add('active');
        currentActiveContainer = container;
      });
    });
  }

  initializeAudioPlayback(allAudioContainer, allAudio);

  //   let currentActiveContainer = null; // Track the currently active container

  //   allAudioContainer.forEach((container, i) => {
  //     const activeAudio = allAudio[i];

  //     container.addEventListener('click', () => {
  //       if (!activeAudio.paused) {
  //         activeAudio.pause();
  //         container.classList.remove('active');
  //         currentActiveContainer = null;
  //         return; // Exit early since the clicked audio was already playing
  //       }

  //       // Pause and reset other audios
  //       allAudio.forEach((audio) => {
  //         if (audio !== activeAudio) {
  //           audio.pause();
  //           audio.currentTime = 0;
  //         }
  //       });

  //       // Update active states
  //       if (currentActiveContainer) {
  //         currentActiveContainer.classList.remove('active');
  //       }
  //       activeAudio.muted = false;
  //       activeAudio.play();
  //       container.classList.add('active');
  //       currentActiveContainer = container;
  //     });
  //   });

  //   allAudioContainer.forEach((container, i) => {
  //     //select the current audio and play it
  //     const activeAudio = allAudio[i];

  //     container.addEventListener('click', () => {
  //       ///loop through all audio and pause the one that's playing
  //       allAudio.forEach((audio, i) => {
  //         if (audio !== activeAudio) {
  //           audio.pause();
  //           audio.currentTime = 0;
  //         }
  //       });

  //       allAudioContainer.forEach((el) => {
  //         el.classList.remove('active');
  //       });

  //       if (activeAudio.paused) {
  //         activeAudio.muted = false;
  //         activeAudio.play();
  //         //add active to the element
  //         container.classList.add('active');
  //       } else {
  //         activeAudio.pause();
  //       }
  //     });
  //   });
});
