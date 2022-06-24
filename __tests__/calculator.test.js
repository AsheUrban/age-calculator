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


  // test("it should calculate age for Astronaut on Mercury", () => {
  //   const newAstronautMerc = new Astronaut();
  //   expect (newAstronautMerc.CalculatePlanetAgeMerc()).toEqual(0);
  //   });

  // test("it should calculate age for Astronaut on Venus", () => {
  //   const newAstronautVen = new Astronaut(0,0);
  //   expect (newAstronautVen.CalculatePlanetAgeVen()).toEqual(.62);
  //   });

  // test("it should calculate age for Astronaut on Mars", () => {
  //   const newAstronautMars = new Astronaut(0,0);
  //   expect (newAstronautMars.CalculatePlanetAgeMars()).toEqual(1.88);
  // });

  // test("it should calculate age for Astronaut on Jupiter", () => {
  //   const newAstronautJup = new Astronaut(0,0);
  //   expect (newAstronautJup.CalculatePlanetAgeJup()).toEqual(11.86);
  // });
});