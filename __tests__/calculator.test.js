import Calculator from '../src/js/calculator.js';


describe("CalculatePlanetAge", () => {

  test("it should multiply earthAge * planetYr", () => {
    let newPlanetAge = new (0);
    expect(newPlanetAge.CalulatePlanetAge()).toEqual(earthAge * planetYr);
  })

});
