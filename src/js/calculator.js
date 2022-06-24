// import $ from "jquery";

export default function Astronaut (earthAge, newPlanetAge) {
  this.earthAge = earthAge;
  this.newPlanetAge = newPlanetAge;
};

let newAstronaut1 = new Astronaut(0,0);

// Astronaut.prototype.CalculatePlanetAge(earthAge, newPlanetAge) {
//   for (let index = 0; index <= earthAge; index += 1) {
//      if(planet === "Mercury") {
//       this.newPlanetAge = (earthAge * mercPlanetYr);
//      }
//      return this.newPlanetAge;
//   }
// }

// let planet = "Mercury";
// let mercPlanetYr = .24;
// let earthAge = 12;



// export default function calculatePlanetAge() {
//   for (let index = 0; index = earthAge; index += 1) {
//     if(planet === "Mercury") {
//       return(earthAge * mercPlanetYr);
//        } if (planet === "Venus") {
//          return(earthAge * venPlanetYr);
//            } if (planet === "Mars") {
//             return(earthAge * marsPlanetYr);
//                } if (planet === "Jupiter") {
//                  return(earthAge * jupPlanetYr);
//                    }
//   }
// }
// let planets = ["Mercury", "Venus", "Mars", "Jupiter"];
// let mercPlanetYr = .24;
// const venPlanetYr = .62;
// const marsPlanetYr = 1.88;
// const jupPlanetYr = 11.86;
