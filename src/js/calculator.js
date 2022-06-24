export default function Astronaut (earthAge, newPlanetAge) {
  this.earthAge = earthAge;
  this.newPlanetAge = newPlanetAge;
};

let earthAge = 12;
const mercPlanetYr = .24;
const venPlanetYr = .62;
const marsPlanetYr = 1.88;
const jupPlanetYr = 11.86;


Astronaut.prototype.CalculatePlanetAgeMerc = function () {
  this.newPlanetAge = (earthAge * mercPlanetYr);
  return this.newPlanetAge;
}

Astronaut.prototype.CalculatePlanetAgeVen = function () {
  this.newPlanetAge = (earthAge * venPlanetYr);
  return this.newPlanetAge;
}
