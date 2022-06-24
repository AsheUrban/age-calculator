import Calculator from '../src/js/calculator.js';


describe("CalculatePlanetAge", () => {

  test("it should calculate age on different planet", () => {
    let earthAge = 12;
    let planetYr = .24;
    const newPlanetAge = 0;
    expect(newPlanetAge.CalulatePlanetAge()).toEqual(earthAge * planetYr);
  })

});
