function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color || "white";
  this.weight = weight || 0;
  this.avgSpeed = avgSpeed || 0.0;
  this.brand = brand || "Unknown";
  this.model = model || "Unknown";
}

Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
  this.driver = {
    name: name || "Unknown Driver",
    nightDriving: nightDriving || false,
    experience: experience || 0,
  };
};

Truck.prototype.trip = function () {
  if (!this.driver) {
    console.log("No driver assigned");
  } else {
    console.log(
      `Driver ${this.driver.name} ${this.driver.nightDriving ? 'drives at night' : 'does not drive at night'} and has ${this.driver.experience} years of experience`
    );
  }
};

var truck1 = new Truck("blue", 5500, 675, "Mersedes", "1");
var truck2 = new Truck("green", 6000, 55, "BMW", "2");

truck1.AssignDriver("Kostrubiak Marian", true, 5);
truck2.AssignDriver("Kostrubiak Marian", false, 8);

truck1.trip();
truck2.trip();