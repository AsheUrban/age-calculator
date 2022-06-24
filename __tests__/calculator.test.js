import Astronaut from '../src/js/calculator.js';


describe("Astronaut", () => {

  test("it should correctly create an Astronaut object with two properties", () => {
    const astronaut = new Astronaut(0,0);
    expect (astronaut.earthAge).toEqual(0);
    expect (astronaut.newPlanetAge).toEqual(0);
  });

  test("it should calculate age for Astronaut on Mercury", () => {
    const newAstronautMerc = new Astronaut(0,0);
    expect (newAstronautMerc.CalculatePlanetAgeMerc()).toEqual(2.88);
    });

  test("it should calculate age for Astronaut on Venus", () => {
    const newAstronautVen = new Astronaut(0,0);
    expect (newAstronautVen.CalculatePlanetAgeVen()).toEqual(7.4399999999999995);
    });

      test("it should calculate age for Astronaut on Mars", () => {
        const newAstronautMars = new Astronaut(0,0);
        expect (newAstronautMars.CalculatePlanetAgeMars()).toEqual(22.56);
      });

  });


