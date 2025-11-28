window.Webflow ||= [];
window.Webflow.push(() => {
  function numberWithCommas(x: any): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const amountSlider = document.getElementById('amountSlider') as HTMLInputElement;
  const amountValue = document.getElementById('amountValue') as HTMLElement;

  const monthSlider = document.getElementById('monthSlider') as HTMLInputElement;
  const monthValue = document.getElementById('monthValue') as HTMLElement;

  const totalAmount = document.querySelector('[calc-total]') as HTMLElement;

  const monthPercent = [
    { month: 1, value: 0.275 },
    { month: 2, value: 0.53 },
    { month: 3, value: 0.894 },
    { month: 4, value: 1.423 },
    { month: 5, value: 2.278 },
    { month: 6, value: 3.536 },
  ];

  function percentCalculation(monthPercent, amountValue) {
    const percentageAmount = Math.floor(monthPercent * amountValue + amountValue);
    const percentFmtd = numberWithCommas(percentageAmount);

    return percentFmtd;
  }

  function monthPercentFunction(monthNum: number) {
    const [monthPercentInterest] = monthPercent.filter((el) => el.month === monthNum);

    return monthPercentInterest.value;
  }

  // Update the displayed amount value

  function calculatorUpdate() {
    //Page load Values
    const onLoadValue = Number(amountSlider.value);
    const amountfmtd = numberWithCommas(onLoadValue);
    amountValue.textContent = `$${amountfmtd}`;

    const onLoadMonth = Number(monthSlider.value);
    monthValue.textContent = `${onLoadMonth} Month`;
    const monthX = monthPercentFunction(onLoadMonth);

    const percentFmtd = percentCalculation(monthX, onLoadValue);
    totalAmount.textContent = `$${percentFmtd}`;

    /////Page load calc ebd

    amountSlider.addEventListener('input', function () {
      const monthNumber = Number(monthSlider.value);
      const monthX = monthPercentFunction(monthNumber);

      const amount = Number(this.value);

      const percentFmtd = percentCalculation(monthX, amount);

      const amountfmtd = numberWithCommas(this.value);
      amountValue.textContent = `$${amountfmtd}`;

      totalAmount.textContent = `$${percentFmtd}`;
    });

    //////month value
    monthSlider.addEventListener('input', function () {
      const monthNumber = Number(this.value);
      const xx = monthPercentFunction(monthNumber);
      ///amount
      const amount = Number(amountSlider.value);

      const percentFmtd = percentCalculation(xx, amount);

      monthValue.textContent = `${monthNumber} Month`;
      totalAmount.textContent = `$${percentFmtd}`;
    });
  }

  calculatorUpdate();
});
