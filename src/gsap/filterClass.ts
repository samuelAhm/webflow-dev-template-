export class Filter {
  fitlerTitle: HTMLElement; // Define the type of fitlerTitle as HTMLElement
  parentEl: HTMLElement | null; // parentElement could be null

  constructor(fitlerTitle: HTMLElement) {
    this.fitlerTitle = fitlerTitle;
    this.parentEl = this.fitlerTitle.parentElement; // Initialize parentEl in the constructor
  }

  // Method to log the parent element
  parentElLog(): void {
    if (this.parentEl) {
      console.log(this.parentEl);
    } else {
      console.log('Parent element is null');
    }
  }
}
