import { Years } from './../src/scripts.js';

describe('Date', function() {
  let age = new Years(26);
  it('should convert years into seconds', function() {
    let age = new Years(26);
    console.log(age);
    let ageInSeconds = age.ageToSeconds();
    console.log(ageInSeconds);
    expect(ageInSeconds).toEqual(819936000);
    // Example: expect(2).toEqual(2);
  });

  it('it should compare two dates and calculate the difference in seconds', function() {
    let date1 = new Date(2018, 4, 20);
    let date2 = new Date(1988, 4, 26);
    let dates = new Years(26, date1, date2);
    console.log(dates);
    let secondsBetweenDates = dates.dateDifference();
    console.log(secondsBetweenDates);
    expect(secondsBetweenDates).toEqual(946166400);
    // Example: expect(2).toEqual(2);
  });
  it('it should convert age on earth to age on mercury in years', function() {
    let age2 = new Years(26);
    console.log(age2);
    let ageOnMercury = age2.mercuryYears();
    console.log(ageOnMercury);
    expect(ageOnMercury).toEqual(108);
    // Example: expect(2).toEqual(2);
  });
  it('it should convert age on earth to age on venus in years', function() {
    let age3 = new Years(26);
    console.log(age3);
    let ageOnVenus = age3.venusYears();
    console.log(ageOnVenus);
    expect(ageOnVenus).toEqual(42);
    // Example: expect(2).toEqual(2);
  });

  it('it should convert age on earth to age on mars in years', function() {
    let age4 = new Years(26);
    console.log(age4);
    let ageOnMars = age4.marsYears();
    console.log(ageOnMars);
    expect(ageOnMars).toEqual(14);
    // Example: expect(2).toEqual(2);
  });
  it('it should convert age on earth to age on jupiter in years', function() {
    let age5 = new Years(26);
    console.log(age5);
    let ageOnJupiter = age5.jupiterYears();
    console.log(ageOnJupiter);
    expect(ageOnJupiter).toEqual(2);
    // Example: expect(2).toEqual(2);
  });
  it('it should push multiple calculated planet life expectancies to an array', function() {
    let date4 = new Date(2018, 4, 20);
    let date5 = new Date(1988, 4, 26);
    let expectancy1 = new Years(26, date4, date5, 79);
    console.log(expectancy1);
    let expectancyArray1 = expectancy1.remainingLifeCalculator();
    console.log(expectancyArray1);
    expect(expectancyArray1).toEqual([53, 221, 85, 28, 7]);
    // Example: expect(2).toEqual(2);
  });
});
