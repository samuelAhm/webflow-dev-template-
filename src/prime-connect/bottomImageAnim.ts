document.addEventListener('DOMContentLoaded', () => {
  function isTablet(): boolean {
    return window.innerWidth <= 767; // Example breakpoint, adjust as necessary
  }
  function isMobile(): boolean {
    return window.innerWidth <= 479; // Example breakpoint, adjust as necessary
  }

  const EASE = 'back.out';
  const BOUNCE_EASE = 'elastic.out(1, 0.5)';

  const bottomImageSection = document.querySelector('[bottom-image-section]') as HTMLElement;
  if (!bottomImageSection) return;

  const animImage = bottomImageSection.querySelector('[img-wrap]') as HTMLElement;
  const image_cover_height = bottomImageSection.querySelector(
    '[image-cover-height]'
  ) as HTMLElement;
  const image_cover_width = bottomImageSection.querySelector('[image-cover-width]') as HTMLElement;

  const btmImgTl = gsap.timeline({
    scrollTrigger: {
      trigger: bottomImageSection,
      start: 'top 95%',
      toggleActions: 'play none none reverse',
    },
  });

  btmImgTl
    .to(image_cover_height, {
      height: '0%',
      duration: 1,
    })
    .to(
      image_cover_width,
      {
        width: '0%',
        duration: 1,
      },
      0
    )
    .from(
      animImage,
      {
        scale: 1.3,
        duration: 1.5,
      },
      0.15
    );
});
