const Square = class {
  constructor(length, width) {
    this.length = length; // 2
    this.width = width; // 3
  }

  area() {
    return this.length * this.width; // 6
  }
};

const square = new Square(2, 3);
const square2 = new Square(3, 4);
console.log(square);
console.log(square.area());

// function myFunc() {};
// const myFunc = function () {};