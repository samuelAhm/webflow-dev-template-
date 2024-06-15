window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('local');
  const selectWrap = document.getElementById('Business-Function') as HTMLSelectElement;
  const selectCategory = document.getElementById('Category') as HTMLSelectElement;
  const allOptions = [...selectCategory.querySelectorAll('option')];
  const listWrap = document.querySelector('[fs-cmsfilter-element="list"]') as HTMLElement;
  const listItems = [...listWrap.querySelectorAll('[role="listitem"]')];

  ///
  /////
  //filtered Array container
  const filteredArr: any = [];
  ///
  //Data structure of the select form
  const optionFields = [
    { name: 'Retail Media', field: ['All', 'Marketing', 'Merchandising'] },
    { name: 'Supply Chain Management', field: ['All', 'Supply Chain', 'Technology'] },
    { name: 'Personalization', field: ['All', 'Shopper Experience', 'Customer Service'] },
    { name: 'Labor', field: ['All', 'Operations', 'Labor'] },
    { name: 'Pricing', field: ['All', 'Dynamic Pricing'] },
  ];
  ///

  selectWrap.addEventListener('change', function () {
    const filterAtrr = selectWrap.getAttribute('fs-cmsfilter-field');

    if (this.value === '') {
      selectCategory.innerHTML = ``;
      filteredArr.length = 0;
      allOptions.forEach((opt) => {
        selectCategory.appendChild(opt);
        selectCategory.selectedIndex = 0;

        //restore the all element to the list
        listWrap.innerHTML = '';
        listItems.forEach((item) => {
          listWrap.appendChild(item);
        });
      });
      return;
    }

    ///filter the category select element
    const activeFilterValue = this.value;
    const [activeOptionsF] = optionFields.filter((el) => el.name === activeFilterValue);
    const fieldArr = activeOptionsF.field;
    const optionsArr = fieldArr
      .map((field, i) => {
        return `<option value='${i === 0 ? '' : field}'>${field}</option>`;
      })
      .join('');
    selectCategory.innerHTML = ``;
    selectCategory.innerHTML = optionsArr;

    ///filter the list
    //    console.log(activeFilterValue);
    const filterElementArr = listItems.filter((item) => {
      const fieldI = item.querySelector(`[fs-cmsfilter-field = ${filterAtrr}]`) as HTMLElement;
      const activeTx = fieldI.querySelector('p')?.textContent;
      return activeTx === activeFilterValue;
      // const activeEl = .
    });

    filteredArr.length = 0;
    filteredArr.push(...filterElementArr);
    ///joined el
    listWrap.innerHTML = '';
    filterElementArr.forEach((list) => {
      listWrap.appendChild(list);
    });
  });
  ////
  ///
  /////second category filtering
  selectCategory.addEventListener('change', function () {
    const filterAtrr = selectCategory.getAttribute('fs-cmsfilter-field');
    if (this.value === '') {
      listWrap.innerHTML = '';
      if (filteredArr.length === 0) {
        listItems.forEach((item) => {
          listWrap.appendChild(item);
        });
      } else {
        // filteredArr.length === 0 ?
        filteredArr.forEach((opt) => {
          listWrap.appendChild(opt);
        });
      }
      return;
    }
    ///filter the category select element
    const activeFilterValue = this.value;
    ///filter the list
    ////filter function
    const renderFilteredElements = function (arr) {
      const filterElementArr = arr.filter((item) => {
        const fieldI = item.querySelector(`[fs-cmsfilter-field = ${filterAtrr}]`) as HTMLElement;
        const activeTx = fieldI.querySelector('p')?.textContent;
        return activeTx === activeFilterValue;
      });
      //joined el
      listWrap.innerHTML = '';
      filterElementArr.forEach((list) => {
        listWrap.appendChild(list);
      });
    };

    if (filteredArr.length > 0) {
      renderFilteredElements(filteredArr);
    } else {
      renderFilteredElements(listItems);
    }
  });
});

//cello-referral
//<input type="hidden" name="referral" value="xETc682vm00">
