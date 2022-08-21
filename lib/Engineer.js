const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    //  call the constructor of its parent class with `super` to access the parent’s properties and methods
    super(name, id, email);
    this.github = github;
  }

  get Github() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }

}

module.exports = Engineer;