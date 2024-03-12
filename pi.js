function PiMultiplier(number) {
  return function () {
    return Math.PI * number;
  };
}

const multiplyBy2 = PiMultiplier(2);
const multiplyBy3_2 = PiMultiplier(3 / 2);
const divideBy2 = PiMultiplier(1 / 2);

console.log("Multiplying π by 2:", multiplyBy2());
console.log("Multiplying π by 3/2:", multiplyBy3_2());
console.log("Dividing π by 2:", divideBy2());