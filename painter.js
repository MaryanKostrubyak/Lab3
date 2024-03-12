function Painter(color) {
  return function (obj) {
    if (obj && obj.type) {
      console.log(`Color: ${color}, Type: ${obj.type}`);
    } else {
      console.log(`Color: ${color}, No 'type' property occurred!`);
    }
  };
}

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

const object1 = { maxSpeed: 280, type: "Truck" };
const object2 = { color: "purple", avgSpeed: 90, type: "Sportcar" };
const object3 = { color: "magenta", loadCapacity: 2400, isCar: true };

PaintBlue(object1);
PaintRed(object2);
PaintYellow(object3);