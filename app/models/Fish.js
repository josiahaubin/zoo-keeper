export default class Fish {
  constructor(
    id = 0,
    name = "",
    color = "",
    gender = "",
    lake = false,
    sea = false
  ) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.lake = lake;
    this.sea = sea;
  }
}