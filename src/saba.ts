document.addEventListener('DOMContentLoaded', function () {
  const allLabels = document.querySelectorAll(
    '.filters_checkbox-wrap'
  ) as NodeListOf<HTMLButtonElement>;

  const allProperty_Filters = [
    ...document.querySelectorAll('[property-filtertype]'),
  ] as HTMLButtonElement[];

  allLabels.forEach((label) => {
    label.addEventListener('change', () => {
      const property_type = label.querySelector('[property-type]');
      //get the text content of the label
      const property_text = property_type?.textContent;

      const [active_selected_property_type] = allProperty_Filters.filter((filter) => {
        const filter_type_value = filter.getAttribute('property-filtertype');

        return filter_type_value === property_text;
      });

      //hide all property filters
      allProperty_Filters.forEach((filter) => {
        if (filter === active_selected_property_type) {
          return;
        }
        filter.style.display = 'none';
      });
      active_selected_property_type.style.display = 'flex';
    });
  });
});
