const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    //  call the constructor of its parent class with `super` to access the parent’s properties and methods
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }

}

module.exports = Intern;