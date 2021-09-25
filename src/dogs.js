import Animals from './animals';
class Dogs extends Animals {
  constructor(name, image, age) {
    super(name, image, 4);
    this.age = age;
  }
}

export default Dogs