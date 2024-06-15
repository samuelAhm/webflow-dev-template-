window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('pricing');
  const priceElement = document.querySelectorAll('.card-price');
  const selectCurrency = <HTMLInputElement>document.getElementById('selectCurrency');
  const btnLoaders = document.querySelectorAll('.button-loader');

  const setInputValue = function (currency: string) {
    // eslint-disable-next-line prettier/prettier
    if (currency === 'GBP') {
      selectCurrency.value = '1';
    }
    if (currency === 'USD') {
      selectCurrency.value = '2';
    }
    if (currency === 'EUR') {
      selectCurrency.value = '3';
    }
  };

  //setInputValue();
  // `https://api.techloq-uat.com/billing-lookup/promotional-pricing?currencyId=${value}`

  const getPrices = async function (value: number) {
    let apiLink;

    const normalRoute = `/billing-lookup/promotional-pricing`;
    const apiWIthNum = `/billing-lookup/promotional-pricing?currencyId=${value}`;

    if (value === 0) {
      apiLink = normalRoute;
    } else {
      apiLink = apiWIthNum;
    }

    try {
      const result = await fetch(apiLink);
      const { androidPlanPricing, emailPlanPricing, filteringPlanPricing } = await result.json();

      ///getting the currency
      const currency = androidPlanPricing[2].price.currency.code;

      setInputValue(currency);

      btnLoaders.forEach((btnloader) => {
        btnloader.style.display = `none`;
      });

      // const data  = await result.json();
      //update android Plan Price.
      priceElement.forEach((el) => {
        if (el.closest('.andriod-month-pane')) {
          el.innerHTML = `<div class="card-price">${androidPlanPricing[2].price.currency.symbol}${androidPlanPricing[2].price.amount}<span class="price-span">/ month</span></div>`;
        }
      });
      priceElement.forEach((el) => {
        if (el.closest('.quarter-tab-pane')) {
          el.innerHTML = `<div class="card-price">${androidPlanPricing[1].price.currency.symbol}${androidPlanPricing[1].price.amount}<span class="price-span">/ quarter</span></div>`;
        }
      });
      priceElement.forEach((el) => {
        if (el.closest('.anual-tab-pane')) {
          el.innerHTML = `<div class="card-price">${androidPlanPricing[0].price.currency.symbol}${androidPlanPricing[0].price.amount}<span class="price-span">/ year</span></div>`;
        }
      });

      //update block
      priceElement.forEach((el) => {
        if (el.closest('.negative_margin')) {
          el.innerHTML = `<div class="card-price">${emailPlanPricing.currency.symbol}0.00<span class="price-span">/ year</span></div>`;
        }
      });

      //update email plan price
      priceElement.forEach((el) => {
        if (el.closest('.thrdcard')) {
          el.innerHTML = `<div class="card-price">${emailPlanPricing.currency.symbol}${emailPlanPricing.amount}<span class="price-span">/ year</span></div>`;
        }
      });
      //update filterPlan price
      //monthly
      priceElement.forEach((el) => {
        if (el.closest('.month-price-pane')) {
          el.innerHTML = `<div class="card-price">${filteringPlanPricing[2].price.currency.symbol}${filteringPlanPricing[2].price.amount}<span class="price-span">/ month</span></div>`;
        }
      });
      //quarterly
      priceElement.forEach((el) => {
        if (el.closest('.quarter-price')) {
          el.innerHTML = `<div class="card-price">${filteringPlanPricing[1].price.currency.symbol}${filteringPlanPricing[1].price.amount}<span class="price-span">/ quarter</span></div>`;
        }
      });
      //yearly
      priceElement.forEach((el) => {
        if (el.closest('.anual-price-pan')) {
          el.innerHTML = `<div class="card-price">${filteringPlanPricing[0].price.currency.symbol}${filteringPlanPricing[0].price.amount}<span class="price-span">/ year</span></div>`;
        }
      });
    } catch (err) {
      alert(err);
    }
  };

  selectCurrency.addEventListener('change', function () {
    btnLoaders.forEach((btnloader) => {
      btnloader.style.display = `flex`;
    });
    getPrices(+selectCurrency.value);
  });

  getPrices(0);
});
