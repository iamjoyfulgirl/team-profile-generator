const Engineer = require('../lib/Engineer.js');

describe("Engineer", () => {
  it("can create a new Engineer", () => {
    const engineer = new Engineer();
    expect(typeof (engineer)).toBe("object");
  })
});

it("can set Github account via constructor", () => {
  const testValue = "GitHubUser";
  const engineer = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(engineer.github).toBe(testValue);
});

it("getRole should return Engineer", () => {
  const testValue = "Engineer";
  const engineer = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(engineer.getRole()).toBe(testValue);
});

it("can get Github username via getGithub", () => {
  const testValue = "GitHubUser";
  const engineer = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(engineer.getGithub()).toBe(testValue);
});