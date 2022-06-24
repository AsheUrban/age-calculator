import Calculator from '../src/js/calculator.js';


describe("CalculatePlanetAge", () => {

  test("it should multiply earthAge * planetYr", () => {
    let earthAge = 12;
    let planetYr = .24;
    expect(newPlanetAge.CalulatePlanetAge()).toEqual(earthAge * planetYr);
  })

});
