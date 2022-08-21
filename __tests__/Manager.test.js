const Manager = require('../lib/Manager');

describe("Manager", () => {
  it("Can set an office number.", () => {
    const testOfficeNumber = 2;
    const manager = new Manager("Sherri", 2, "sherri.a.knight@gmail.com", testOfficeNumber);
    expect(manager.officeNumber).toBe(testOfficeNumber);
  })
});

it("getRole should return Manager", () => {
  const testValue = "Manager";
  const manager = new Manager("Foo", 1, "test@test.com", 100);
  expect(manager.getRole()).toBe(testValue);
});

it("Can get office number via getOffice()", () => {
  const testValue = 100;
  const manager = new Manager("Foo", 1, "test@test.com", testValue);
  expect(manager.getOfficeNumber()).toBe(testValue);
});