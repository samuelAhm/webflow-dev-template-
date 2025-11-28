document.addEventListener('DOMContentLoaded', () => {
  console.log('evite');
  const showBtns = document.querySelectorAll('[invitation-btn]') as NodeListOf<HTMLButtonElement>;
  const invitationCards = document.querySelectorAll('[invitation-bar]');

  showBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      //get attribute value
      const invitationId = btn.getAttribute('invitation-btn');
      const invitationCard = document.querySelector(`[invitation-bar="${invitationId}"]`);

      //set an active class to the clicked button
      btn.classList.add('active');
      //remove active class from all buttons
      showBtns.forEach((btn) => {
        if (btn !== this) {
          btn.classList.remove('active');
        }
      });
      //remove active class from all invitation cards
      invitationCards.forEach((card) => {
        if (card !== invitationCard) {
          gsap.set(card, {
            display: 'none',
          });
        }
      });
      //add active class to the clicked card
      gsap.set(invitationCard, {
        display: 'flex',
      });
      gsap.from(invitationCard, {
        yPercent: 5,
      });
    });
  });
});
