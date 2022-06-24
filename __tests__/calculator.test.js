import Astronaut from '../src/js/calculator.js';


describe("Astronaut", () => {

  let astronaut;

  beforeEach(() => {
    astronaut = new Astronaut(0,0,0);
  });

  test("it should correctly create an Astronaut object with three properties", () => {
    expect (astronaut.earthAge).toEqual(0);
    expect (astronaut.newPlanetAge).toEqual(0);
    expect (astronaut.lifeExpectancy).toEqual(0);
    });

  test("it should calculate age for Astronaut on Mercury", () => {
    const newAstronautMerc = new Astronaut();
    newAstronautMerc.earthAge = 1;
    expect (newAstronautMerc.CalculatePlanetAgeMerc()).toEqual(.24);
    });

  test("it should calculate age for Astronaut on Venus", () => {
    const newAstronautVen = new Astronaut();
    newAstronautVen.earthAge = 1;
    expect (newAstronautVen.CalculatePlanetAgeVen()).toEqual(.62);
    });

  // test("it should calculate age for Astronaut on Mars", () => {
  //   const newAstronautMars = new Astronaut();
  //   newAstronautMars.earthAge = 1;
  //   expect (newAstronautMars.CalculatePlanetAgeMars()).toEqual(1.88);
  // });

  // test("it should calculate age for Astronaut on Jupiter", () => {
  //   const newAstronautJup = new Astronaut();
  //   newAstronautJup.earthAge = 1;
  //   expect (newAstronautJup.CalculatePlanetAgeJup()).toEqual(11.86);
  // });
});