// Business Logic
export class Years {
  constructor(age, date1, date2) {
    this.age = age;
    this.date1 = date1;
    this.date2 = date2;

  }

  ageToSeconds() {
    let ageInSeconds = this.age * 31536000;
    return ageInSeconds;
  }

  dateDifference() {
    let dateDifference = this.date1 - this.date2
    let differenceInSeconds = dateDifference/1000;
    return differenceInSeconds;
  }

  mercuryYears() {
    let mercuryAge = this.age * 4.166666666666667;
    return Math.round(mercuryAge);
  }

  venusYears() {
    let venusAge = this.age * 1.612903225806452;
    return Math.round(venusAge);
  }
}
