// import $ from "jquery";

export default function calculatePlanetAge() {
  for (let index = 0; index <= earthAge; index += 1) {
     if(planet === "Mercury") {
      return (earthAge * mercPlanetYr);
     }
  }
}


let planet = "Mercury";
let mercPlanetYr = .24;
let earthAge = 12;



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
