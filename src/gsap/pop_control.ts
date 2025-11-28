export const popControl = function (gsap: any) {
  const popOpenCta = [...document.querySelectorAll('[pop-open]')] as HTMLElement[];
  const popDetails = [...document.querySelectorAll('[popdetails]')] as HTMLElement[];

  gsap.set(popDetails, { opacity: 0, display: 'none' });

  popOpenCta.forEach((popOpenCta, i) => {
    //get the value of the pop-open attribute on click
    popOpenCta.addEventListener('click', function () {
      const popOpenValue = this.getAttribute('pop-open');
      console.log(popOpenValue);

      const activePop = popDetails.filter(
        (popDetail) => popDetail.getAttribute('popdetails') === popOpenValue
      );

      gsap.to(activePop, { opacity: 1, display: 'flex', duration: 0.2 });
    });
  });
};
