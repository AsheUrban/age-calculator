// import $ from "jquery";

export default function calculatePlanetAge() {
  let newPlanetAge = [0];
  for (let index = 0; index <= parseInt(earthAge); index += 1) {
    newPlanetAge.push(index)
     if(planet === "Mercury") {
       newPlanetAge = (earthAge * mercPlanetYr);
  }
  return newPlanetAge;
  }
}

let planet = "Mercury";
let mercPlanetYr = .24;
let earthAge = 12;

// let planets = ["Mercury", "Venus", "Mars", "Jupiter"];
// const venPlanetYr = .62;
// const marsPlanetYr = 1.88;
// const jupPlanetYr = 11.86;

// export default function calculatePlanetAge() {
//   let newPlanetAge = [0];
//   for (let index = 0; index <= parseInt(earthAge); index += 1) {
//     newPlanetAge.push(index)
//      if(planet === "Mercury") {
//        newPlanetAge = (earthAge * mercPlanetYr);
//         } if (planet === "Venus") {
//           newPlanetAge = (earthAge * venPlanetYr);
//             } if (planet === "Mars") {
//               newPlanetAge = (earthAge * marsPlanetYr);
//                 } if (planet === "Jupiter") {
//                   newPlanetAge = (earthAge * jupPlanetYr);
//                     }

//     }
//   return newPlanetAge;
// }