// Business Logic
export class Years {
  constructor(age) {
    this.age = age;
  }

  ageToSeconds() {
    let ageInSeconds = this.age * 31536000;
    return ageInSeconds;
  }
}
