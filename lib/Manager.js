const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    //  call the constructor of its parent class with `super` to access the parent’s properties and methods
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  get OfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager"
  }
}

module.exports = Manager;