//Modern way of classes

class Human {
  age = "above 18";
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "John";

  printMyName = () => {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  };
}

const prsn = new Person();
prsn.printMyName();
