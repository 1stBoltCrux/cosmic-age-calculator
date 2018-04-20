// Business Logic
export class Years {

 // -- I had const variables for the values i used to determine year calculations per each planet (this.mercury etc.. below) but they were throwing errors, not sure why, i was using the same syntax in the inspect console in chrome and they were working fine. --

  // const earth = 1;
  // const mercury = 4.166666666666667;

  //etc....



  constructor(age, date1, date2, lifeExpectancy) {
    this.age = age;
    this.date1 = date1;
    this.date2 = date2;
    this.lifeExpectancy = lifeExpectancy;
    this.planetCalc = [1, 4.166666666666667, 1.612903225806452, 0.5319148936170213, 0.0843170320404722];
    this.earth = 1;
    this.mercury = 4.166666666666667;
    this.venus = 1.612903225806452;
    this.mars = 0.5319148936170213;
    this.jupiter = 0.0843170320404722;

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
    let mercuryAge = this.age * this.mercury;
    return Math.round(mercuryAge);
  }

  venusYears() {
    let venusAge = this.age * this.venus;
    return Math.round(venusAge);
  }

  marsYears() {
    let marsAge = this.age * this.mars;
    return Math.round(marsAge);
  }

  jupiterYears() {
    let jupiterAge = this.age * this.jupiter;
    return Math.round(jupiterAge);
  }

  remainingLifeCalculator() {
    let expectancyPerPlanetArray = [];
    let agePerPlanetArray = [];
    let noTimeLeftArray =[0, 0, 0, 0, 0];

    for (var i = 0; i < this.planetCalc.length; i++) {
      let lifeExpectancyPerPlanet = Math.round(this.planetCalc[i] * this.lifeExpectancy);
      expectancyPerPlanetArray.push(lifeExpectancyPerPlanet);
    }
    for (var j = 0; j < this.planetCalc.length; j++) {
      let agePerPlanet = Math.round(this.planetCalc[j] * this.age);
      agePerPlanetArray.push(agePerPlanet);
    }
    console.log(expectancyPerPlanetArray);
    console.log(agePerPlanetArray);
    let timeRemainingArray = expectancyPerPlanetArray.map(function(item, index){
      return item - agePerPlanetArray[index];
      // console.log(timeRemainingArray);
    });
    if (timeRemainingArray[0] < 0){
    return noTimeLeftArray;
  } else {
    return timeRemainingArray;
  }

}

      overTimeCalculator() {
        let expectancyPerPlanetArray = [];
        let agePerPlanetArray = [];
        let overTimeArray = [];

        for (var i = 0; i < this.planetCalc.length; i++) {
          let lifeExpectancyPerPlanet = Math.round(this.planetCalc[i] * this.lifeExpectancy);
          expectancyPerPlanetArray.push(lifeExpectancyPerPlanet);
        }
        for (var j = 0; j < this.planetCalc.length; j++) {
          let agePerPlanet = Math.round(this.planetCalc[j] * this.age);
          agePerPlanetArray.push(agePerPlanet);
        }
        let timeRemainingArray = expectancyPerPlanetArray.map(function(item, index){
          return item - agePerPlanetArray[index];
          // console.log(timeRemainingArray);
        });
        for (var k = 0; k < timeRemainingArray.length; k++) {
          if (timeRemainingArray[k] < 0) {
            overTimeArray.push(Math.abs(timeRemainingArray[k]));
          } else {
            overTimeArray.push(0);
          }
        }
        return overTimeArray;

          }
    }
