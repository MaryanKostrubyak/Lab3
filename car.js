
var car1 = new Object();
car1.color = "red"; 
car1.maxSpeed = 200; 
car1.driver = {
  name: "Kostrubiak Marian", 
  category: "C",
  personalLimitations: "No driving at night",
};
car1.tuning = true;
car1.numberOfAccidents = 0;

var car2 = {
  color: "blue", 
  maxSpeed: 180, 
  driver: {
    name: "Kostrubiak Marian", 
    category: "B",
    personalLimitations: null,
  },
  tuning: false,
  numberOfAccidents: 2,
};

car1.drive = function () {
  console.log("I am not driving at night");
};

car1.drive();

car2.drive = function () {
  console.log("I can drive anytime");
};

car2.drive();