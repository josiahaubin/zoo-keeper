export default class Bear {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.yardDash40 = data.yardDash40;
    this.color = data.color;
    this.gender = data.gender;
  }

  eat(food) {
    console.log(`I eatz ${food} daily`);
  }

  speak(noise) {
    console.log(`The ${this.constructor.name} named ${this.name} says ${noise}`)
  }
}
