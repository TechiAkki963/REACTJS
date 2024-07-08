class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  startEngine() {
    console.log("Engine started!");
  }
}

class ElectricCar extends Car {
  // ElectricCar inherits from Car
  constructor(model, color, batteryRange) {
    super(model, color); // Call the parent class constructor
    this.batteryRange = batteryRange;
  }

  chargeBattery() {
    console.log("Battery charging...");
  }
}

const car1 = new Car("Tesla Model S", "Red");
const electricCar1 = new ElectricCar("Tesla Model 3", "Blue", 300);

car1.startEngine(); // Output: Engine started!
electricCar1.startEngine(); // Output: Engine started! (inherited)
electricCar1.chargeBattery(); // Output: Battery charging...
