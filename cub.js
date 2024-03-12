class Square {
  constructor(a) {
    this.a = a;
  }

  static help() {
    console.log("Square is a four-sided polygon with equal sides and equal angles.");
  }

  length() {
    console.log(`Length of all sides: ${4 * this.a}`);
  }

  square() {
    console.log(`Square area: ${this.a * this.a}`);
  }

  info() {
    console.log(`Square Info:
      4 sides: ${4 * this.a}
      Square area: ${this.a * this.a}`);
  }
}

class Rectangle extends Square {
  constructor(a, b) {
    super(a);
    this.b = b;
  }

  static help() {
    console.log("Rectangle is a four-sided polygon with opposite sides equal and all angles right angles.");
  }

  length() {
    console.log(`Length of all sides: ${2 * (this.a + this.b)}`);
  }

  square() {
    console.log(`Rectangle area: ${this.a * this.b}`);
  }

  info() {
    console.log(`Rectangle Info:
      All sides: ${2 * (this.a + this.b)}
      Rectangle area: ${this.a * this.b}`);
  }
}

class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help() {
    console.log("Rhombus is a four-sided polygon with all sides having equal length and opposite angles equal.");
  }

  length() {
    console.log(`Length of all sides: ${4 * this.a}`);
  }

  square() {
    console.log(`Rhombus area: ${this.a * this.a * Math.sin(this.alpha * Math.PI / 180)}`);
  }

  info() {
    console.log(`Rhombus Info:
      All sides: ${4 * this.a}
      Rhombus area: ${this.a * this.a * Math.sin(this.alpha * Math.PI / 180)}`);
  }
}

class Parallelogram extends Rectangle {
  constructor(a, b, alpha, beta) {
    super(a, b);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help() {
    console.log("Parallelogram is a four-sided polygon with opposite sides parallel.");
  }

  length() {
    console.log(`Length of all sides: ${2 * (this.a + this.b)}`);
  }

  square() {
    console.log(`Parallelogram area: ${this.a * this.b * Math.sin(this.alpha * Math.PI / 180)}`);
  }

  info() {
    console.log(`Parallelogram Info:
      All sides: ${2 * (this.a + this.b)}
      Parallelogram area: ${this.a * this.b * Math.sin(this.alpha * Math.PI / 180)}`);
  }
}

Object.defineProperty(Rectangle.prototype, "a", {
  get: function () {
    return this._a;
  },
  set: function (value) {
    if (value > 0) {
      this._a = value;
    } else {
      console.log("Invalid value");
    }
  },
});

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

var squareObj = new Square(3);
var rectangleObj = new Rectangle(5, 6);
var rhombusObj = new Rhombus(5, 70, 90);
var parallelogramObj = new Parallelogram(4, 6, 60, 150);

squareObj.info();
rectangleObj.info();
rhombusObj.info();
parallelogramObj.info();

function Triangular(a = 3, b = 4, c = 5) {
  return { a, b, c };
}

const triangularObj1 = Triangular(3, 4, 5);
const triangularObj2 = Triangular(); 

console.log("Triangular Object 1:", triangularObj1);
console.log("Triangular Object 2:", triangularObj2);