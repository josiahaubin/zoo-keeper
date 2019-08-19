import Alligator from "./models/Alligator.js";
import Bear from "./models/Bear.js";
import Cat from "./models/Cat.js";
import Duck from "./models/Duck.js";

let ally = new Alligator("Ally", "Green", "F", 200, 60, "big");
let brenda = new Bear({ name: "Brenda", yardDash40: "4.35 secs", color: "brown", gender: "F", id: 1 })
let carson = new Cat(2, "Carson", "3 sec", "yellow", true)
let cayla = new Cat(3, "Cayla", "3.2 sec", "orange-yellow", true)
let donald = new Duck({ id: 4, name: "Donald", color: "black", gender: "M", fly: true })

console.log(ally, brenda, carson, cayla, donald)
brenda.eat("fish")
brenda.speak("grrrrrrrr")
carson.eat("Zebras")
cayla.eat("Young Fawns")
donald.speak("Hiya Mickie")