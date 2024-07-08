class Person {
  // Properties
  constructor(name) {
    this.name = "Akshay";
  }

  //Methods
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
