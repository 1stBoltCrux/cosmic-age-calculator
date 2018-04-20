import { Years } from './../src/scripts.js';

describe('Date', function() {
  let age = new Years(26);
  it('should convert years into seconds', function() {
    let age = new Years(26);
    console.log(age);
    let ageInSeconds = age.ageToSeconds();
    console.log(ageInSeconds);
    expect(ageInSeconds).toEqual(666);
    // Example: expect(2).toEqual(2);
  });
});
//
// describe('convertRoman', function() {
//   it('should convert a double digit number to Roman numerals', function() {
//     var test2 = convertRoman([2,1]);
//     expect(test2).toEqual(["X","II"]);
//   });
// });
//
// describe('convertRoman', function() {
//   it('should convert a triple digit number to Roman numerals', function() {
//     var test3 = convertRoman([3,2,1]);
//     expect(test2).toEqual(["C","XX","III"]);
//   });
// });
//
// describe('convertRoman', function() {
//   it('should convert a four digit number to Roman numerals', function() {
//     var test4 = convertRoman([3,3,2,1]);
//     expect(test2).toEqual(["M","CC","XXX","III"]);
//   });
// });
