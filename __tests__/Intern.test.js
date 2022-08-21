const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("can set school via constructor", () => {
    const testValue = "UC Berkeley";
    const intern = new Intern("Foo", 1, "test@test.com", testValue);
    expect(intern.school).toBe(testValue);
  });

  it("getRole should return Intern", () => {
    const testValue = "Intern";
    const intern = new Intern("Foo", 1, "test@test.com", "UCLA");
    expect(intern.getRole()).toBe(testValue);
  });

  it("can get school via getSchool", () => {
    const testValue = "UC Berkeley";
    const intern = new Intern("Foo", 1, "test@test.com", testValue);
    expect(intern.getSchool()).toBe(testValue);
  })
});
