export default class Duck {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.gender = data.gender;
    this.color = data.color;
    this.fly = data.fly;
  }

  speak(noise) {
    console.log(`${this.name} ${this.constructor.name} says "${noise}!!!!"`)
  }
}