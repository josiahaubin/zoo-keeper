export default class Cat {
  constructor(id, name, yardDash40, color, tail) {
    this.id = id;
    this.name = name;
    this.yardDash40 = yardDash40;
    this.color = color;
    this.tail = tail;
  }

  eat(food) {
    console.log(`${this.name} likes to eat ${food}`)
  }

}