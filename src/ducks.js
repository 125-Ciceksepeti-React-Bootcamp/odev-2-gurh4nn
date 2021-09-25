import Animals from './animals';
class Ducks extends Animals {
  constructor(name, image, age) {
    super(name, image, 2);
    this.age = age;
  }
}

export default Ducks