export class Filter {
  constructor(fitlerTitle) {
    this.fitlerTitle = fitlerTitle;
  }

  parentEl = this.fitlerTitle.parentElement;

  parentElLog() {
    console.log(this.parentEl);
  }

  //   console.log(parentEl);

  //html element
}
