// import $ from "jquery";

export default function calculatePlanetAge() {
  if(planet === "Mercury") {
   newPlanetAge = (earthAge * .24);
    return newPlanetAge;
  }
  
}

let newPlanetAge = 0;
let planet = "Mercury";
const earthAge = 12;