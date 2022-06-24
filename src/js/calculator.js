let earthAge = 1;
let newPlanetAge = 0;
let lifeExpectancy = 0;

const mercPlanetYr = .24;
const venPlanetYr = .62;
const marsPlanetYr = 1.88;
// const jupPlanetYr = 11.86;

export default class Astronaut {
constructor(earthAge, newPlanetAge) {
  this.earthAge = earthAge;
  this.newPlanetAge = newPlanetAge;
  this.lifeExpectancy = lifeExpectancy;
}

CalculatePlanetAgeMerc() {
 this.newPlanetAge = (earthAge * mercPlanetYr); 
 return this.newPlanetAge;
}

CalculatePlanetAgeVen() {
  this.newPlanetAge = (earthAge * venPlanetYr);
  return this.newPlanetAge;
}

CalculatePlanetAgeMars() {
  this.newPlanetAge = (earthAge * marsPlanetYr);
  return this.newPlanetAge;
}

// CalculatePlanetAgeJup() {
//   this.newPlanetAge = (earthAge * jupPlanetYr);
//   return this.newPlanetAge;
//   }

}
