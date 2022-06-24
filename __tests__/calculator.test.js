import Astronaut from '../src/js/calculator.js';


describe("Astronaut", () => {

  test("it should correctly create an Astronaut object with two properties", () => {
    const astronaut = new Astronaut(0,0)
    expect (astronaut.earthAge).toEqual(0)
    expect (astronaut.newPlanetAge).toEqual(0);
  })

});
