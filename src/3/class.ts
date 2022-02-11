class Creature {
  numberOfHead: number;
  numberOfFeet: number;
  constructor(numberOfHead: number, numberOfFeet: number) {
    this.numberOfFeet = numberOfHead;
    this.numberOfHead = numberOfFeet;
  }
}

const creature = new Creature(0, 4);

class Dog extends Creature {
  bark: string;
  constructor(bark: string) {
    super(0, 4);
    this.bark = bark;
  }
  barking() {
    return `${this.bark}! ${this.bark}! `;
  }

  shaketail() {
    console.log(this.barking());
  }
}

class Human extends Creature {
  protected name: string;
  constructor(name: string) {
    super(2, 2);
    this.name = name;
  }
  protected greet() {
    return `Hello ${this.name}`;
  }

  public shakeHands() {
    console.log(this.greet());
  }
}

const dog = new Dog("bow");
const human = new Human("hanako");

dog.shaketail();
human.shakeHands();

class Taro extends Human {
  constructor() {
    super("Taro");
  }
  public greeting() {
    console.log(this.greet());
  }
}

const taro = new Taro();
taro.greeting();
// taro.greet();
taro.shakeHands();
