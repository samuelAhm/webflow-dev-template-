const marqSlide = function (slideIdentifier, gap, speedDirection) {
  const slideId = document.getElementById(slideIdentifier);

  const companySlide = new Splide(slideId, {
    type: 'loop',
    autoWidth: true,
    focus: 'center',
    gap: gap,
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: 1,
    },
  });

  companySlide.mount(window.splide.Extensions);
};

marqSlide('marque1', '2rem');
